/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
      },
      backgroundImage: {
        "sidebar-background-desktop":
          "url('/src/assets/images/bg-sidebar-desktop.svg')",
        "sidebar-background-mobile":
          "url('/src/assets/images/bg-sidebar-mobile.svg')",
      },
      gridTemplateColumns: {
        "form-cols": "repeat(8, 125px)",
      },
    },
  },
  plugins: [],
};
