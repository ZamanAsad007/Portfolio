# Portfolio Frontend

Personal portfolio website built with React + Vite and styled with Tailwind CSS.

## Tech

- React (Vite)
- Tailwind CSS
- Icons: Devicon (for tech stack icons) + `react-icons`
- ESLint

## Getting Started

From this `frontend/` folder:

```bash
npm install
npm run dev
```

The dev server will print the local URL in the terminal.

## Scripts

```bash
npm run dev      # start local dev server
npm run build    # production build
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Project Structure

```text
frontend/
	index.html
	public/
	src/
		components/
		sections/
		data/
		hooks/
```

## Where To Edit Content

- About + Skills + Education: [src/sections/AboutSection.jsx](src/sections/AboutSection.jsx)
- Intro (hero): [src/sections/IntroSection.jsx](src/sections/IntroSection.jsx)
- Projects: [src/sections/ProjectsSection.jsx](src/sections/ProjectsSection.jsx)
- Publications: [src/sections/PublicationsSection.jsx](src/sections/PublicationsSection.jsx)
- Contact: [src/sections/ContactSection.jsx](src/sections/ContactSection.jsx)
- Navbar: [src/components/Navbar.jsx](src/components/Navbar.jsx)

## Icons (Devicon)

Devicon’s stylesheet is loaded in [index.html](index.html). Some icons use the Devicon font classes, and some use Devicon SVGs via CDN (for better color/consistency).

If an icon ever doesn’t show up, it’s usually due to an invalid Devicon class name — in that case, use the SVG form.

## Requirements

- Node.js + npm (Node 18+ recommended)

