const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // Add this line of code to disable lintOnSave
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/sass/main.scss";`,
      },
    },
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.ts",
      title: "BenchEase | ",
    },
  },
  devServer: {
    proxy: {
      "^/": {
        target: "http://127.0.0.1:8180",
        changeOrigin: true,
      },
    },
  },
});
