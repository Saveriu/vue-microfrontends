<template>
  <v-main>
    <v-btn color="success">JE SUIS UN VBUTTON</v-btn>
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
    //
  }),
};
</script>
