const isLib = process.argv[4] === "lib";
const externals = isLib ? ["vue", "vue-router", "vuex"] : [];

module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    externals,
    // output: {
    //   libraryTarget: "system",
    // },
  },
  filenameHashing: false,
  css: {
    extract: false,
  },
};

// externals: [
// {
//   vue: { commonjs: "vue", commonjs2: "vue", root: "Vue", amd: "vue" },
//   "vue-router": "vue-router",
//   vuex: "vuex",

// },
// /^vuetify\/.*/,
// ],
