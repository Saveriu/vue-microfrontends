module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    externals: ["vue-router", "vuex"],
    // output: {
    //   libraryTarget: "system",
    // },
  },
  filenameHashing: false,
  css: {
    extract: false,
  },
};
