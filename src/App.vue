<template>
  <div class="app">
    <component :is="layout" :title="title" :noTool="$route.meta.noTool">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";

export default {
  name: "App",
  data() {
    return {
      title: "",
      noTool: "",
    };
  },
  computed: {
    layout() {
      if (this.$route.meta.layout) {
        this.title = this.$route.meta.title;
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
</style>
