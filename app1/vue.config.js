const isLib = process.argv[4] === "lib";
const externals = isLib ? ["vue"] : [];

module.exports = {
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
