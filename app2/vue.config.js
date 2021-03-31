module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    externals: [
      {
        vue: { commonjs: "vue", commonjs2: "vue", root: "Vue", amd: "vue" },
        "vue-router": "vue-router",
        vuex: "vuex",
      },
      // /^vuetify\/.*/,
    ],
    // output: {
    //   libraryTarget: "system",
    // },
  },
  filenameHashing: false,
  css: {
    extract: false,
  },
};
