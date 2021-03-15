import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import externalComponent from "vue-external-component";
// const MyComponent = () => externalComponent(`app1Lib.umd.js`);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
