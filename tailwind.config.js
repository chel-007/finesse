import fireCMSConfig from "@firecms/ui/tailwind.config.js";

export default {
  presets: [fireCMSConfig],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@firecms/**/*.{js,ts,jsx,tsx}"
  ],
  // theme: {
  //   extend: {
  //       // fontFamily: {
  //       //   inter: ["Inter", "sans-serif"],
  //       // },
  //     colors: {
  //       primary: {
  //         black: "#000000",
  //         white: "#FFFFFF",
  //         gray: "#F5F5F5",
  //         darkGray: "#333333",
  //       },
  //     },
  //   },
  // },
};
