import { JsonLd } from "./json-ld";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tony Hoang",
    "url": "https://tranvanhoang.com",
    "logo": "https://tranvanhoang.com/icon.svg",
    "description": "Nội dung thực hành về AI cho công việc, marketing và sản phẩm số",
    "founder": {
      "@type": "Person",
      "name": "Tony Hoang"
    },
    "inLanguage": "vi",
    "sameAs": [
      "https://www.facebook.com/hoanghd218/",
      "https://www.youtube.com/@tony-hoang-ai-automation",
      "https://www.linkedin.com/in/hoanghd218/"
    ]
  };

  return <JsonLd data={schema} />;
}
