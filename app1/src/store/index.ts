import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app1: {
      namespaced: true,
      state: {
        artifactsIDs: ["FIRST"]
      },
      mutations: {},
      actions: {},
    }
  }
});
