const path = require("path");
module.exports = {
  root: "src",
  build: {
    outDir: "../dist",
    assetsInclude: ["**/*.pdf"],
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
};
