const path = require("path");
module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    module: {
      rules: [
        {
          parser: {
            system: false,
          },
        },
      ],
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    },
    // output: {
    //   libraryTarget: "system",
    // },
    externals: [/^@olea\/.+/],
    // resolve: {
    //   alias: {
    //     vue$: path.resolve(
    //       __dirname,
    //       "./node_modules/vue/dist/vue.runtime.min.js"
    //     ),
    //     // 'vue$': 'vue/dist/vue.runtime.esm.js'
    //   },
    // },
  },
  filenameHashing: false,
};
