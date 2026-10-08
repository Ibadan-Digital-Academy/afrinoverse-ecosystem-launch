# Afrinoverse — minimal UI upgrade

## What changed

- Reworked the existing design tokens to a premium neutral white/soft-grey/charcoal palette with Afrinoverse's orange used as an accent; no brand graphics were replaced.
- Refined the sticky navigation, responsive wordmark, current-section indicator, menu labelling and pill-shaped primary CTA.
- Improved the first-screen hierarchy with a centered, responsive headline, focused actions, generous whitespace, rounded hero imagery and a quieter contextual overlay.
- Harmonised product cards, ecosystem tiles, process panels, audience cards and dialogs with understated corners, borders and shadow treatments.
- Updated typography and removed unused Plus Jakarta Sans and Material Symbols downloads.
- Adjusted anchor offsets to clear the fixed header and improved keyboard operation and focus visibility for the existing interactive tiles.
- Preserved the same React/Vite/Tailwind architecture, original copy, content data, routes/section IDs, inquiry mailto flow, product detail modal, and package manifests. No new dependencies or backend were added.

## Verification

- TypeScript/TSX syntax parsing and CSS syntax parsing passed in the editing environment.
- The complete `npm run check` suite could not run here because `npm ci` could not download missing packages from the npm registry (DNS `EAI_AGAIN`); `eslint` was consequently unavailable. The automated regression test added in `src/App.test.tsx` remains unexecuted here.
- The supplied environment has Node 22.16.0, whereas the locked `jsdom@30.0.1` requires Node 22.22.2+, 24.15.0+, or 26+. This dependency/engine mismatch was already in the original lockfile and was not changed as part of this visual task.
- A visual browser QA pass has not been performed; after installing packages, review at mobile, tablet and desktop widths before deployment.

## Run locally

Use a compatible Node version (22.22.2+ or 24.15.0+), then in the `afrinoverse/` folder:

```sh
npm ci
npm run check
npm run dev
```

Visit `http://localhost:3000` for the local preview. Verify the menu, hero links, clickable/keyboard-operated cards, product details, partnership inquiry, and legal dialogs.
