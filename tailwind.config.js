// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-cover': "url('./assets/coverB.jpg')",
      },
    },
  },
  plugins: [],
};

