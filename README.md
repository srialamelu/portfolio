# Srialamelumangai Mathivanan — Portfolio

A single-page portfolio site built with plain HTML, CSS and JavaScript (no build step, no framework).

## Structure

```
index.html              Page content
assets/css/styles.css   All styling
assets/js/script.js     Scroll reveal, mobile nav, header state
assets/img/profile.jpg  Profile photo
```

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

Git is already initialized locally with an initial commit. To get the site live at
`https://srialamelumangai.github.io`:

1. On GitHub, create a new **public** repository named exactly `srialamelumangai.github.io`
   (this special name is what makes GitHub serve it at the root domain instead of
   `srialamelumangai.github.io/<repo-name>`). Do not initialize it with a README.

2. Push this local repo to it:

   ```bash
   git branch -M main
   git remote add origin https://github.com/srialamelumangai/srialamelumangai.github.io.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**.
4. Under **Source**, select the `main` branch and `/ (root)` folder, then **Save**.
5. The site goes live at `https://srialamelumangai.github.io` within a minute or two.

For any future edit: commit and `git push`, and Pages redeploys automatically.

## Editing content

All text lives directly in `index.html`, organized into clearly labeled `<section>` blocks (About, Experience, Education, Training, Certifications, Publications, Skills, Contact). Colors and spacing are controlled by CSS variables at the top of `assets/css/styles.css`.
