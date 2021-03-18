<template>
  <main id="app1">
    <h2>I'm micro-app1 with params: {{ artifactURIs }}</h2>
    <app-1-component></app-1-component>
  </main>
</template>

<script>
import App1Component from "./components/App1Component.vue";

export default {
  components: { App1Component },
  props: {
    artifactURIs: Array,
  },
  async beforeCreate() {
    console.debug("Loading micro-app1");
    this.$store.registerModule("micro-app1", {
      namespaced: true,
      state: { count: 0 },
      mutations: {
        increment(state) {
           state.count = state.count+1;
        }
      },
      action: {
      },
    });
  },
};
</script>

<style scoped>

</style>