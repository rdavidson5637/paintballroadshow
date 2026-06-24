# Paintball Roadshow — Website

## Getting started

```bash
npm install --legacy-peer-deps
npm run dev
```

## Deployment

Deploy via Vercel. Connect the GitHub repo and use these settings:

- **Framework Preset:** Next.js
- **Root Directory:** `/` (leave blank)
- **Build Command:** `npm run build` (default)
- **Output Directory:** leave **empty** — do not set this to `public`
- **Install Command:** `npm install --legacy-peer-deps`

The `public/` folder holds static assets (images, favicon), not the build output. A `vercel.json` is included to pin the Next.js framework.

No environment variables required unless Formspree is configured.

## Formspree

Update the `FORMSPREE_ENDPOINT` constant in `app/contact/page.tsx` with your Formspree form ID.

## Images

Place client images in `/public/images/`. See `/public/images/README.md` for naming conventions.

## Company details (for reference)

- Trading name: Paintball Roadshow
- Legal entity: Management & Leisure Strategies Limited
- Company No: 5176055 (Registered in England & Wales)
- Registered office: Fiducia House, 14 Ffordd Cynfal, Bangor, Gwynedd, UK. LL57 2YL
- Phone: 08700 63 00 63
- Fax: 08700 63 00 64
- Email: info@paintball-roadshow.com
