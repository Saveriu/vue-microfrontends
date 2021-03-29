import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    dummyMutation(state) {
      state.count = state.count + 1;
    },
  },
  actions: {
    dummy({ commit }) {
      commit("dummyMutation");
    },
  },
  modules: {},
});
