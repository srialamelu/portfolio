# Srialamelumangai Mathivanan — Portfolio

A single-page portfolio site built with plain HTML, CSS and JavaScript (no build step, no framework).

## Structure

Flat layout on purpose — GitHub's drag-and-drop web upload doesn't reliably preserve
subfolders (especially in Safari), so everything lives at the repo root:

```
index.html    Page content
styles.css    All styling
script.js     Scroll reveal, mobile nav, header state, contact form submit
profile.jpg   Profile photo
```

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

Your GitHub username is `srialamelu`, so the repo must be named exactly `srialamelu.github.io`
to get the clean root URL `https://srialamelu.github.io`.

### Option A — web upload (no terminal)

1. On GitHub, create a **public** repository named exactly `srialamelu.github.io`. Don't
   initialize it with a README.
2. On the empty repo page, click **"uploading an existing file"**.
3. Drag in `index.html`, `styles.css`, `script.js`, `profile.jpg`, and `README.md` — as
   individual files, not a folder, so nothing gets nested.
4. Commit directly to `main`.
5. Go to **Settings → Pages**, set Source to the `main` branch and `/ (root)` folder, **Save**.
6. Site goes live at `https://srialamelu.github.io` within a minute or two.

### Option B — git push

Git is already initialized locally with commit history. To push:

```bash
git remote set-url origin https://github.com/srialamelu/srialamelu.github.io.git
git push -u origin main
```

(If the repo doesn't exist yet on GitHub, create it first as in step 1 above.)

For any future edit: commit and `git push`, and Pages redeploys automatically.

## Editing content

All text lives directly in `index.html`, organized into clearly labeled `<section>` blocks
(About, Experience, Education, Training, Certifications, Publications, Skills, Contact).
Colors and spacing are controlled by CSS variables at the top of `styles.css`.
