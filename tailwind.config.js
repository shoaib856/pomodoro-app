import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pallet: {
          bittersweet: "#F87070",
          robinEggBlue: "#70F3F8",
          violet: "#D881F8",
        },
        hawkesBlue: "#D7E0FF",
        mirage: "#161932",
        ebonyClay: "#1E213F",
        porcelain: "#EFF1FA",
      },

      fontSize: {
        h1: [
          "100px",
          { lineHeight: "120px", letterSpacing: "-5px", fontWeight: "700" },
        ],
        h2: ["28px", { lineHeight: "34px", fontWeight: "700" }],
        h3: [
          "16px",
          { lineHeight: "19px", letterSpacing: "15px", fontWeight: "700" },
        ],
        h4: [
          "13px",
          { lineHeight: "16px", letterSpacing: "5px", fontWeight: "700" },
        ],
        b1: ["14px", { lineHeight: "18px", fontWeight: "700" }],
        b2: ["12px", { lineHeight: "14px", fontWeight: "700" }],
      },

      fontFamily: {
        "kumbh-sans": ["kumbh-sans", "sans-serif"],
        "roboto-slab": ["roboto-slab", "serif"],
        "space-mono": ["space-mono", "monospace"],
      },
    },
  },
  plugins: [daisyui],
};
