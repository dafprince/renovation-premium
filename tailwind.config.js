/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* gray-300 */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* pink-600 */
        background: 'var(--color-background)', /* white */
        foreground: 'var(--color-foreground)', /* gray-800 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* pink-600 */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* pink-200 */
          foreground: 'var(--color-secondary-foreground)', /* gray-800 */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-500 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* gray-50 */
          foreground: 'var(--color-muted-foreground)', /* gray-500 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* pink-800 */
          foreground: 'var(--color-accent-foreground)', /* white */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)', /* gray-800 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)', /* gray-800 */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* green-500 */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* orange-500 */
          foreground: 'var(--color-warning-foreground)', /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-500 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        surface: 'var(--color-surface)', /* gray-50 */
        'text-primary': 'var(--color-text-primary)', /* gray-800 */
        'text-secondary': 'var(--color-text-secondary)', /* gray-500 */
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'headline': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'cta': ['Poppins', 'sans-serif'],
        'accent': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], /* 48px */
        'headline-lg': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], /* 40px */
        'headline-md': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], /* 32px */
        'headline-sm': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], /* 24px */
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], /* 18px */
        'body': ['1rem', { lineHeight: '1.6' }], /* 16px */
        'body-sm': ['0.875rem', { lineHeight: '1.6' }], /* 14px */
      },
      spacing: {
        '18': '4.5rem', /* 72px */
        '88': '22rem', /* 352px */
        '128': '32rem', /* 512px */
      },
      borderRadius: {
        'lg': '0.5rem', /* 8px */
        'xl': '0.75rem', /* 12px */
        '2xl': '1rem', /* 16px */
      },
      boxShadow: {
        'rose': '0 4px 20px var(--color-shadow-primary)',
        'rose-hover': '0 20px 40px var(--color-shadow-secondary)',
        'subtle': '0 4px 6px var(--color-shadow-subtle)',
        'premium': '0 4px 12px rgba(0,0,0,0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      backdropBlur: {
        'premium': '20px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}