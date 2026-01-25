import { JsonLd } from "./json-ld";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hoàng - AI Educator",
    "url": "https://tranvanhoang.com",
    "logo": "https://tranvanhoang.com/icon.svg",
    "description": "Dạy AI cho người mới bắt đầu",
    "founder": {
      "@type": "Person",
      "name": "Hoàng"
    },
    "sameAs": [
      "https://facebook.com",
      "https://youtube.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hoang@example.com"
    }
  };

  return <JsonLd data={schema} />;
}
