import { JsonLd } from "./json-ld";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tony Hoang",
    "url": "https://tranvanhoang.com",
    "jobTitle": "AI Educator",
    "description": "Người dạy AI cho người mới bắt đầu, giúp hàng nghìn người tiếp cận công nghệ một cách đơn giản.",
    "sameAs": [
      "https://www.facebook.com/hoanghd218/",
      "https://www.youtube.com/@tony-hoang-ai-automation",
      "https://www.linkedin.com/in/hoanghd218/"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Prompt Engineering",
      "AI for Marketing",
      "AI for Work"
    ],
    "areaServed": "Vietnam"
  };

  return <JsonLd data={schema} />;
}
