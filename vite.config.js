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
    include: "./src/img/docs/fw19_0637-Sama-Sarun-Reddy-Resume.pdf",
    // set the output directory to dist/assets/pdf
    outputDir: "assets/pdf",
  },
};
