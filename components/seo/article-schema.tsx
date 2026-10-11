import { JsonLd } from "./json-ld";

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
  tags?: string[];
  image?: string;
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  url,
  tags,
  image,
}: ArticleSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: "vi",
    author: {
      "@type": "Person",
      name: author,
      url: "https://tranvanhoang.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Tony Hoang",
      url: "https://tranvanhoang.com",
      logo: {
        "@type": "ImageObject",
        url: "https://tranvanhoang.com/icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  if (tags && tags.length > 0) {
    schema.keywords = tags.join(", ");
  }

  if (image) {
    schema.image = image;
  }

  return <JsonLd data={schema} />;
}
