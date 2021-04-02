<template>
  <v-card>
    <v-card-title>Main App</v-card-title>
    <v-card>
      <v-card-title primary-title>
        Global State: {{ globalState }}
      </v-card-title>
    </v-card>
    <v-card class="pa-10">
      <v-card-title primary-title>
        Vuetify Form
      </v-card-title>
      <v-select label="Select" :items="['item1', 'item2']" dense></v-select>
      <v-slider v-model="value" step="0"></v-slider>
    </v-card>
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
