export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },  // از خارج صفحه سمت راست شروع می‌شه
          '100%': { transform: 'translateX(-100%)' }, // به سمت چپ خارج می‌شه
        },
      },
    },
  },
  plugins: [],
}
