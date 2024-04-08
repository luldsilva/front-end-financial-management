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
        }
      },
    },
    plugins: [('@tailwindcss/forms')],
  }