import { JsonLd } from "./json-ld";

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hoàng - AI Educator",
    "url": "https://tranvanhoang.com",
    "description": "Dạy AI cho người mới bắt đầu",
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
