<template>
  <main id="app">
    <h2>Ich bin App1 with artifacts: {{ artifactURIs }}</h2>
    <app-1-component></app-1-component>
  </main>
</template>

<script>
import App1Component from './components/App1Component.vue';
export default {
  components: { App1Component },
  props: {
    artifactURIs: Array,
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
