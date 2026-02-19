# Portfolio Website

AI startup–style portfolio with liquid glass UI, inspired by Sarvam AI. Built with React and Vite.

## Live Site

**https://namrathatiptur.github.io/**

## Tech Stack

- **React 19** + Vite 7
- **Liquid Glass UI** – frosted glass, backdrop blur, gradient orbs
- **Sarvam-inspired** – blue–orange spectrum, Syne + Plus Jakarta Sans fonts
- Font Awesome Icons

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

### Option 1: GitHub Actions (recommended)

1. In your repo: **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` or `feature/ai-startup-liquid-glass-revamp` – the workflow will build and deploy

### Option 2: Manual deploy

```bash
npm run deploy
```

## Project Structure

```
├── public/              # Static assets (images, favicon, resume)
│   └── assets/
├── src/
│   ├── components/      # React components (Navbar, Hero, About, etc.)
│   │   └── index.js     # Barrel export
│   ├── hooks/
│   │   └── useTheme.js  # Theme persistence (light/dark)
│   ├── styles/          # Modular CSS
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── background.css
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── blocks.css
│   │   ├── footer.css
│   │   └── responsive.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Imports all styles
├── index.html
├── vite.config.js
└── package.json
```

© 2026 Namratha Tiptur Manjunath. All rights reserved.
