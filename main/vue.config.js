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
  },
  filenameHashing: false,
};
