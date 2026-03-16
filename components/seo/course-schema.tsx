import { JsonLd } from "./json-ld";

interface CourseSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  language?: string;
}

export function CourseSchema({
  name,
  description,
  url,
  provider = "Tony Hoang - AI Educator",
  language = "vi",
}: CourseSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    inLanguage: language,
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
