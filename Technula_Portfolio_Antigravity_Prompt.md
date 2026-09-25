# Technula Portfolio — Antigravity Build Prompt

Copy everything from “Your task” onward into Antigravity, or attach this file and ask it to follow the brief.

## Before starting

1. Open a new project folder named `technula-portfolio` in Antigravity.
2. Add your original Technula logo as `assets/technula-logo.png` or `assets/technula-logo.svg`.
3. Add available software screenshots, workshop photos, kit photos, and approved project information under `assets/`.
4. Use Planning Mode for this complete build. Review any plan the application asks you to review, then let it implement and check the site.
5. The result should be a working static website with local preview and publishing instructions.

The blue and red below were sampled from the existing Technula logo file `logo(20260922-120040).png`. They are reference colors, not a formal brand specification. The supplied original logo remains the source of truth.

Google’s explanation of Planning Mode:
https://antigravity.google/docs/artifact-review

---

## Your task

Build a complete, simple, responsive, single-page portfolio website for **Technula**, starting in this project folder and finishing with a working, checked website.

The first screen must make it immediately clear that Technula builds software, provides education, and supplies hardware.

The website must be light, clear, practical, and easy for business owners, school principals, parents, and students to understand. Use short sentences and familiar words. Make the result feel like a real company portfolio.

Implement the website, not just a plan, mockup, or code snippets.

## 1. Scope and technology

Use:
- Semantic HTML.
- Plain CSS.
- Small amounts of vanilla JavaScript for the mobile menu and portfolio filters.
- Local image assets.

Keep the code easy for a beginner to edit. Use these files:
- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `README.md`

Put page content directly in HTML so the main information remains visible without JavaScript. Use ordinary relative asset paths. The page should work when opening `index.html` directly and through a local static server.

No framework, build system, UI library, backend, database, login, CMS, payment system, or API is needed.

## 2. Branding and visual style

Use the supplied original Technula logo. Preserve its lettering, icon, arrows, colors, and proportions. Do not reconstruct it as typed text or draw a replacement logo. If the file contains substantial blank margins, handle its presentation carefully so the actual logo remains legible. Do not crop the artwork itself.

Reference palette:

| Token | Color | Use |
| --- | --- | --- |
| Brand blue | `#0268B2` | Primary buttons, links, small accents |
| Brand red | `#E50215` | Small highlights and secondary accents |
| White | `#FFFFFF` | Main page and card backgrounds |
| Light gray | `#F7F9FB` | Alternate section backgrounds |
| Dark text | `#1F2937` | Headings and body text |
| Muted text | `#596579` | Supporting text |
| Border | `#E2E8F0` | Subtle dividers and card borders |

Declare the colors as CSS custom properties so they can be changed in one place.

Design rules:
- Keep almost all of the page white or very light gray.
- Use blue and red sparingly and consistently across all divisions.
- Keep the header and footer light.
- Use a system sans-serif font stack; do not add a font download dependency.
- Use readable text, approximately 16–18 px for body copy.
- Use a maximum content width of about 1120 px.
- Use consistent alignment, generous but reasonable spacing, and simple rectangular cards with a small corner radius.
- Prefer thin borders to large shadows.
- Use one main call to action and one quieter secondary action in the hero.
- Make the first screen compact enough that the three business divisions are visible or begin to appear on a normal laptop screen.

Do not add gradients, neon colors, glass effects, animated backgrounds, particles, floating shapes, abstract 3D objects, robot illustrations, oversized headings, carousels, scrolling tickers, loading intros, or decorative charts.

No chatbot, AI assistant, AI search, or “powered by AI” badges. AI and STEM should appear as genuine Academy course categories.

## 3. Business structure

Preserve this exact relationship:

| Division | Public title | Categories |
| --- | --- | --- |
| Build | Software | Projects; Solutions |
| Learn | Academy | AI & STEM; VFX |
| Supply | Hardware | Kits; Components |

All three divisions contribute to a shared **Our Work** section. This represents the “Proof” part of the business structure and includes gallery images, deployments, students, schools, projects, and case studies when real material is available.

Use “Software,” “Academy,” “Hardware,” and “Our Work” as the prominent public labels. “Build,” “Learn,” and “Supply” can appear as small labels above the division titles. Do not display the organizational diagram on the website.

## 4. Page layout and copy

### A. Header

Use a simple header with:
- Technula logo linked to the top of the page.
- Navigation: Software, Academy, Hardware, Our Work, Contact.
- A thin bottom border.

Each navigation item must go to a real section or service card on the same page.

On mobile, use an accessible menu button with a short dropdown menu. Keep the logo legible. If the header is sticky, make sure it does not cover the headings reached by anchor links.

### B. Hero

Headline:
**Software. Learning. Hardware.**

Supporting text:
**We build software, teach AI, robotics and VFX, and supply kits and components.**

Primary button:
**View Our Work** — links to the portfolio section.

Secondary button:
**Contact Us** — links to contact details.

Keep the hero text-led and uncluttered. No decorative illustration is required. Do not add an oversized hero photograph or full-screen empty space.

### C. Three division cards

Show three equally sized service cards in one row on desktop, with a simple stacked layout on mobile. These cards are the complete service overview; do not repeat them in three long sections below.

Give the cards the anchors `software`, `academy`, and `hardware`.

**Card 1**

Small label: BUILD  
Title: Software  
Introduction: Software for businesses and organizations.

- **Projects:** Websites, mobile apps, and custom business tools.
- **Solutions:** Software systems for day-to-day business operations.

**Card 2**

Small label: LEARN  
Title: Academy  
Introduction: Practical learning through classes and hands-on projects.

- **AI & STEM:** AI, coding, robotics, and STEM learning.
- **VFX:** Animation and visual effects training.

**Card 3**

Small label: SUPPLY  
Title: Hardware  
Introduction: Kits and components for building and learning.

- **Kits:** STEM and robotics kits for hands-on activities.
- **Components:** Electronics and robotics parts for projects.

Keep these cards mostly text. Clear category names matter more than icons. Do not add extra business divisions, lengthy lists, prices, or claims that have not been supplied.

### D. Our Work

Heading:
**Our Work**

Supporting text:
**Explore our software projects, learning activities, and hardware in use.**

This is one shared portfolio, covering all three divisions.

Use simple filter buttons:
**All | Software | Academy | Hardware**

Each portfolio item should contain:
- A real image or screenshot, if supplied.
- A short, factual title.
- A clear category, such as Software Deployment, School Workshop, Student Project, Robotics Kit, or Case Study.
- One short description of what the work shows.
- A project link only when a genuine working URL has been provided.

Use a regular grid: up to three columns on desktop, two on tablet when space allows, and one on mobile.

Portfolio content can include:
- Software screenshots and actual deployments.
- School workshops and student learning activities.
- Kits, components, and completed hardware projects.
- Short case studies using supplied problem, work, and outcome information.

Do not invent clients, school names, testimonials, student numbers, deployment claims, outcomes, awards, or case-study results. Do not generate mock screenshots or use stock images as proof of completed work.

If real portfolio material is missing, implement the finished gallery structure and use one honest message: “Project photos and case studies will be added here.” Put the asset requirements and editing guidance in README, not on the public page.

Do not show placeholder cards, broken images, “image goes here” labels, dummy statistics, or inactive project buttons. Hide or omit filters for categories with no entries. If there are no entries, omit the filter bar.

Filters must genuinely filter the cards. Show all real items when JavaScript is unavailable.

### E. Contact

Heading:
**Let’s Talk**

Supporting text:
**Contact us about software, learning programs, kits, or components.**

Use these supplied contact details:
- Phone: **+91 99909 11093**
- Website: **technula.com**

Actions:
- **Call Us** → `tel:+919990911093`
- **WhatsApp Us** → `https://wa.me/919990911093`
- Website link → `https://technula.com`

Use simple contact buttons and readable contact text. Do not add a form that cannot actually send messages. Do not invent an email address or street address.

### F. Footer

Keep it short:
- Technula logo or company name.
- “Software • Academy • Hardware”
- Copyright using the actual current year.
- A link back to the top.

## 5. Images and content editing

Inspect supplied local assets before choosing them. Keep names and captions factual. Use supplied brand material; do not download unrelated images or fabricate a customer portfolio.

Use consistent image frames. Preserve full software screens and kit details where cropping would lose meaning. Workshop photographs can use a consistent crop if the subject remains clear.

Set image dimensions to reduce layout shifts. Lazy-load images below the first screen and provide useful alt text. Avoid loading large video files automatically.

Add simple HTML comments marking the division cards, portfolio entries, and contact details. Explain in README how to:
- Replace the logo.
- Change the brand colors.
- Add a portfolio image and card.
- Set a card’s filter category.
- Update the phone and WhatsApp links.

Do not expose file paths, technical instructions, internal labels, or editing notes in the public site.

## 6. Behavior, accessibility, and responsiveness

Make the site work on phones, tablets, and laptops:
- No horizontal overflow at 320 px or wider.
- Logical heading order with one main H1.
- Semantic header, navigation, main, sections, and footer.
- Visible keyboard focus.
- Legible text and sufficient color contrast.
- Comfortable touch targets around 44 px.
- Accessible menu state using `aria-expanded`.
- Menu closes after selecting a link and supports Escape.
- Filter buttons use `aria-pressed` and remain usable by keyboard.
- No essential information available only on hover.
- Respect reduced-motion preferences if smooth scrolling or transitions are used.

All links and buttons must have a real purpose and work. Do not add clickable-looking elements without an action.

Add a factual page title and meta description:
- Title: **Technula | Software, Academy & Hardware**
- Description: **Explore Technula’s software projects, AI and STEM learning, VFX training, robotics kits, and hardware components.**

## 7. Build, verify, and hand over

Work through the complete task:
1. Inspect the project folder, logo, and supplied assets.
2. Prepare a short implementation plan following this brief.
3. Create the complete HTML, CSS, JavaScript, and README.
4. Open a local preview using the tools available.
5. Check representative mobile, tablet, and desktop widths, including 320, 390, 768, and 1440 px.
6. Check navigation, menu behavior, filters when populated, image loading, contact-link destinations, and keyboard access.
7. Fix visible layout problems, broken links, and console errors caused by the site.
8. Give a short completion summary and the exact local preview instructions.

Use practical browser checks; do not add a large testing framework for this small static page. If a check cannot be run, say so accurately.

Include simple publishing instructions in README:
- This is a static site with no build command.
- Upload `index.html`, `styles.css`, `script.js`, and `assets/` to the intended static hosting location, preserving relative paths.
- Explain any host-specific steps only when that host is known.
- Use relative URLs so the portfolio can live at a domain root or within a subdirectory.
- Verify the deployed page and asset URLs after publishing.
- Do not invent a deployment URL or overwrite an existing production site during the local build.

## Definition of done

The delivered page must:
- Show Software, Academy, and Hardware clearly.
- Include all six business categories.
- Use Technula’s original logo and its blue/red colors on a light background.
- Present real available work in one shared portfolio.
- Provide working contact actions.
- Be easy to understand and use on mobile.
- Be easy to update using the small set of static files.
- Be fully implemented and ready to preview and upload.

When choosing between extra decoration and clearer information, choose clearer information.

