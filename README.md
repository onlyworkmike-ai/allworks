# Michael, portfolio site

A static, no-build portfolio. Plain HTML, CSS and a small script. Black and white, with glass effects on the hero title, the top menu and the buttons.

Sections: About Me, Projects, Skills, Contact.

## Edit the content

Everything is in `index.html`. Spots marked `EDIT LATER` in comments are drafts:

- **About Me:** the bio is adapted from the Google Slides portfolio. Five of the nine roles are shown in Experience.
- **Projects:** six cards from the deck. Each preview is a black and white pattern drawn in CSS. To use a real image, replace a `<div class="art art-...">` with `<img class="art" src="images/your-file.jpg" alt="Describe the image">`.
- **Skills:** the deck does not list skills or tools, so these are drawn from the experience section. Add your software and tools.
- **Contact:** email and phone come from the deck. The "Watch video portfolio" button links to `#`; replace it with your Google Drive video link.

## Change the look

Colors, type scale and spacing are tokens at the top of `styles.css`. The glass effect is the `.glass` class. The typeface is Archivo, loaded from Google Fonts.

The white discs behind the glass drift slightly with the pointer. This is off on touch devices and for people who prefer reduced motion.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Publish on GitHub Pages

1. Push these files to the root of a repository.
2. In the repository, open Settings, then Pages.
3. Under Build and deployment, choose "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. The site goes live at `https://<your-username>.github.io/<repository-name>/` within a minute or two.
