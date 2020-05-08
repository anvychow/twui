module.exports = {
  purge: {
    enabled: true,
    content: [
    "./public/**/*.html",
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx"],
    options: {
      whitelist:['bg-red-500', 'px-4']
    }
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
};
