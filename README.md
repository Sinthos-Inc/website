# Sinthos website

A small, dependency-free landing page for Sinthos. It is ready to publish with GitHub Pages.

## Preview locally

From this directory, run `python3 -m http.server 8000` and open `http://localhost:8000`.

## Publish

1. Create a public repository named `website` in the `Sinthos-Inc` organization.
2. Push this directory to its `main` branch.
3. In **Settings → Pages**, select **GitHub Actions** as the build and deployment source.
4. The workflow in `.github/workflows/pages.yml` deploys on every push to `main`. The default URL will be `https://sinthos-inc.github.io/website/`.

The site uses relative asset paths so it works at the GitHub Pages project URL and at a future custom domain. Add a custom domain in the repository's Pages settings when it is ready, then add its DNS record. No domain is configured yet.

## Edit the landing page

- Content and metadata: `index.html`
- Styling and responsive layout: `styles.css`
- Social preview and icon: `assets/`

There is no build step or package manager. The only JavaScript updates the copyright year.
