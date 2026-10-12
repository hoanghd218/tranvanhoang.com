# Image book viewer

`components/image-book/image-book-viewer.tsx` exports a reusable view-only reader. No upload, download, checkout or backend. Images are fetched directly from supplied Cloudflare CDN URLs; no Next.js image optimization or host configuration is required (`unoptimized`). Keep only public image URLs in product data, never storage credentials.

```tsx
import { ImageBookViewer, type ImageBookPage } from "@/components/image-book/image-book-viewer"

// Load verified public URLs and image dimensions from your product's data record.
<ImageBookViewer key={product.id} title={product.title} pages={product.pages satisfies ImageBookPage[]} />
```

Each page requires `src`, descriptive `alt`, `width`, `height`; optional `thumbnail` avoids loading full images in the strip. Optimize full pages to WebP/AVIF on Cloudflare; use lightweight thumbnail URLs. The component preserves aspect ratio and never crops artwork.

Desktop: separate cover followed by two-page spreads. Below 768px: single page with horizontal swipe; vertical scrolling and native pinch zoom remain available. Previous/next buttons, arrow keys while focus is inside the reader, page selector, thumbnails, 180% zoom and fullscreen are provided. Browsers without fullscreen show a message and retain zoom. Failed pages offer retry. Empty books show an empty state.

Use `key={product.id}` when switching products to reset page/zoom/error state. No global keyboard handlers, URL rewriting or persistence; multiple readers can coexist. Normal viewing uses StPageFlip (`page-flip` 2.0.7) for page curls, shadows and corner dragging. Zoom and reduced-motion use the static reader, retaining the selected page. Initialization/image failure falls back to the static reader with retry. The pinned engine has a checked-in pnpm patch that exposes renderer `stop()`; teardown cancels its RAF loop before destroying the engine. Import the component from any product page; this change does not publish a product or upload any assets.

## Public books

`/playbooks` lists the catalog; `/playbooks/rea` opens the ten-page REA book. Add another book record in `lib/playbooks.ts`, using verified CDN page data from `lib/data/playbooks/`. Unknown slugs return 404. Source images stay outside git; generated CDN manifests contain only public URLs.

To publish a book, upload optimized full-size WebP and thumbnails using:

```sh
CLOUDFLARE_ACCOUNT_ID=your-account-id node scripts/publish-image-book.mjs --slug rea --source /path/to/pages
```

Input names are consecutive `01.png`, `02.png`, etc. The uploader uses the existing `tony-hoang-media` bucket, content-derived immutable paths and `media.ainexus.vn`. Every object is publicly verified for bytes and content type before writing the manifest. Existing matching objects are reused; conflicting content or uncertain upload errors stop the run. Verify remote state before retrying an interrupted write.
