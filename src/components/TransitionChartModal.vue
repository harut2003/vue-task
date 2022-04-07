<template>
  <v-dialog v-model="openModal" width="700">
    <v-card>
      <v-card-title class="text-h5 primary"> Edit task </v-card-title>
      <v-card-text>dsfds </v-card-text>

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
