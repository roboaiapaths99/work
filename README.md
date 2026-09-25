# Technula Portfolio Website

A fast, lightweight, and accessible single-page portfolio website for **Technula**, showcasing its three core divisions: **Software (Build)**, **Academy (Learn)**, and **Hardware (Supply)**.

---

## 1. Quick Start & Local Preview

This project is built with vanilla HTML, CSS, and JavaScript. There are no build tools, dependencies, or compilers required.

### Method A: Direct File Open
Double-click `index.html` in your file explorer to open it in any web browser.

### Method B: Local Static Server (Recommended)
You can run a lightweight static HTTP server from this directory:

**Using Python:**
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

**Using Node.js / npx:**
```bash
npx serve .
```
Then open the displayed local URL (e.g. `http://localhost:3000`).

---

## 2. Project File Structure

```text
technulaPortfolio/
├── index.html       # Main semantic HTML structure and content
├── styles.css       # Clean design system, responsive styles & CSS variables
├── script.js        # Mobile drawer navigation & portfolio filter logic
├── assets/          # Logo and authentic project images
│   ├── technula-lockup-transparent.png
│   ├── work-logday.png
│   ├── work-fitos.png
│   ├── work-agpk.png
│   ├── work-classroom-workshop.jpg
│   ├── work-3d-character-car.jpg
│   ├── work-vfx-sculpt.jpg
│   ├── work-plug-play-kit.jpg
│   ├── work-smart-rover.jpg
│   └── work-robo-pet.png
└── README.md        # Documentation and maintenance guide
```

---

## 3. How to Customize & Edit

### How to Replace the Logo
1. Place your new logo image in the `assets/` directory (e.g., `assets/technula-logo.png`).
2. Open `index.html` and locate the header (`.site-header`) and footer (`.site-footer`).
3. Update the `src` attribute:
   ```html
   <img src="assets/technula-logo.png" alt="Technula" class="brand-logo" width="160" height="40">
   ```

### How to Change Brand Colors
Open `styles.css` and modify the CSS custom properties at the top of the file:
```css
:root {
  --color-blue: #0268B2;       /* Primary brand color */
  --color-blue-hover: #025694; /* Button and link hover state */
  --color-red: #E50215;        /* Secondary accent color */
  --color-text: #1F2937;       /* Primary text color */
  --color-text-muted: #596579; /* Subtitle and secondary text */
}
```

### How to Add a Portfolio Item and Set its Category
1. Save your project image inside the `assets/` folder (e.g. `assets/my-new-project.jpg`).
2. Open `index.html` and find the `#portfolioGrid` container.
3. Paste a new `<article>` block using one of the category values (`software`, `academy`, or `hardware`):
   ```html
   <article class="portfolio-card" data-category="software">
     <div class="card-media">
       <img src="assets/my-new-project.jpg" alt="Description of project" loading="lazy" width="600" height="375">
     </div>
     <div class="card-body">
       <span class="card-category">Software Deployment</span>
       <h3 class="card-title">Project Name</h3>
       <p class="card-description">Brief factual description of the solution delivered.</p>
     </div>
   </article>
   ```
4. The filter buttons will automatically include your new card.

### How to Update Phone and WhatsApp Links
Open `index.html` and navigate to the Contact section (`#contact`):
- **Phone Call**: Change the phone number in `href="tel:+919990911093"` and the visible button text.
- **WhatsApp**: Change the phone number in `href="https://wa.me/919990911093"` (use country code without `+` or spaces).
- **Website**: Update `href="https://technula.com"`.

---

## 4. Publishing & Deployment Instructions

This website is completely static. To deploy:

1. Upload the following files and folders to your web server or hosting provider:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/` folder (with all images inside)
2. Ensure the relative folder structure is preserved so `assets/...` links resolve properly.
3. Suitable hosting options:
   - **GitHub Pages**: Push the repository to GitHub and enable Pages in repository settings.
   - **Netlify / Vercel**: Drag and drop the folder into the dashboard or connect the Git repository (no build command needed, publish directory `.`).
   - **Shared Hosting / cPanel / Apache / Nginx**: Upload files directly into `public_html` or the website root.
4. After publishing, test the deployed URL on both mobile and desktop to verify that images and anchor links resolve correctly.
