<template>
  <div class="navbar">
    <div class="header">
      <a href="#"> <v-icon>mdi-bell</v-icon> </a>
      <button class="d-flex a">
        <div class="image-upload" v-if="!url">
          <label for="file-input">
            <v-icon class="upload-icon">mdi-upload</v-icon>
          </label>

          <input id="file-input" @change="previewFiles" type="file" />
        </div>
        <img v-if="url" class="prof-pic" :src="url" alt="" width="50" />
      </button>
    </div>
    <div class="path">
      <p><span>my Transitions </span> > <span>UI/UX DESIGNER </span></p>
    </div>
    <v-row class="d-flex align-center justify-space-between">
      <v-col lg="5" md="12">
        <h1>{{ title || "UI/UX Designer" }}</h1>
      </v-col>
      <v-col md="12" lg="7" class="d-flex justify-end">
        <ToolBar v-if="noTool" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ToolBar from "./ToolBar.vue";

export default {
  props: ["title", "noTool"],
  data: () => ({
    url: null,
  }),
  methods: {
    previewFiles(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
  },
  components: {
    ToolBar,
  },
};
</script>

<style lang="scss">
.image-upload > input {
  display: none;
}
.upload-icon {
  cursor: pointer;
}
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
