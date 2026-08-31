# Technology assets

These files are stored locally so the technology grid does not depend on third-party
CDNs at runtime.

## Directory structure

- `backend`, `frontend`, `database`, `service`, `language`, and `tool` mirror the
  areas used by the technology grid.
- `shared` contains assets reused by more than one area, currently React and Swift.

## Official brand assets

- `frontend/tailwindcss.svg`: Tailwind CSS brand mark from https://tailwindcss.com/brand
- `tool/linear-on-*.svg`: Linear logo variants from https://linear.app/brand
- `frontend/nextjs-on-*.svg`: Next.js symbol variants from https://vercel.com/geist/brands
- `service/vercel-on-*.svg`: Vercel symbol variants from https://vercel.com/geist/brands
- `tool/github-on-*.svg`: GitHub Invertocat variants from https://brand.github.com/foundations/logo
- `tool/prettier.png`: Prettier icon from https://prettier.io/icon.png

The `on-light` and `on-dark` suffixes identify the background for which an official
variant is intended. Do not recolor or transform these files. Brand names and logos
remain the property of their respective owners and must be used according to their
published guidelines.

## Catalog assets

The remaining product and language icons are local copies from Devicon or Simple
Icons. `language/sql.svg` is a custom project asset because SQL has no single
official brand.
