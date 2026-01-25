import fs from "fs";
import path from "path";
import matter from "gray-matter";
import slugify from "slugify";

const lifeContentDirectory = path.join(process.cwd(), "content/life");

export type LifeStoryMetadata = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featuredImage?: string;
  draft?: boolean;
};

export type LifeStory = {
  slug: string;
  metadata: LifeStoryMetadata;
  content: string;
  year: string;
};

// Vietnamese slugify function
function slugifyVi(text: string): string {
  return slugify(text, {
    lower: true,
    strict: true,
    locale: "vi",
    trim: true,
  });
}

// Get all life story files
function getLifeStoryFiles(): string[] {
  if (!fs.existsSync(lifeContentDirectory)) {
    return [];
  }

  const files: string[] = [];
  const entries = fs.readdirSync(lifeContentDirectory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(lifeContentDirectory, entry.name);
    if (entry.isFile() && (entry.name.endsWith(".mdx") || entry.name.endsWith(".md"))) {
      files.push(fullPath);
    }
  }

  return files;
}

// Parse a single life story
function parseLifeStory(filePath: string): LifeStory | null {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    if (!data.title || !data.date) {
      console.warn(`Missing required frontmatter in: ${filePath}`);
      return null;
    }

    const fileName = path.basename(filePath, path.extname(filePath));
    const slug = slugifyVi(data.slug || data.title || fileName);
    const year = new Date(data.date).getFullYear().toString();

    return {
      slug,
      metadata: {
        title: data.title,
        description: data.description || "",
        date: data.date,
        tags: data.tags || [],
        featuredImage: data.featuredImage,
        draft: data.draft || false,
      },
      content,
      year,
    };
  } catch (error) {
    console.error(`Error parsing life story: ${filePath}`, error);
    return null;
  }
}

// Get all life stories sorted by date
export function getAllLifeStories(): LifeStory[] {
  if (!fs.existsSync(lifeContentDirectory)) {
    return [];
  }

  const files = getLifeStoryFiles();
  const stories = files
    .map(parseLifeStory)
    .filter((story): story is LifeStory => story !== null && !story.metadata.draft)
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  return stories;
}

// Get all unique years
export function getAllYears(): string[] {
  const stories = getAllLifeStories();
  const yearsSet = new Set<string>();

  stories.forEach((story) => {
    yearsSet.add(story.year);
  });

  return Array.from(yearsSet).sort().reverse();
}

// Get stories by year
export function getStoriesByYear(year: string): LifeStory[] {
  const stories = getAllLifeStories();
  return stories.filter((story) => story.year === year);
}

// Get a single story by slug
export function getLifeStoryBySlug(slug: string): LifeStory | null {
  const stories = getAllLifeStories();
  return stories.find((story) => story.slug === slug) || null;
}

// Get featured stories (most recent)
export function getFeaturedStories(limit = 3): LifeStory[] {
  const stories = getAllLifeStories();
  return stories.slice(0, limit);
}
