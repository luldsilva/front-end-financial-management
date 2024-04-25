export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'light-blue': '#3D92CB',
          'blue': '#005BAA',
          'grey': '#D9D9D9',
          'dark-grey': '#333333',
          'medium-grey': '#666666',
          'black': '#111111',
        },
        fontSize: {
          sm: ['14px', '20px'],
          base: ['16px', '24px'],
          lg: ['20px', '28px'],
          xl: ['24px', '32px'],
        }
      },
    },
    plugins: [('@tailwindcss/forms')],
  }