<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <h1>Micro frontend POC</h1>

      <template #extension>
        <v-tabs align-with-title>
          <v-tab to="/">Main</v-tab>
          <v-tab to="/apps/microApp1">Micro App 1</v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-btn color="success" @click="storeAction">GLOBAL ACTION!</v-btn>
      </template>
    </v-app-bar>

    <v-main><router-view> </router-view> </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import store from "./store";

export default Vue.extend({
  store,
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    storeAction() {
      this.$store.dispatch("dummy");
    },
  },
});
</script>
