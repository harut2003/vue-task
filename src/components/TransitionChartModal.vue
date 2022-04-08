<template>
  <v-dialog
    v-model="openModal"
    @click:outside="$emit('closeModal')"
    width="700"
  >
    <v-card>
      <v-card-title class="text-h5 primary"> Add data </v-card-title>
      <v-card-text v-if="transitionData">
        <v-row>
          <v-col cols="6">
            <v-text-field
              type="number"
              v-model="transitionData.tasks"
              label="Tasks"
              clearable
              @blur="v$.transitionData.tasks.$touch()"
            ></v-text-field>
            <div
              class="errorMessage"
              v-for="err in v$.transitionData.tasks.$errors"
              :key="err.uid"
            >
              {{ err.$message }}
            </div>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="transitionData.knowledge"
              type="number"
              label="Knowledge transfer"
              clearable
              @blur="v$.transitionData.knowledge.$touch()"
            ></v-text-field>
            <div
              v-for="err in v$.transitionData.knowledge.$errors"
              :key="err.uid"
              class="errorMessage"
            >
              {{ err.$message }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="transitionData.production"
              type="number"
              label="Production parallel"
              clearable
              @blur="v$.transitionData.production.$touch()"
            ></v-text-field>
            <div
              v-for="err in v$.transitionData.production.$errors"
              :key="err.uid"
              class="errorMessage"
            >
              {{ err.$message }}
            </div>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="transitionData.live"
              type="number"
              label="Live execution"
              clearable
              @blur="v$.transitionData.live.$touch()"
            ></v-text-field>
            <div
              class="errorMessage"
              v-for="err in v$.transitionData.live.$errors"
              :key="err.uid"
            >
              {{ err.$message }}
            </div>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="transitionData.completed"
              type="number"
              label="Completed"
              clearable
              @blur="v$.transitionData.completed.$touch()"
            ></v-text-field>
            <div
              class="errorMessage"
              v-for="err in v$.transitionData.completed.$errors"
              :key="err.uid"
            >
              {{ err.$message }}
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn depressed color="primary" @click="$emit('closeModal')">
          Cancel
        </v-btn>
        <v-btn depressed color="success" @click="changeData">
          Change data
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minValue, maxValue, integer } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  props: ["openModal", "chart"],
  data() {
    return {
      formData: ["tasks", "knowledge", "production", "live", "completed"],
      transitionData: null,
    };
  },
  computed: {
    data() {
      const obj = {};
      this.formData.forEach(
        (val, i) => (obj[val] = this.$store.getters.data[i])
      );
      return obj;
    },
  },
  watch: {
    data(value) {
      this.transitionData = { ...value };
    },
  },
  validations() {
    const obj = {};
    this.formData.forEach(
      (val) =>
        (obj[val] = {
          required,
          minValue: minValue(1),
          maxValue: maxValue(30),
          integer,
        })
    );
    return { transitionData: { ...obj } };
  },
  methods: {
    changeData() {
      this.v$.transitionData.$touch();
      if (this.v$.transitionData.$error) {
        return;
      }
      const formData = this.formData.map((prop) =>
        parseFloat(this.transitionData[prop])
      );
      this.$store.commit("addData", formData);
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss">
.errorMessage {
  color: red;
  font-size: 13px;
}
.v-text-field__details {
  display: none !important;
}
</style>
