<template>
  <v-app>
    <v-app-bar app>
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
          <v-tab to="/apps/microApp2">Micro App 2</v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-btn color="success" @click="storeAction">GLOBAL ACTION!</v-btn>
      </template>
    </v-app-bar>

    <v-main><router-view> </router-view> </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
  methods: {
    storeAction() {
      this.$store.dispatch("dummy");
    },
  },
  created() {
    console.debug("Vuetify", this.$vuetify);
  },
};
</script>
