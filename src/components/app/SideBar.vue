<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    id="sidebar"
    dark
    class="d-flex justify-center"
    :class="{ navig: mini }"
  >
    <v-list-item class="px-2 d-flex justify-center">
      <v-list-item-avatar>
        <v-img src="../../assets/logo.svg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>TransitPru</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <div class="icon-container">
      <v-list dense class="all-list">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          class="icon justify-center"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <template v-slot:append>
      <div class="pa-2 d-flex justify-center all-list">
        <v-list-item link class="icon justify-center">
          <v-list-item-icon>
            <img width="54" src="../../assets/icons/plus.svg" />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>fsdfsddfs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home" },
        { title: "My Account", icon: "mdi-refresh" },
        { title: "Users", icon: "mdi-message-text" },
      ],
      mini: true,
    };
  },
};
</script>

<style lang="scss">
#sidebar {
  background-color: #05081d;
}
.icon-container {
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .icon {
    padding-top: 54px;
    padding-bottom: 54px;
  }
}
.navig {
  width: 80px !important;
}
.all-list {
  width: 100%;
}
</style>
