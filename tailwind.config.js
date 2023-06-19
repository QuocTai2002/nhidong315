/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '12': '3rem',
      },
      width: {
        '100': '347px',
      },
      colors: {
        'nhiDong-315': '#00adef',
        'phuSan-315': '#e05ea2',
        'tiemChung-315': '#71be54',
        'LaoKhoa-315': '#f5821f',
        'mat-315': '#1dbfd7',
        'daKhoa-315': '#3dbbc1',
        
      },
      left: {
        '3px123': '3px',
      }
    },
  },
  plugins: [],
}

