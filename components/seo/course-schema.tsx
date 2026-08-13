import { JsonLd } from "./json-ld";

interface CourseSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  language?: string;
  isFree?: boolean;
  lessons?: { name: string; description: string }[];
}

export function CourseSchema({
  name,
  description,
  url,
  provider = "Tony Hoang",
  language = "vi",
  isFree,
  lessons = [],
}: CourseSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    inLanguage: language,
    ...(isFree !== undefined && { isAccessibleForFree: isFree }),
    ...(lessons.length > 0 && {
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        hasPart: lessons.map((lesson, index) => ({
          "@type": "LearningResource",
          position: index + 1,
          name: lesson.name,
          description: lesson.description,
        })),
      },
    }),
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://tranvanhoang.com",
    },
    creator: {
      "@type": "Person",
      name: "Tony Hoang",
      url: "https://tranvanhoang.com/about",
    },
  };

  return <JsonLd data={schema} />;
}
