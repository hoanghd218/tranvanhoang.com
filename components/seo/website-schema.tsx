import { JsonLd } from "./json-ld";

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tony Hoang",
    "url": "https://tranvanhoang.com",
    "description": "Chia sẻ cách ứng dụng AI vào công việc, marketing và sản phẩm số",
    "inLanguage": "vi",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://tranvanhoang.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return <JsonLd data={schema} />;
}
