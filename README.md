# Modern Interactive Developer Portfolio

A premium, highly interactive personal portfolio website designed to showcase projects, publications, and skills. Built using React, Vite, Tailwind CSS, and powered by interactive 3D WebGL graphics.

---

## 🚀 Key Features

### 1. Interactive 3D Solar System Stack
* **Interactive WebGL Scene**: Powered by **React Three Fiber** and **Drei** (Three.js wrapper).
* **Dynamic Orbiting Planet Tracks**: Tech stack items (React, Next.js, Node.js, NestJS, Git, Docker, etc.) orbit a central sun as responsive, hoverable floating icons with dynamic glow rings and billboarded titles.
* **Auto-Fit Viewport**: Uses custom camera angle calculations to scale and center the 3D canvas vertically and horizontally on any viewport size, preventing outer ring edge clipping.
* **Camera Controls**: Includes `OrbitControls` supporting drag-to-rotate, auto-rotation, and scroll-to-zoom capabilities.

### 2. Device-Aware Smart Email Routing
* **Smart Device Detection**: Runs client-side platform sniffing to identify Android, iOS (iPhone/iPad), and touch-enabled tablet devices.
* **Custom Desktop Routing**: Opens a web-based Gmail composer in a new tab pre-populated with a custom email template.
* **Native Mobile/Tablet Routing**: Overrides the web URL with a standard `mailto:` link, prompting mobile and tablet operating systems to directly launch the native mail client (Gmail app, Apple Mail, etc.) with identical template fields.

### 3. Responsive Layout System
* **Fluid Grid Structure**: Grid-based layouts (`lg:grid-cols-[1.2fr_0.8fr]`) that seamlessly transition from side-by-side elements on desktop to single-column stacked elements on tablet and mobile viewports.
* **Optimal Container Dimensions**: Set to a maximum content width of `68rem` (1088px) on desktop to give projects, text, and 3D graphics adequate breathing room.
* **Tablet Overlay Adaptation**: floating overlays (social networks sidebar, vertical email bar) are hidden on screens under `1024px` and consolidated directly into the footer area to keep the main content clean and readable.

---

## 🛠️ Technology Stack

* **Core**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) (Client Environment)
* **3D Engine**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
* **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
* **Typography**: Outfit + Inter (via @fontsource packages)
* **Icons**: [React Icons](https://react-icons.github.io/react-icons/) + Devicon (SVG / Web Font integration)

---

## 📁 Project Structure

```text
Portfolio/
├── README.md               # Project documentation
└── frontend/               # React client source folder
    ├── index.html          # HTML entry point (loads Devicon styles)
    ├── package.json        # Dependencies and scripts
    ├── vite.config.js      # Vite dev/build configuration (allowedHosts: 'all')
    ├── tailwind.config.js  # Tailwind theme customizations
    ├── public/             # Static assets (images, flag icons, PDFs)
    └── src/
        ├── App.jsx         # Core app wrapper, overlay logic, routing
        ├── main.jsx        # App entry point
        ├── index.css       # Tailwind directives & base styles
        ├── components/     # Reusable layout and graphic items (SolarSystem, overlays)
        ├── sections/       # Main portfolio sections (Intro, About, Projects, Contact, Footer)
        ├── hooks/          # Custom hooks (scroll reveal observers)
        └── data/           # Config files for items (social links, projects)
```

---

## 🔧 Getting Started

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm** or **yarn**

### Installation
From the `frontend/` directory:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Expose to local network (for testing on phone/tablet over the same Wi-Fi):
   ```bash
   npm run dev -- --host
   ```

---

## 💻 Available Scripts

* `npm run dev` - Starts the local development server.
* `npm run build` - Builds production bundle assets to `dist/` using Vite.
* `npm run preview` - Previews the production build locally.
* `npm run lint` - Performs ESLint checks on source files.

---

## ✏️ Modifying Content

* **Hero Section & Bio**: Edit [src/sections/IntroSection.jsx](frontend/src/sections/IntroSection.jsx)
* **Bio / Skills / Timeline**: Edit [src/sections/AboutSection.jsx](frontend/src/sections/AboutSection.jsx)
* **Projects Listing**: Edit [src/sections/ProjectsSection.jsx](frontend/src/sections/ProjectsSection.jsx)
* **Contact Template Details**: Edit [src/App.jsx](frontend/src/App.jsx) (change constants `gmailTo`, `gmailSubject`, `gmailBody`)
