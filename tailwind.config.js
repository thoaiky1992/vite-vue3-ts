module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'drawer-item': 'font-size, margin, padding, opacity, hover'
      },
      fontSize: {
        0: '0px'
      },
      animation: {
        dialog: 'dialog 400ms ease-in-out forwards',
        leave_dialog: 'leave_dialog 300ms ease-in-out forwards',
        dialog_opacity: 'dialog_opacity 300ms ease-in-out forwards',
        dialog_leave_opacity: 'dialog_leave_opacity 300ms ease-in-out forwards'
      },
      keyframes: {
        dialog: {
          '0%': { transform: 'rotate(0deg) scale(0)' },
          '100%': { transform: 'rotate(360deg) scale(1)' }
        },
        leave_dialog: {
          '0%': { transform: 'rotate(deg) scale(1)' },
          '100%': { transform: 'rotate(360deg) scale(0)' }
        },
        dialog_opacity: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        dialog_leave_opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
};
