# Product cover artwork

Product discovery uses AI-generated robotic artwork adapted to the black/orange RoboLabs theme. These images are conceptual decoration; they do not depict an actual robot, extension interface or verified product outcome. Detail heroes, feature tours and screenshot galleries retain the real extension screenshots from the verified media library, with demo-data labels.

## Active source paths

| Product | Website artwork source |
| --- | --- |
| RocketFlow | `public/images/products/rocketflow-robotic-cover.webp` |
| RocketListing | `public/images/products/rocketlisting-robotic-cover.webp` |
| KDSPY AI (slug `rocketspy`) | `public/images/products/rocketspy-robotic-cover.webp` |

`lib/products.ts` maps products to these files. Local logos and editable product names remain separate assets/HTML. These robotic covers replace the prior ivory/emerald/gold sculptural covers (`rocketflow-cover.webp`, `rocketlisting-cover.webp`, `rocketspy-cover.webp`). The older prompts describe superseded artwork and should not be used as the specification for current visuals.

## Generation sources

Three built-in image-generation calls produced local PNG originals in `/Users/tonyhoang/.codex/generated_images/01a12eb5-19c6-70c3-a941-ee70abfd0c17/`:

- RocketFlow: `exec-d60b11e6-0ec0-43a5-805a-0399f5bee7c6.png` — robotic hand orchestrating a workflow.
- RocketListing: `exec-fc0f76e6-ee9b-493e-9b01-3fa76276906a.png` — robotic product scanning.
- KDSPY AI: `exec-a3afce08-81b2-4d42-9625-a05ddd1da5a9.png` — robotic lens and book analytics.

Final outputs are 1200 × 800 WebPs encoded at quality 85. These local originals are outside the repository; the committed WebPs are the website sources. Exact full prompts are not retained here. The descriptions above identify the concepts, rather than claiming to reproduce the original prompt text.

No screenshot or interface was generated. The change reuses all 67 screenshots and the existing content-hashed media collection, requiring no new R2 media upload. Preserve image containment and genuine interface details; never substitute decorative cover artwork for screenshot evidence.
