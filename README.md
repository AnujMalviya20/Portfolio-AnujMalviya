# Anuj Malviya - Portfolio Website

A professional, one-page portfolio website showcasing data science and AI projects, hackathon work, and technical skills.

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Features

- 🎨 Dark professional theme
- 📱 Fully responsive design
- ⚡ Fast load times
- 🎯 SEO-friendly structure
- ✨ Smooth animations
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Your site will be live!

Alternatively, use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Customization

### Update Contact Information

Edit `src/components/Contact.jsx` to update:
- Email address
- LinkedIn profile URL
- GitHub profile URL
- Resume download link

### Add/Edit Projects

Edit `src/components/Projects.jsx` to modify the projects array with your own projects.

### Update Skills

Edit `src/components/Skills.jsx` to modify skill categories and individual skills.

### Update Resume

Place your resume PDF in the `public` folder and update the resume links in:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`

## Project Structure

```
anujportfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Hackathons.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx      # Main app component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

## License

MIT License - feel free to use this template for your own portfolio!

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)

