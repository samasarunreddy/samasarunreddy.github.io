const path = require("path");
module.exports = {
  root: "src",
  build: {
    outDir: "../dist",
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  assets: {
    // include all PDF files in the src/assets/pdf directory
    include: "src/assets/pdf/**/*.pdf",
    // set the output directory to dist/assets/pdf
    outputDir: "assets/pdf",
  },
};
