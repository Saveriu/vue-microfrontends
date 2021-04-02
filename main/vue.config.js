const path = require("path");
module.exports = {
  // chainWebpack: (config) => {
  //   config.plugins.delete("prefetch");
  //   config.plugins.delete("preload");
  //   config.output.libraryTarget("umd");
  //   config.externals(["vue", "vue-router", /^@olea\/.+/]);
  // },

  transpileDependencies: ["vuetify"],
  configureWebpack: {
    // output: {
    //   libraryTarget: "system",
    // },
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
    // optimization: {
    //   delete: "splitChunks",
    // },
    // output: {
    //   libraryTarget: "umd",
    // },
    // externals: [
    //   // /^vuetify\/.*/,
    //   "vue",
    //   // {
    //   //   vue: { commonjs: "vue", commonjs2: "vue", root: "Vue", amd: "vue" },
    //   //   "vue-router": "vue-router",
    //   //   vuex: "vuex",
    //   // },
    // ],

    // module: {
    //   rules: [{ parser: { System: false } }],
    // },

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
