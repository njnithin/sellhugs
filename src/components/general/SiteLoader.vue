<template>
  <!-- Site Loader -->
  <div class="site-loader" v-if="loaderFlag">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <!-- End of Site Loader -->
</template>
<script>
export default {
  props: {
    loaderFlag: Boolean,
  },
};
</script>
<style scoped>
.site-loader {
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>