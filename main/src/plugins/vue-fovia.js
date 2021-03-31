export default {
  install(Vue, options) {
    const url = new URL(options.foviaUri);
    Vue.prototype.$fovia = window.Fovia;
    console.log("fovia", window.FoviaPrivate);
    Vue.prototype.$fovia.ready = new Promise((resolve, reject) => {
      try {
        window.Fovia.FoviaAPI.requestServerConnection(
          resolve,
          null,
          null,
          url.hostname,
          url.port,
          url.protocol,
          "websocket"
        );
      } catch (e) {
        reject(e);
      }
    });
  },
};
