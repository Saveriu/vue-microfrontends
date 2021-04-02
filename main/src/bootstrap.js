import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import vueFovia from "./plugins/vue-fovia";

console.log("Vue", Vue);

Vue.use(vueFovia, { foviaUri: "http://192.168.0.200:8088" });
Vue.config.productionTip = false;

//eslint-disable-next-line
// export default System.import("vue").then(() => {
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
// });
