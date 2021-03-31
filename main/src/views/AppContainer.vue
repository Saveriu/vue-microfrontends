<template>
  <v-card>
    <v-card-title>
      {{ microAppId }} container with inner state:{{ innerState }}
    </v-card-title>

    <v-card style="border: 2px dotted red">
      <component
        :is="microAppComponent"
        :artifactURIs="artifactsURIs"
        :key="microAppId"
      />
    </v-card>
  </v-card>
</template>

<script lang="js">


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
  computed: {
    innerState() {
      return this.$store.state[this.microAppId];
    },
  },
  async updated() {
    await this.loadMicroApp();
  },
  async created() {
    await this.loadMicroApp();
  },
  methods: {
    async loadMicroApp() {

    console.log("Pull Application", this.microAppId)
      try {
        //eslint-disable-next-line
        this.microAppComponent = await System.import(`@olea/${this.microAppId}`);
        // this.microAppComponent = await window.System.import(`@olea/${this.microAppId}`);
        console.log("App pulled!")
      }
      catch(e) {
        this.microAppComponent = null
        console.error(e)
    }
    }
  }
};
</script>

<style></style>
