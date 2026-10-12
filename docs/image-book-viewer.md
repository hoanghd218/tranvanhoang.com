# Image book viewer

`components/image-book/image-book-viewer.tsx` exports a reusable view-only reader. No upload, download, checkout or backend. Images are fetched directly from supplied Cloudflare CDN URLs; no Next.js image optimization or host configuration is required (`unoptimized`). Keep only public image URLs in product data, never storage credentials.

```tsx
import { ImageBookViewer, type ImageBookPage } from "@/components/image-book/image-book-viewer"

// Load verified public URLs and image dimensions from your product's data record.
<ImageBookViewer key={product.id} title={product.title} pages={product.pages satisfies ImageBookPage[]} />
```

Each page requires `src`, descriptive `alt`, `width`, `height`; optional `thumbnail` avoids loading full images in the strip. Optimize full pages to WebP/AVIF on Cloudflare; use lightweight thumbnail URLs. The component preserves aspect ratio and never crops artwork.

Desktop: separate cover followed by two-page spreads. Below 768px: single page with horizontal swipe; vertical scrolling and native pinch zoom remain available. Previous/next buttons, arrow keys while focus is inside the reader, page selector, thumbnails, 180% zoom and fullscreen are provided. Browsers without fullscreen show a message and retain zoom. Failed pages offer retry. Empty books show an empty state.

Use `key={product.id}` when switching products to reset page/zoom/error state. No global keyboard handlers, URL rewriting or persistence; multiple readers can coexist. No third-party animation library or page curl. Import the component from any product page; this change does not publish a product or upload any assets.
