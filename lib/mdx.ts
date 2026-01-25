import fs from "fs";
import path from "path";
import matter from "gray-matter";
import slugify from "slugify";

const contentDirectory = path.join(process.cwd(), "content");

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  author?: string;
  readingTime?: string;
  featuredImage?: string;
  draft?: boolean;
};

export type BlogPost = {
  slug: string;
  category: string;
  metadata: PostMetadata;
  content: string;
  readingTime?: string;
};

export type CategoryInfo = {
  slug: string;
  name: string;
  description: string;
  count: number;
};

const categoryMap: Record<string, { name: string; description: string }> = {
  "ai-co-ban": {
    name: "AI Cơ Bản",
    description: "Kiến thức nền tảng về AI cho người mới bắt đầu",
  },
  "ai-marketing": {
    name: "AI cho Marketing",
    description: "Ứng dụng AI vào marketing và content creation",
  },
  "tool-prompt": {
    name: "Tools & Prompts",
    description: "Hướng dẫn sử dụng công cụ AI và viết prompt hiệu quả",
  },
  "goc-trai-nghiem": {
    name: "Góc Trải Nghiệm",
    description: "Chia sẻ trải nghiệm và bài học thực tế",
  },
};

// Vietnamese slugify function
export function slugifyVi(text: string): string {
  return slugify(text, {
    lower: true,
    strict: true,
    locale: "vi",
    trim: true,
  });
}

// Get all post file paths recursively
function getPostFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getPostFiles(fullPath));
    } else if (entry.isFile() && (entry.name.endsWith(".mdx") || entry.name.endsWith(".md"))) {
      files.push(fullPath);
    }
  }

  return files;
}

// Parse a single MDX file
function parsePost(filePath: string): BlogPost | null {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    // Validate required fields
    if (!data.title || !data.date || !data.category) {
      console.warn(`Missing required frontmatter in: ${filePath}`);
      return null;
    }

    // Get relative path for category
    const relativePath = path.relative(contentDirectory, filePath);
    const pathParts = relativePath.split(path.sep);
    const category = pathParts[0] || "uncategorized";

    // Generate slug from filename or title
    const fileName = path.basename(filePath, path.extname(filePath));
    const slug = slugifyVi(data.slug || data.title || fileName);

    // Calculate reading time
    const wordCount = content.split(/\s+/g).length;
    const readingTime = `${Math.ceil(wordCount / 200)} phút`;

    return {
      slug,
      category,
      metadata: {
        title: data.title,
        description: data.description || "",
        date: data.date,
        tags: data.tags || [],
        category: data.category,
        author: data.author || "Hoàng",
        readingTime,
        featuredImage: data.featuredImage,
        draft: data.draft || false,
      },
      content,
      readingTime,
    };
  } catch (error) {
    console.error(`Error parsing post: ${filePath}`, error);
    return null;
  }
}

// Get all posts from all categories
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = getPostFiles(contentDirectory);
  const posts = files
    .map(parsePost)
    .filter((post): post is BlogPost => post !== null && !post.metadata.draft)
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  return posts;
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.metadata.tags.map((t) => slugifyVi(t)).includes(slugifyVi(tag))
  );
}

// Get a single post by category and slug
export function getPostBySlug(category: string, slug: string): BlogPost | null {
  const posts = getPostsByCategory(category);
  return posts.find((post) => post.slug === slug) || null;
}

// Get all unique tags
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tagsSet = new Set<string>();

  allPosts.forEach((post) => {
    post.metadata.tags.forEach((tag) => {
      tagsSet.add(slugifyVi(tag));
    });
  });

  return Array.from(tagsSet).sort();
}

// Get tag counts
export function getTagCounts(): Record<string, number> {
  const allPosts = getAllPosts();
  const counts: Record<string, number> = {};

  allPosts.forEach((post) => {
    post.metadata.tags.forEach((tag) => {
      const slug = slugifyVi(tag);
      counts[slug] = (counts[slug] || 0) + 1;
    });
  });

  return counts;
}

// Get all categories with metadata
export function getAllCategories(): CategoryInfo[] {
  const allPosts = getAllPosts();
  const categories: CategoryInfo[] = [];

  for (const [slug, info] of Object.entries(categoryMap)) {
    const posts = allPosts.filter((post) => post.category === slug);
    categories.push({
      slug,
      ...info,
      count: posts.length,
    });
  }

  return categories;
}

// Get related posts (same category, exclude current)
export function getRelatedPosts(category: string, currentSlug: string, limit = 3): BlogPost[] {
  const posts = getPostsByCategory(category)
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);

  return posts;
}

// Search posts (basic implementation)
export function searchPosts(query: string): BlogPost[] {
  const allPosts = getAllPosts();
  const searchTerm = slugifyVi(query).toLowerCase();

  return allPosts.filter((post) => {
    const searchContent = [
      post.metadata.title,
      post.metadata.description,
      post.metadata.category,
      ...post.metadata.tags,
      post.slug,
    ]
      .map((s) => slugifyVi(s).toLowerCase())
      .join(" ");

    return searchTerm.split(" ").some((term) => searchContent.includes(term));
  });
}

// Get posts for pagination
export function getPostsForPagination(
  posts: BlogPost[],
  page: number,
  limit: number
): { posts: BlogPost[]; totalPages: number; currentPage: number } {
  const totalPages = Math.ceil(posts.length / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    posts: posts.slice(startIndex, endIndex),
    totalPages,
    currentPage: page,
  };
}
