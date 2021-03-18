<template>
  <v-snackbar v-model="value">
    {{ mainCount }}
    <v-btn flat color="primary" @click.native="value = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      value: false
    };
  },
  computed: {
    mainCount() {
      return this.$store.state.count;
    }
  },
  watch: {
    mainCount(newVal) {
      this.value = true;
    }
  }
};
</script>

<style>
.viewerPlaceHolder {
  height: 200px;
  width: 200px;
  border: 1px solid #2c3e50;
}
</style>
