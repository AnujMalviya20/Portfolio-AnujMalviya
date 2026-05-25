/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // App surfaces
        'app-bg': '#0B0B0F', // primary black background
        'app-surface': '#12081F', // section background
        'app-card': '#160B2E', // card background
        'app-border': '#2A1F3D', // borders / dividers

        // Typography
        'text-primary': '#F5F5F7', // soft white
        'text-secondary': '#B8B3C7', // muted lavender-gray

        // Accents
        'accent-primary': '#7C3AED', // rich purple
        'accent-hover': '#A855F7', // neon violet (used subtly for hover)
      },
      boxShadow: {
        'accent-soft': '0 0 22px rgba(124, 58, 237, 0.45)', // soft purple glow
        'card-soft': '0 18px 60px rgba(0, 0, 0, 0.75)', // deep, subtle card shadow
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
