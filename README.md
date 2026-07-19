# The House of Noir

Static bilingual site ready for GitHub Pages. No build step is required.

## Publish

1. Upload every file and folder in this directory to the repository root.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.

The canonical URL and social metadata currently assume:
`https://katerinanoir333.github.io/TheHouseOfNoir/`

If the repository name or domain changes, update that URL in `index.html`, `es/index.html`, legal pages, `robots.txt`, and `sitemap.xml`.

## Form configuration

The public Formspree endpoint is stored in `config.js`. In the Formspree dashboard:

- confirm the intended private recipient(s);
- enable spam protection and email verification if available;
- verify the endpoint is active before launch;
- review Formspree retention and privacy settings.

Never put recipient email addresses, API secrets, passwords, recovery phrases, identity documents, or payment details in this repository.

## Launch checks

- Submit one test request in each language.
- Confirm mobile menu, language switch, age gate, privacy links, and 404 page.
- Use the Facebook Sharing Debugger and LinkedIn Post Inspector after publishing to refresh the social preview cache.
- Have the privacy notice and terms reviewed for the owner’s actual jurisdiction and business practices.
