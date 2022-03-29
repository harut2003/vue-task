<template>
  <div class="navbar">
    <div class="header">
      <a href="#"> <v-icon>mdi-bell</v-icon> </a>
      <button class="d-flex a">
        <img src="../../assets/person.png" alt="" width="30" />
      </button>
    </div>
    <div class="path">
      <p><span>my Transitions </span> > <span>UI/UX DESIGNER </span></p>
    </div>
    <div class="d-flex align-center justify-space-between">
      <h1>Connected to Outlook</h1>
      <ToolBar />
    </div>
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
