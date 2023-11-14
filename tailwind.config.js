/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    screens: {
      'tiny': '360px',
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1366px',
      '2xl': '1440px',
      // '3xl': '1920px'
    },
    fontSize: {
      'xs': ['11px', '11px'],
      'xs-1': ['13px', '26px'],
      'xs-2': ['15px', '26px'],
      'xs-3': ['13px', '19px'],
      'sm': ['20px', '35px'],
      'sm-1': ['20px', '28px'],
      'sm-2': ['19px', '19px'],
      'base': ['17px', '22px'],
      'base-1': ['19px', '28px'],
      'base-2': ['16px', '28px'],
      'md': ['22px', '40px'],
      'md-1': ['20px', '40px'],
      'md-2': ['20px', '35px'],
      'md-3': ['18px', '30px'],
      'md-4': ['20px', '30px'],
      'md-5': ['27px', '31px'],
      'md-6': ['26px', '85px'],
      'md-7': ['37px', '45px'],
      'md-8': ['24px', '32px'],
      'md-9': ['22px', '30px'],
      'md-10': ['32px', '63px'],
      'lg': ['44px', '50px'],
      'lg-1': ['24px', '27px'],
      'lg-2': ['30px', '45px'],
      'lg-3': ['29px', '49px'],
      'lg-4': ['52px', '47px'],
      'lg-5': ['60px', '70px'],
      'lg-6': ['68px', '46px'],
      'lg-7': ['40px', '52px'],
      'lg-8': ['56px', '85px'],
      'xl': ['70px', '120px'],
      'xl-1': ['100px', '100px'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'main': '#090909',
      'body': '#171717',
      'light': '#252526',
      'grey': '#1A1A1A'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'main': '#41a58d',
      'create': '#515151',
      'body': '#1B1B1B',
    }),

    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '30px',
      'full': '9999px',
    },

    maxHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      '4/5': '80vh',
      'full': '100vh',
    },
    extend: {
      backgroundImage: {
        'custom-image': "url('/public/imgs/bg.png')",
      },
      minHeight: {
        '0': '0',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/5': '60vh',
        '3/4': '75vh',
        '4/5': '80vh',
        'full': '100vh',
      },
      spacing: {
        '136': '34rem',
        '200': '50rem'
      },
      colors: {
        app: {
          yellow: {
            light: '#f8dc8e',
            dark: '#916500'
          },
          cyan: {
            DEFAULT: '#0d91a9'
          },
          blue: {
            DEFAULT: '#89E1FF',
            500: '#0095C8',
          },
          green: {
            DEFAULT: '#2EBD85',
          },
          dark: {
            400: '#8F8F8F',
          },
          main: {
            100: '#41a58d',
          },
          red: {
            DEFAULT: '#CE1415'
          }
        }
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.2rem',
      },
      maxWidth: {
        1920: '1920px'
      },
      borderWidth: {
        1: '1px',
      },
      padding: {
        '1px': '1px',
        '2px': '2px',
      },
      fontFamily: {
        sans: ['Inter var', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
    },
  },
  variants: {
    extend: {
      background: ['card', 'link', 'body', 'progress', 'search'],
      color: ['white', 'edit']
    },
  },
  plugins: [],
}

