/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('./public/infinite-loop-01.jpg')",
        "testimonials-img": "url('./public/infinite-loop-02.jpg')",
        "footer-img": "url('./public/footer.jpg')",
      },
      colors: {
        primary: "#369",
      },
    },
  },
  plugins: [],
};
