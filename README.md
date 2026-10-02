# Level Up Roofer Marketing

High-converting, production-ready website for **Level Up Roofer Marketing** built with React 19, Vite, Tailwind CSS v4, and Lucide Icons.

---

## 🚀 Netlify Deployment Guide

This project is pre-configured for **1-click Netlify deployment** directly from GitHub.

### Step 1: Push to GitHub
If you haven't already pushed this project to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit: Level Up Roofer Marketing production build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

### Step 2: Deploy on Netlify
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select **GitHub** and authorize your repository.
4. Netlify will auto-detect the configuration from `netlify.toml`:
   - **Base directory:** *(leave blank)*
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**.

Your website will be live in less than 1 minute!

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Key Files Configured for Netlify

- `netlify.toml`: Pre-configured build command (`npm run build`), publish directory (`dist`), SPA redirects, and security headers.
- `public/_redirects`: Guarantees single-page application (SPA) client-side routing fallback.
- `.gitignore`: Prevents uploading `node_modules`, `.env`, and build artifacts to GitHub.
