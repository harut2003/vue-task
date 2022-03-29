<template>
  <div class="navbar">
    <div class="header">
      <a href="#"> <v-icon>mdi-bell</v-icon> </a>
      <button class="d-flex a">
        <img class="prof-pic" src="../../assets/person.jpg" alt="" width="50" />
      </button>
    </div>
    <div class="path">
      <p><span>my Transitions </span> > <span>UI/UX DESIGNER </span></p>
    </div>
    <v-row class="d-flex align-center justify-space-between">
      <v-col lg="5" md="12">
        <h1>UI/UX Designer</h1>
      </v-col>
      <v-col md="12" lg="7" class="d-flex justify-end">
        <ToolBar />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ToolBar from "./ToolBar.vue";

export default {
  components: {
    ToolBar,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .prof-pic {
    border-radius: 50%;
  }
  a {
    margin-right: 20px;
  }
  button {
    display: flex;
    align-items: center;
  }
}
.path {
  p {
    color: #6d32a5;
    font-weight: bold;
    span {
      text-decoration: underline;
      text-transform: uppercase;
    }
  }
}
h1 {
  font-size: 60px;
}
.bell {
  background-color: transparent;
}
a {
  text-decoration: none;
}
</style>
