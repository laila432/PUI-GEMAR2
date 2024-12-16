/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/pengunjung/**/*.{html,js}'],
  theme: {
    extend: {
      wordBreak: {
        normal: 'normal',
        break: 'break-word',
        all: 'break-all', // Tambahan: mengizinkan pemecahan kata di seluruh elemen
      },
      colors: {
        amber: {
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      maxHeight: {
        '84vh': '84vh', // menambahkan kelas max-h-[84vh]
      },
      scale: {
        '110': '1.10',
        '120': '1.2', // Zoom lebih besar pada hover
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'monserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      width: {
        
          '49': '12.25rem', // sesuaikan dengan ukuran yang Anda inginkan
          '50': '12.5rem',
          '51': '12.75rem',
          '52': '13rem',
          '53': '13.25rem',
          '54': '13.5rem',
          '55': '13.75rem',
          '56': '14rem',
          '57': '14.25rem',
          '58': '14.5rem',
          '59': '14.75rem',
          '60': '15rem',
          '5.8cm': '5.8cm', 
        
        '100': '25rem',  // w-100 akan setara dengan 25rem
        '150': '37.5rem',  // w-150 akan setara dengan 37.5rem
      },
      height: {
        '6cm': '6cm', // Tambahkan tinggi 6 cm
      },
      spacing: {
        '1rem': '1rem', // Jarak antar gambar
        '16': '4rem', // Ini adalah padding-bottom 16 (4rem)
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
        // Add more sizes as needed
      },

      screens: {
        'md': {'max': '768px'}, // Menambahkan media query untuk max-width 768px
      },

      gridTemplateColumns: {
        // Menambahkan konfigurasi untuk grid-cols-5 dan grid-cols-6
        'custom-4': 'repeat(4, minmax(0, 1fr))',
        'custom-5': 'repeat(5, minmax(0, 1fr))',
        'custom-6': 'repeat(6, minmax(0, 1fr))',
      },
      // Anda juga dapat menambahkan konfigurasi untuk gap di sini jika perlu
      spacing: {
        'custom-gap': '1.5rem',  // contoh untuk gap kustom
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
  variants: {
    extend: {
      scale: ['hover'],
    },
  },
  plugins: [
    
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
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
    },
    function({ addBase }) {
      addBase({
        '*': {
          boxSizing: 'border-box',
        },
      });
    },

    
  ],
}

