<template>
  <v-dialog
    v-model="openModal"
    width="700"
    @click:outside="$emit('closeModal')"
  >
    <v-card>
      <v-card-title class="text-h5 primary"> Edit task </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="form.description"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.project"
            label="Project name"
            required
          ></v-text-field>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.date"
                label="Deadline"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="form.date"
              :active-picker.sync="activePicker"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
          <v-slider
            class="priority"
            v-model="form.priority"
            thumb-label="always"
            label="Priority"
          ></v-slider>
          <v-slider
            v-model="form.criticality"
            thumb-label="always"
            label="Criticality"
          ></v-slider>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn depressed color="primary" @click="$emit('closeModal')">
          Cancel
        </v-btn>
        <v-btn depressed color="success" @click="editTask"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task", "openModal"],
  data: function () {
    return {
      form: {
        description: this.task.description,
        project: this.task.project,
        date: this.task.date,
        priority: this.task.priority,
        criticality: this.task.criticality,
      },
      activePicker: null,
      menu: false,
    };
  },
  beforeDestroy() {
    this.form = null;
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    editTask() {
      this.$store.commit("editTask", { id: this.task.id, form: this.form });
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss">
.v-menu__content {
  .v-btn__content {
    color: black !important;
  }
}
.priority {
  margin-top: 20px;
}
</style>
