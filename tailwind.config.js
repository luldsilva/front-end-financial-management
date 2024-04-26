export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'medium-blue': '#3D92CB',
          'navy-blue': '#005BAA',
          'grey': '#D9D9D9',
          'dark-grey': '#333333',
          'medium-grey': '#666666',
          'black': '#111111',
          'light-blue':'#92C9ED',
        }
      },
    },
    plugins: [('@tailwindcss/forms')],
  }