# Srialamelumangai Mathivanan — Portfolio

A portfolio site built with plain HTML, CSS and JavaScript (no build step, no framework),
plus a Products page for the Gumroad toolkits.

## Structure

Flat layout on purpose — GitHub's drag-and-drop web upload doesn't reliably preserve
subfolders (especially in Safari), so everything lives at the repo root:

```
index.html      Resume / portfolio page content
products.html   Products page (Startup Decision Workbook, Zero-Cost Business Startup Guide)
styles.css      All styling for both pages
script.js       Scroll reveal, mobile nav, header state, contact form submit
products.js     Product data + card rendering for products.html
profile.jpg     Profile photo
```

### Adding a new product later

Open `products.js` and add one object to the `PRODUCTS` array at the top (title, price,
description, Gumroad link, etc.) — the card is generated automatically, no HTML editing
required. To retire the "More tools launching soon" placeholder card once you add a third
real product, just add the fourth entry the same way; the placeholder always renders last.

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

The live site is `https://srialamelu.github.io/portfolio/`, which means it's served from a
repository named `portfolio` on GitHub (a project page, not the root `username.github.io` repo).

### Updating the existing live site (web upload, no terminal)

1. Go to your `portfolio` repository on GitHub.
2. Click **"Add file" → "Upload files"**.
3. Drag in the updated `index.html`, `styles.css`, `script.js`, `README.md`, plus the two new
   files `products.html` and `products.js` — as individual files, not a folder.
4. GitHub will warn that `index.html`, `styles.css`, `script.js` and `README.md` already exist —
   confirm the replace/overwrite for each.
5. Commit directly to `main`.
6. The site redeploys automatically within a minute or two at the same URL, and
   `https://srialamelu.github.io/portfolio/products.html` goes live as the new Products page.

### Option B — git push

If you have the repo cloned locally with git already set up:

```bash
git add index.html styles.css script.js products.html products.js README.md
git commit -m "Add Products page"
git push
```

For any future edit: commit and `git push`, and Pages redeploys automatically.

## Editing content

All resume text lives directly in `index.html`, organized into clearly labeled `<section>`
blocks (About, Experience, Education, Training, Certifications, Publications, Skills, Contact,
plus a new Products teaser section). Product copy and pricing live in `products.js` and
`products.html`. Colors and spacing are controlled by the CSS variables at the top of
`styles.css` — both pages share the same file, so a color change applies everywhere.
