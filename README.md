# Wyndo

Next.js website for Wyndo.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Brand

- Brand tokens (palette, type scale) live at the top of `app/globals.css`
- Primary palette is black `#000000` and white `#FFFFFF`; the secondary palette
  supplies the accent (Glaucous `#618CB7`)
- Typeface is Geist, loaded via `next/font` in `lib/fonts.ts`
- Logo lives in `components/Logo.tsx` (`Logo` lockup, `LogoMark` symbol);
  standalone files are in `public/logo/`
- Name, contact details, and social links are in `lib/site.ts`

## Source notes

- Homepage design ported from `template.html`
- Site copy in `website-copy.md`
