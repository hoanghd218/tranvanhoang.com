import { JsonLd } from "./json-ld";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hoàng",
    "url": "https://tranvanhoang.com",
    "jobTitle": "AI Educator",
    "description": "Người dạy AI cho người mới bắt đầu, giúp hàng nghìn người tiếp cận công nghệ một cách đơn giản.",
    "sameAs": [
      "https://facebook.com",
      "https://youtube.com"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Prompt Engineering",
      "AI for Marketing",
      "AI for Work"
    ],
    "areaOfServed": "Vietnam"
  };

  return <JsonLd data={schema} />;
}
