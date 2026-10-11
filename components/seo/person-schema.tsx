import { JsonLd } from "./json-ld";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tony Hoang",
    "url": "https://tranvanhoang.com",
    "jobTitle": "Systems Architect",
    "description": "Kiến trúc sư thiết kế hệ thống, kết hợp con người, công nghệ và AI.",
    "sameAs": [
      "https://www.facebook.com/hoanghd218/",
      "https://www.youtube.com/@tony-hoang-ai-automation",
      "https://www.linkedin.com/in/hoanghd218/"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Systems Architecture",
      "Systems Design",
      "AI Agents",
      "Process Design"
    ],
    "image": "https://tranvanhoang.com/hoang-profile.webp",
    "areaServed": "Vietnam"
  };

  return <JsonLd data={schema} />;
}
