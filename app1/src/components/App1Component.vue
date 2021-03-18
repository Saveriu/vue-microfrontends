<template>
  <div>
    <h3>Main App state:{{ mainCount }}</h3>
    <h3>Local state:{{ localCount }}</h3>
    <button @click="increment">LOCAL ACTION</button>
  </div>
</template>

<script>
export default {
  computed: {
    mainCount() {
      return this.$store.state.count;
    },
    localCount() {
      return this.$store.state["micro-app1"].count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("micro-app1/increment");
    },
  },
};
</script>
