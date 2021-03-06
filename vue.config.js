// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });
module.exports = {
  pwa: {
    name: "Pwa-test!",
    themeColor: "#fb7823",
    icons: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
      maskIcon: "img/icons/android-chrome-maskable-192x192.png",
      msTileImage: "img/icons/msapplication-icon-144x144.png",
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/pwaTest/" : "/",
};
