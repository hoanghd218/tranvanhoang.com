# Skill edit video campaign

`/skill-edit-video-free` is a Vietnamese campaign page using the existing Tony Hoang RoboLabs shell. `/vi/skill-edit-video-free` renders the same Vietnamese campaign; the canonical URL is unprefixed. No Freedom Builder branding is added.

The page displays the owner-specified packages: 1 free editing skill, or a one-time 199,000 VND coffee package with 10 editing skills across industries. The creative workspace illustration is decorative, not a software screenshot. Skill files are not included in this website repository.

## Real ERP connection

Set `NEXT_PUBLIC_VIDEO_SKILL_ERP_ORIGIN` to the HTTPS origin of the Frappe site serving `edu_business`, without trailing slash, then rebuild. This is public configuration, never an API key. Do not point it at the old extension Worker. If absent or the SDK script cannot load, the page shows a support link and does not pretend a registration succeeded.

The component loads `/assets/edu_business/js/embed.v1.js` from that origin, explicitly mounts form `skill_edit_video_free`, and destroys the mount during navigation. The existing SDK fetches live fields, offers, prices, privacy notice and Turnstile configuration, handles attribution and idempotent submission, and displays real checkout/delivery results. There is no call to the legacy mocked `/api/claim-gift` route. Marketing consent is not preselected.

ERP configuration lives in sibling repo `rocket-ai-edu-all/erp.freedombuilders`:

- `edu_business/setup/skill_video.py`: reproducible draft setup and guarded publishing.
- `docs/integrations/skill-edit-video-free.md`: setup and publication instructions.
- Program: `skill-edit-video-free`; form: `skill_edit_video_free`.
- Named zero-price offer: `skill_video_free`; paid offer: `skill_video_cafe_199`.
- Item author resolves server-side from Contact email `hoanghd218@gmail.com`; the website does not send an author email as attribution proof.
- Allowed origins include `https://tranvanhoang.com` and `https://www.tranvanhoang.com`.

Named zero-price offers are intentional: the generic `free` form choice records registration without granting a downloadable product. Actual download entitlement must use the named offer.

## Pending activation

Development drafts have been provisioned. Supply both actual protected skill archives and choose an existing approved, published revenue-share policy before enabling the form/offers. No percentage is inferred. Set the ERP public base URL and payment/email settings, configure anti-bot protection, publish using the ERP setup command, and set the website environment variable. Validate on a real staging origin allowed by the form before production publication. Neither website nor ERP has been deployed by this task.

## Acceptance checks

Check `/skill-edit-video-free` at 390px and desktop: a single Tony Hoang header, package details, registration anchor and FAQ. With ERP connected, verify live 0/199000 prices, required field/privacy validation, optional marketing consent, free download entitlement, paid checkout, repeated submit idempotency and confirmed-payment-only delivery. Inspect Contact/Registration and authored Items in ERP; never infer payment success from a redirect. Do not send real customer email or charge money during development checks.

Validation completed: `pnpm lint` (one existing React Hook Form warning), `pnpm exec tsc --noEmit`, `pnpm build`, and `node --test tests/*.test.mjs` (12 passed). Desktop 1440px and mobile 390px browser checks passed with the unconfigured support fallback. Payment, live ERP registration and delivery remain untested pending activation.
