/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/admin/**/*.{html,js}', // Targetkan semua file HTML dan JS di folder admin
  ],
  
  theme: {
    extend: {
      width: {
        'small-swal-popup': '400px', // Kustom ukuran popup
      },
      maxWidth: {
        'small-swal-popup': '90%', // Memastikan alert tetap responsif
      },
      borderWidth: {
        '4': '4px', // Kustomisasi border-4
      },
      borderRadius: {
        'full': '9999px', // Kustomisasi rounded-full
      },
      colors: {
        indigo: {
          700: '#4338ca',
          800: '#3730a3',
        },
        amber: {
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        green: {
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        red: {
          600: '#E53935', // Warna untuk red-600
          700: '#D32F2F', // Warna untuk red-700
          800: '#C62828', // Warna untuk red-800
          900: '#B71C1C', // Warna untuk red-900
        },
      },
        
      // Menambahkan custom spacing untuk margin dan padding

      spacing: {
        'comment-margin': '1rem',
        'reply-indent': '1rem',
      },
      borderColor: {
        'comment-border': 'rgb(229 231 235 / var(--tw-border-opacity))',
        'reply-border': 'rgb(209 213 219 / var(--tw-border-opacity))',
      },
      backgroundColor: {
        'comment-bg': 'rgb(249 250 251 / var(--tw-bg-opacity))',
        'reply-bg': 'rgb(249 250 251 / var(--tw-bg-opacity))',
        'reply-btn-bg': 'rgb(79 70 229 / var(--tw-bg-opacity))',
        'reply-btn-bg-hover': 'rgb(67 56 202 / var(--tw-bg-opacity))',
      },
      textColor: {
        'comment-author': 'rgb(67 56 202 / var(--tw-text-opacity))',
        'comment-text': 'rgb(31 41 55 / var(--tw-text-opacity))',
        'reply-btn': 'rgb(79 70 229 / var(--tw-text-opacity))',
        'reply-btn-hover': 'rgb(67 56 202 / var(--tw-text-opacity))',
      },
      borderRadius: {
        'comment': '0.5rem',
        'reply-form': '0.5rem',
      },
      borderWidth: {
        'comment': '1px',
        'reply-form': '1px',
      },
      gap: {
        '4': '1rem', // Menambahkan gap-4 secara manual jika tidak tersedia
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
      },
      listStylePosition: {
        inside: 'inside',
        outside: 'outside',
      },
      maxWidth: {
        '4xl': '64rem', // Menambahkan ukuran max-w-4xl yang baru
      },
      height: {
        '28': '7rem',    // 28 * 0.25rem = 7rem
        '30': '7.5rem',  // 30 * 0.25rem = 7.5rem
        '32': '8rem',    // 32 * 0.25rem = 8rem
        '36': '9rem',    // 36 * 0.25rem = 9rem
        '40': '10rem',   // 40 * 0.25rem = 10rem
        '44': '11rem',   // 44 * 0.25rem = 11rem
        '48': '12rem',   // 48 * 0.25rem = 12rem
        '49': '12.25rem', // menyesuaikan ukuran
        '50': '12.5rem',
        '51': '12.75rem',
        '52': '13rem',
        '52': '13rem',   // 52 * 0.25rem = 13rem
        '56': '14rem',   // 56 * 0.25rem = 14rem
        '60': '15rem',   // 60 * 0.25rem = 15rem
        '72': '18rem',   // 72 * 0.25rem = 18rem
        '84': '21rem',   // 84 * 0.25rem = 21rem
        '85': '21.25rem',  // Misalnya, sesuaikan dengan kebutuhan
        '86': '21.5rem',
        '87': '21.75rem',
        '88': '22rem',
        '89': '22.25rem',
        '90': '22.5rem', // contoh, kamu bisa sesuaikan dengan nilai yang diinginkan
        '91': '22.75rem',
        '92': '23rem',
        '93': '23.25rem',
        '94': '23.5rem',
        '95': '23.75rem',
        '96': '24rem',   // 96 * 0.25rem = 24rem
        '97': '24.25rem',  // Misalnya, sesuaikan dengan kebutuhan
        '98': '24.5rem',
        '99': '24.75rem',
      },
      zIndex: {
        '30': '30',
        // Tambahkan nilai z-index lainnya jika diperlukan
         
        '9999': '9999', // Menambahkan z-index 9999 ke konfigurasi
      
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'monserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },

      spacing: {
        '8': '2rem',   // p-8, padding 2rem (32px)
        '9': '2.25rem', // p-9, padding 2.25rem (36px)
        '10': '2.5rem',  // p-10, padding 2.5rem (40px)
        '11': '2.75rem', // p-11, padding 2.75rem (44px)
        '12': '3rem',    // p-12, padding 3rem (48px)
        '13': '3.25rem', // p-13, padding 3.25rem (52px)
        '14': '3.5rem',  // p-14, padding 3.5rem (56px)
        '15': '3.75rem', // p-15, padding 3.75rem (60px)
        '16': '4rem',    // p-16, padding 4rem (64px)
        '22': '5.5rem',
        '23': '5.75rem',
        '24': '6rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '28': '7rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '96': '24rem',  // default for h-96 and w-96
        '100': '25rem', // example for height and width
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '272': '68rem',
        '288': '72rem',
        '304': '76rem',
        '320': '80rem',
        'custom-gap': '1.5rem',  // contoh untuk gap kustom
        // Add more sizes as needed
      },
      
      screens: {
        'md': { 'max': '768px' }, // Menambahkan media query untuk max-width 768px
      
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      },

      gridTemplateColumns: {
        // Menambahkan konfigurasi untuk grid-cols-5 dan grid-cols-6
        
        'custom-4': 'repeat(4, minmax(0, 1fr))',
        'custom-5': 'repeat(5, minmax(0, 1fr))',
        'custom-6': 'repeat(6, minmax(0, 1fr))',
      },
      // Anda juga dapat menambahkan konfigurasi untuk gap di sini jika perlu

      
      maxHeight: {
        'full': '100vh', // Menambahkan max-height 100vh dengan kelas `max-h-full`
      },
      translate: {
        'full': '100%',
        '-full': '-100%',
        '64': '16rem',
      },
      margin: {
        '0': '0',
      },
      zIndex: {
        '30': '30',
      },
      inset: {
        '0': '0',
      },
      transform: ['responsive', 'hover', 'focus'],
      transitionProperty: {
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      translate: {
        '1/2': '50%',   // Translate sebesar 50%
        'full': '100%', // Translate sebesar 100%
        '-full': '-100%', // Translate sebesar -100% (seperti -translate-x-full)
      },
      margin: {
        'ml-main': '16rem', // menambahkan custom margin untuk main-content
      },
    },

    container: {
      center: true, // Pastikan container di tengah
      padding: {
        DEFAULT: '1rem', // Sesuaikan padding sesuai kebutuhan
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },

  },


  plugins: [
    require('tailwind-scrollbar'),
    function ({ addComponents, theme }) {
      addComponents({
        '.comment': {
          'margin-bottom': theme('spacing.comment-margin'),
          'border-radius': theme('borderRadius.comment'),
          'border-width': theme('borderWidth.comment'),
          'border-color': theme('borderColor.comment-border'),
          'background-color': theme('backgroundColor.comment-bg'),
          'padding': '1rem',
        },
        '.comment .author': {
          'font-weight': '600',
          'color': theme('textColor.comment-author'),
        },
        '.comment .text': {
          'margin-top': '0.5rem',
          'color': theme('textColor.comment-text'),
        },
        '.comment .reply-button': {
          'margin-top': '0.5rem',
          'cursor': 'pointer',
          'color': theme('textColor.reply-btn'),
        },
        '.comment .reply-button:hover': {
          'text-decoration-line': 'underline',
        },
        '.reply-form': {
          'margin-top': theme('spacing.comment-margin'),
          'border-radius': theme('borderRadius.reply-form'),
          'border-width': theme('borderWidth.reply-form'),
          'border-color': theme('borderColor.reply-border'),
          'background-color': theme('backgroundColor.reply-bg'),
          'padding': '1rem',
          'display': 'none', // Default hidden, can be overridden with JavaScript
        },
        '.reply-form textarea': {
          'width': '100%',
          'border-radius': theme('borderRadius.reply-form'),
          'border-width': theme('borderWidth.reply-form'),
          'border-color': theme('borderColor.reply-border'),
          'padding': '0.5rem',
        },
        '.reply-form button': {
          'margin-top': '0.5rem',
          'border-radius': theme('borderRadius.reply-form'),
          'background-color': theme('backgroundColor.reply-btn-bg'),
          'padding': '0.5rem 1rem',
          'color': 'rgb(255 255 255 / var(--tw-text-opacity))',
        },
        '.reply-form button:hover': {
          'background-color': theme('backgroundColor.reply-btn-bg-hover'),
        },
        '.reply': {
          'margin-left': theme('spacing.reply-indent'),
        },
        '.modal': {
          position: 'fixed',
          inset: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.75)', // Semi-transparent background
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '50',
        },
        '.modal-content': {
          backgroundColor: '#fff',
          borderRadius: '0.5rem',
          boxShadow: '0 0 1rem rgba(0, 0, 0, 0.1)',
          maxWidth: '90%',
          maxHeight: '90%',
          overflow: 'hidden',
        },
        '.modal-header': {
          padding: '1rem',
          borderBottom: '1px solid #ddd',
        },
        '.modal-body': {
          maxHeight: '60vh',
          overflowY: 'auto',
          padding: '1rem',
        },
        '.modal-footer': {
          padding: '1rem',
          borderTop: '1px solid #ddd',
          textAlign: 'right',
        },
      });

      addComponents({
        '@media (max-width: 1040px)': {
          '#sidebar': {
            transform: 'translateX(-100%)',
            width: theme('spacing.64'),
          },
          '#sidebar.active': {
            transform: 'translateX(0)',
          },
          '#main-content': {
            marginLeft: theme('margin.0'),
          },
          '#main-content.shifted': {
            transform: `translateX(${theme('spacing.64')})`,
          },
          '#content': {
            transform: 'translateX(0)',
          },
        },
      });
      addComponents({
        '.note-editor .note-editable ol': {
          listStyleType: 'decimal !important',
          listStylePosition: 'inside !important',
          marginLeft: '1.5rem !important',
        },
        '.note-editor .note-editable ul': {
          listStyleType: 'disc !important',
          listStylePosition: 'inside !important',
          marginLeft: '1.5rem !important',
        },
      });
    },
    function ({ addBase }) {
      addBase({
        '*': {
          boxSizing: 'border-box',
        },
      });
    },

    function ({ addUtilities }) {
      addUtilities({
        '.custom-ol': {
          'list-style-position': 'outside',
          'padding-left': '1.5rem',
        },
        '.custom-li': {
          'text-indent': '-1.0rem',
          'padding-left': '1.5rem',
          'margin-bottom': '1rem',
        },
      });
    },
  ],
   }


