<template>
  <main id="app1">
    <h2>Ich bin App1 with artifacts: {{ artifactURIs }}</h2>
    <h3>Store Global : {{ stateData }}</h3>
    <h3>Store Module : {{ moduleData }}</h3>
    <app-1-component></app-1-component>
  </main>
</template>

<script>
import App1Component from "./components/App1Component.vue";
// import store from "./store";

export default {
  components: { App1Component },
  props: {
    artifactURIs: Array,
  },
  computed: {
    stateData() {
      return this.$store.state;
    },
    moduleData() {
      return this.$store.state.app1;
    },
  },
  async beforeCreate() {
    console.debug("Loading micro-app1");
    this.$store.registerModule("app1", {
      namespaced: true,
      state: { titi: true },
      mutations: {},
      action: {},
    });
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 400px;
  border: 1px solid #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
