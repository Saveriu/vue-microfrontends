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
      },
    },
    externals: [/^@olea\/.+/],
  },
  filenameHashing: false,
};
