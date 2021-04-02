<template>
  <v-app>
    <h2>Complex APP</h2>
    <v-card height="400">
      <v-btn @click="increment" color="accent">A VBUTTON</v-btn>
      A VCARD {{ cp }}</v-card
    >
  </v-app>
</template>

<script>
import vuetify from "./plugins/vuetify";
// import router from "./router";
// import store from "./store";

export default {
  // store,
  // router,
  vuetify,
  props: {
    storeId: {
      type: String,
      default: () => "standAloneMicroApp2",
    },
  },
  computed: {
    cp() {
      if (this.$store.state[this.storeId])
        return this.$store.state[this.storeId].cp;
      return -1;
    },
  },
  methods: {
    increment() {
      this.$store.commit(`${this.storeId}/increment`);
    },
  },
  created() {
    console.debug("Loading complex APP");
    console.log(this.$store);
    if (this.$store.state[this.storeId]) {
      this.$store.unregisterModule(this.storeId);
    }
    this.$store.registerModule(this.storeId, {
      namespaced: true,
      state: {
        cp: 0,
      },
      mutations: {
        increment(state) {
          state.cp++;
        },
      },
      action: {},
    });
  },
};
</script>
