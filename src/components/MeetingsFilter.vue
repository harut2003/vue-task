<template>
  <div>
    <v-form class="d-flex justify-space-between align-center mt-8">
      <v-text-field label="Search keywords or a project names"></v-text-field>
      <v-col cols="12" sm="3">
        <v-select
          v-model="selected"
          :items="values"
          :menu-props="{ maxHeight: '400' }"
          label="Priority"
          multiple
          persistent-hint
        ></v-select>
      </v-col>
      <v-col cols="12" sm="3">
        <v-select
          v-model="selected"
          :items="values"
          :menu-props="{ maxHeight: '400' }"
          label="Criticality"
          multiple
          persistent-hint
        ></v-select>
      </v-col>
      <!-- <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Date range"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          :active-picker.sync="activePicker"
          :max="
            new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
              .toISOString()
              .substr(0, 10)
          "
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu> -->
      <v-btn class="filter-btn filters-btn">SEARCH</v-btn>
    </v-form>
    <hr />
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: [],
    values: ["dfsds"],
    activePicker: null,
    date: null,
    menu: false,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Circular";
  src: url("@/assets/fonts/FlowCircular-Regular.ttf");
}
input {
  margin-right: 20px;
  font-size: 15px;
}
.v-text-field label {
  font-size: 15px;
}
.v-text-field--is-booted {
  display: flex;
  flex-direction: row-reverse;
}
.v-input__slot::before {
  border-color: black !important;
}
.import-btn {
  background-color: white !important;
  margin-left: 15px;
}
.filters-btn {
  box-shadow: 0px 3px 16px #0000001a;
  width: 210px;
}
hr {
  border-top: 1px solid gray;
}
.filter-btn {
  background-color: #2b0f4d !important;
  color: white !important;
  height: 50px !important;
  border-radius: 10px;
  margin-left: 34px;
}
</style>
