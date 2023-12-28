const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "category-shadow": "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
      },
      // box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    },
  },
  plugins: [],
});
