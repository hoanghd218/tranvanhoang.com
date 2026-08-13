import { JsonLd } from "./json-ld";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tony Hoang",
    "url": "https://tranvanhoang.com",
    "description": "Chia sẻ cách ứng dụng AI vào công việc, marketing và sản phẩm số bằng các quy trình thực hành.",
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
    "image": "https://tranvanhoang.com/hoang-profile.webp",
    "areaServed": "Vietnam"
  };

  return <JsonLd data={schema} />;
}
