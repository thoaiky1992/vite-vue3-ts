module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        dialog: 'dialog 400ms ease-in-out forwards',
        leave_dialog: 'leave_dialog 400ms ease-in-out forwards'
      },
      keyframes: {
        dialog: {
          '0%': {
            transform: 'rotate(0deg) scale(0)'
          },
          '100%': {
            transform: 'rotate(360deg) scale(1)'
          }
        },
        leave_dialog: {
          '0%': {
            transform: 'rotate(deg) scale(1)'
          },
          '100%': {
            transform: 'rotate(360deg) scale(0)'
          }
        }
      }
    }
  },
  plugins: []
};
