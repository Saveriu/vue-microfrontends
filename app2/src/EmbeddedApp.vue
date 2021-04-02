<template>
  <v-card height="400">
    <v-card-title> Complex APP (vuex, vue-router, vuetify)</v-card-title>
    <v-card-text>
      <v-btn @click="increment" color="accent">A VBUTTON {{ cp }}</v-btn>
      <h2>A select</h2>
      <v-select label="Slect" :items="['item1', 'item2']" dense></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    storeId: {
      type: String,
      default: () => "standAloneApp2",
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
