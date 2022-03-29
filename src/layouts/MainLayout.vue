<template>
  <v-app class="d-flex flex-row" id="mainCont">
    <SideBar />
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <NavBar />
        <router-view />
        <!-- <Footer /> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "@/components/app/SideBar.vue";
import NavBar from "@/components/app/NavBar.vue";
import Footer from "@/components/app/Footer.vue";

export default {
  name: "main-layout",

  components: {
    SideBar,
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
#mainCont {
  padding-left: 96px;
  background-color: #f5f5f6;
}
</style>
