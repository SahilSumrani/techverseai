# Superside React JS Project Migration

A full React JS + Vite implementation matching the structure, visual design, and interactive behaviors of [Superside](https://www.superside.com/).

## 📁 Folder Structure

```
src/
├── assets/         # Visual branding assets and icons
├── components/     # Reusable UI elements (Header, Footer, Modals, Cards, Buttons)
├── hooks/          # Custom React hooks (useScrollLock, useInView)
├── sections/       # Primary landing page sections (Hero, Capabilities, Showcase, Security, ROI)
├── styles/         # Global tokens and CSS styles
└── utils/          # Helper utilities (cn class merger, input sanitizers)
```

## 🚀 Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 🔒 Security & Compliance

- **Zero Analytics Hardcoding**: Optional third-party trackers (GTM, Intellimize, Datadog) are excluded to prevent sending data to external dashboards.
- **Form Input Sanitization**: Built-in validation and XSS prevention on demo request drawers.
