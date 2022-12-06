/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#021431",

          "base-100": "#FFFFFF",

          info: "#93E6FB",

          success: "#80CED1",

          warning: "#EFD8BD",

          error: "#E58B8B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
