/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta Post-Apocalíptica mejorada
        wasteland: {
          ash: '#2E2E2E',
          concrete: '#404040',
          rust: '#8B4513',
          metal: '#525252',
          sand: '#D4C9B0',
          olive: '#6B6B52',
          blood: '#6B2C2C',
        },
        decay: {
          dark: '#1C1C1C',
          darker: '#111111',
          medium: '#2A2A2A',
          light: '#3A3A3A',
        },
        accent: {
          ember: '#FF3B0D',
          amber: '#FF5C2E',
          glow: '#FF7D4F',
        },
      },
      fontFamily: {
        mono: ['"Courier New"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'dust': 'dust 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
      },
      keyframes: {
        dust: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(255, 59, 13, 0.3), 0 0 10px rgba(255, 59, 13, 0.1)',
          },
          '50%': { 
            boxShadow: '0 0 10px rgba(255, 59, 13, 0.5), 0 0 20px rgba(255, 59, 13, 0.2)',
          },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '41%, 43%': { opacity: '0.8' },
          '45%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-decay': 'linear-gradient(180deg, #0F0F0F 0%, #1A1A1A 100%)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}

