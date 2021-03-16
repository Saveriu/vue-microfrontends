<template>
  <v-card>
    <v-card-title primary-title> I contains {{ microAppId }} </v-card-title>
    <v-card-text>
      <v-card>
        <component :is="microAppComponent" :artifactURIs="artifactsURIs" />
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import externalComponent from "@/utils";

// const AsyncComponent = () => ({
//   // Le composant à charger (doit être une `Promise`)
//   component: import('./MonComposant.vue'),
//   // Un composant à utiliser pendant que le composant asynchrone se charge
//   loading: LoadingComponent,
//   // Un composant d'erreur à utiliser au cas où le chargement échoue
//   error: ErrorComponent,
//   // Le délai à patienter avant d'afficher le composant de chargement. Par défaut : 200ms.
//   delay: 200,
//   // Le composant d'erreur sera affiché si un délai de timeout est fourni et dépassé.
//   // Par défaut: délai infini.
//   timeout: 3000
// })

export default {
  props: {
    microAppId: {
      type: String,
      required: true,
    },
    artifactsURIs: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data: () => ({
    microAppComponent: null,
  }),
  async created() {
    console.debug(`Load app ${this.microAppId}`);
    const app = await externalComponent(`/apps/${this.microAppId}.umd.js`);
    console.debug(`App ${this.microAppId}`, app);
    this.microAppComponent = app;
  },
};
</script>

<style>
</style>