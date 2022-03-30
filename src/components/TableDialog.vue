<template>
  <v-dialog v-model="addDialog" @click:outside="closeDialog" max-width="500px">
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="closeDialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
        </v-menu>
      </v-card-title>
      <v-card-text
        ><v-text-field
          label="Type your note here"
          v-model="input"
        ></v-text-field>
        <div class="d-flex justify-end">
          <v-btn
            :ripple="false"
            icon
            color="#6D32A5"
            id="no-background-hover"
            class="save-note"
            @click="addNote"
          >
            Save
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["addDialog"],
  data: () => ({
    input: "",
  }),
  methods: {
    closeDialog() {
      this.$emit("close");
    },
    addNote() {
      this.$emit("save", this.input);
      this.closeDialog();
    },
  },
};
</script>

<style lang="scss">
.save-note {
  font-size: 13px;
}
</style>
