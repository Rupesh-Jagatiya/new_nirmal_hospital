module.exports = {
  content: [
    './*.html', // Root-level HTML files
    './css/**/*.css', // Your CSS folder
    './src/**/*.{html,js}', // Adjust to match your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px', // Medium Tablets
      lg: '1024px', // Laptops
      xl: '1440px', // Desktops
    },
  },
};


