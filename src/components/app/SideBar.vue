<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      id="sidebar"
      dark
      :class="{ navig: mini }"
      class="d-flex justify-center"
      expand-on-hover
      fixed
      permanent
    >
      <v-list-item class="d-flex" id="logo">
        <v-list-item-avatar>
          <v-img src="../../assets/logo.svg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>TransitPru</v-list-item-title>
      </v-list-item>
      <div class="icon-container">
        <v-list-item-group
          v-model="selectedItem"
          color="#05081d"
          dense
          class="all-list"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
            class="icon"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </div>
      <v-list-item link id="plus-list-icon">
        <v-list-item-icon>
          <v-btn class="ma-2 white--text plus-icon" color="#6d32a5" fab>
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>New transition</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 1,
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "My Account", icon: "mdi-refresh", to: "/meetings" },
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
  border-radius: 0;
}
.icon-container {
  height: 75vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .icon {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 35px;
  }
}
#plus-list-icon {
  padding-left: 12px;
}
#logo {
  padding-left: 30px;
  padding-top: 10px;
}
.navig {
  width: 96px !important;
}
.all-list {
  width: 100%;
}
.icon-container .v-list-item-group .v-list-item--active {
  border-right: 5px solid #43bccd;
  .v-icon,
  .v-list-item__title {
    color: #43bccd;
  }
}
</style>
