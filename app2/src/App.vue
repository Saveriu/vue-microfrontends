<template>
  <v-main>
    <v-btn color="success" @click="cp++">JE SUIS UN VBUTTON</v-btn>
    <v-card> Je suis une card {{ cp }}</v-card>
    <HelloWorld />
  </v-main>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import vuetify from "./plugins/vuetify";

export default {
  vuetify,
  //eslint-disable-next-line
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    cp: 0,
  }),
};
</script>
