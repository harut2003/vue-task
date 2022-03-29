<template>
  <div class="app">
    <component :is="layout"> <router-view /> </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";

export default {
  name: "App",
  computed: {
    layout() {
      console.log(this.$route);
      if (this.$route.meta.layout) {
        return this.$route.meta.layout + "-layout";
      }
    },
  },
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
.v-application--wrap {
  flex-direction: row;
}
button {
  border-radius: 10px !important;
}
</style>
