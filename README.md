# uxd-study

Static UX prototype for a Pexels-powered video feed.

## GitHub Pages deployment

1. Install dependencies:
   ```bash
   npm install
   ```
2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

This uses `gh-pages` to publish the repository root to the `gh-pages` branch.

## Notes

- Keep `index.html`, `style.css`, and `app.js` at the repo root.
- If you want to change the published branch or directory, update the `deploy` script in `package.json`.
