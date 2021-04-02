<template>
  <main>
    <h2>Simple APP</h2>
    <button @click="cp++">A BUTTON</button>
    <div>A DIV {{ cp }}</div>
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
