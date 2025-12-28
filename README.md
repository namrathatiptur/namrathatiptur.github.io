# Portfolio Website

A minimalistic, Apple-style portfolio website showcasing my professional experience, projects, and skills.

## Features

- Clean, minimalistic design inspired by Apple's aesthetic
- Fully responsive layout
- Smooth scrolling and animations
- Optimized for GitHub Pages

## Deployment to GitHub Pages

### Option 1: Using GitHub Web Interface

1. Create a new repository on GitHub (e.g., `portfolio` or `namratha-portfolio`)
2. Upload all files from this directory to the repository
3. Go to repository Settings → Pages
4. Under "Source", select the branch (usually `main` or `master`)
5. Select the `/ (root)` folder
6. Click Save
7. Your site will be available at `https://[your-username].github.io/[repository-name]`

### Option 2: Using Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/[your-username]/[repository-name].git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow steps 3-7 from Option 1 to enable GitHub Pages.

## Customization

### Update Links

Edit `index.html` to update:
- LinkedIn URL (search for `https://linkedin.com`)
- GitHub URL (search for `https://github.com`)
- Email address (already set to `namrathatm.ms@gmail.com`)

### Customize Colors

Edit `styles.css` and modify the CSS variables in `:root`:
- `--primary-color`: Main text color
- `--secondary-color`: Secondary text color
- `--background`: Background color
- `--surface`: Card/surface background color

## Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Namratha Tiptur Manjunath. All rights reserved.

