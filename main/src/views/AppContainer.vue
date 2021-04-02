<template>
  <v-card>
    <v-card-title>
      container of {{ appId }} with inner state:{{ innerState }}
    </v-card-title>

    <v-card style="border: 4px dashed #ff4081 ">
      <component :is="appComponent" :storeId="appId" />
    </v-card>
  </v-card>
</template>

<script lang="js">

export default {
  props: {
    appId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    appComponent: null,
  }),
  computed: {
    innerState() {
      return this.$store.state[this.appId];
    },
  },
  watch: {
    async appId(newVal,oldVal) {
      await this.loadMicroApp();
    }
  },
  async created() {
    await this.loadMicroApp();
  },
  methods: {
    async loadMicroApp() {
      console.debug("Pull Application", this.appId)
        try {
          //eslint-disable-next-line
          this.appComponent = await System.import(`@saveriu/${this.appId}`);
          console.log("App pulled!");
        }
        catch(e) {
          this.appComponent = null;
          console.error(e);
      }
    }
  }
};
</script>

<style></style>
