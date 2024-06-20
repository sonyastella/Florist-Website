module.exports = {
  content: [
     './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        alice: ['Alice', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      colors: {
        'custom-gray': '#5f5e7a',
      },
    },
  },
  plugins: [],
};
