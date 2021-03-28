module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    externals: ["vue", "vue-router", "vuex"],
  },
  filenameHashing: false,
};
