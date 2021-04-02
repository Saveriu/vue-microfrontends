<template>
  <v-card>
    <v-card-title>Main App</v-card-title>
    global state:
    {{ globalState }}
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},
  computed: {
    globalState() {
      return this.$store.state;
    },
  },
});
</script>
