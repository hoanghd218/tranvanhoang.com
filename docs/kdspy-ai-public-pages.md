# KDSPY AI public documentation

Published October 11, 2026.

- Privacy: https://www.tranvanhoang.com/en/privacy/kdspy-ai
- Support: https://www.tranvanhoang.com/en/support/kdspy-ai
- Unprefixed routes are also available; article content is English.
- Contact: [hoanghd218@gmail.com](mailto:hoanghd218@gmail.com), explicitly supplied by the owner for public support.

Production deployment: `https://tranvanhoang-6ahiyxo6r-hoangtran218s-projects.vercel.app`.
The isolated deployment is based on live commit `7833b72c7b52f9b470ad4321ca2b1e77e64c7188`, adding only policy/support pages, shared public contact helper, route entries, sitemap entries and footer links. Existing uncommitted editorial/product redesign was not published. Worktree: `/tmp/kdspy-ai-policy-deploy`.

Validation: production build and focused ESLint pass; four routes at desktop/mobile passed eight browser checks; public English URLs return HTTP 200 with expected content and contact links. Test screenshots and reports are in `plans/reports/kdspy-ai-*`.

The extension code and Store draft now link to these pages. The Store publisher contact email is now entered; its verification email has been sent and the owner must click the verification link before it expires (one hour). Live OAuth verification remains outstanding. Public policy/support responses were checked again after the email update and contain the correct visible address and `mailto:` link.

## Current-baseline restoration prepared

A later production release based on editorial integration commit `55bca458291ad15fd7f210391bc91a18f19a5f82` omitted the separately deployed KDSPY AI pages, causing a production regression. The restoration is prepared in `/tmp/kdspy-ai-policy-current` on that current baseline. It adds only the two article pages, shared contact/path helper, routing entries, sitemap entries and footer links, preserving the current theme and learning/course routes.

The six-path restoration passed lint, production build and tester HTTP checks (12/12). Code review found no blocking issues. Restoration is deployed and publicly verified. Production deployment: `https://tranvanhoang-gb2s5qdpw-hoangtran218s-projects.vercel.app` (`dpl_Ey5N61Amq9pKDodYVjBHhezbGgKU`), aliased to `www.tranvanhoang.com`. Anonymous privacy/support requests return HTTP 200 and both contain the owner-confirmed visible email and `mailto:hoanghd218@gmail.com` link. This supersedes the earlier deployment listed above. The six application changes still need a focused source commit and integration into future release branches to prevent another overwrite.
