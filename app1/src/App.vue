<template>
  <main>
    <h2>Simple APP (no vuex, no vue-router, no vuetify)</h2>
    <button type="button" @click="cp++">A BUTTON {{ cp }}</button>
  </main>
</template>

<script>
export default {
  props: {
    artifactURIs: Array,
  },
  data: () => ({
    cp: 0,
  }),
};
</script>
