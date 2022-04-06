<template>
  <v-dialog v-model="openModal" width="700">
    <v-card>
      <v-card-title class="text-h5 primary"> Delete task </v-card-title>
      <v-card-text>Are you sure to delete this task? </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn depressed color="primary" @click="$emit('closeModal')">
          Cancel
        </v-btn>
        <v-btn depressed color="red" @click="deleteTask"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["openModal", "taskId"],
  methods: {
    deleteTask() {
      this.$store.commit("deleteTask", this.taskId);
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss"></style>
