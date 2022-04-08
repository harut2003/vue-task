<template>
  <v-dialog
    v-model="openModal"
    @click:outside="$emit('closeModal')"
    width="700"
  >
    <v-card>
      <v-card-title class="text-h5 primary"> Add data </v-card-title>
      <v-card-text>
        <v-row v-if="dougData">
          <v-col cols="6" v-for="labVal in labVals" :key="labVal.value">
            <v-text-field
              v-model="dougData[labVal.value]"
              type="number"
              :label="labVal.label"
              clearable
              @blur="v$.dougData[labVal.value].$touch()"
            ></v-text-field>
            <div
              class="errorMessage"
              v-for="err in v$.dougData[labVal.value].$errors"
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

const chartSelect = {
  doug: {
    label: "dougLabels",
    data: "dougData",
  },
  cycle: {
    label: "appexPieLabels",
    data: "cycleData",
  },
};

export default {
  props: ["openModal", "chart"],
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      formData: ["completed", "nearing"],
      dougData: null,
    };
  },
  mounted() {
    this.dougData = { ...this.data };
  },
  computed: {
    labVals() {
      const { appexPieLabels, dougLabels } = this.$store.getters;
      return this.chart === "doug" ? dougLabels : appexPieLabels;
    },
    data() {
      const obj = {};
      const { dougData, cycleData } = this.$store.getters;
      const chartData = this.chart === "doug" ? [...dougData] : [...cycleData];
      this.labVals.forEach((val, i) => (obj[val.value] = chartData[i]));
      return obj;
    },
  },
  watch: {
    data(value) {
      this.dougData = { ...value };
    },
  },
  validations() {
    const obj = {};
    this.labVals.forEach(
      (lv) =>
        (obj[lv.value] = {
          required,
          minValue: minValue(1),
          maxValue: maxValue(30),
          integer,
        })
    );
    return { dougData: { ...obj } };
  },
  methods: {
    changeData() {
      this.v$.dougData.$touch();
      if (this.v$.dougData.$error) {
        return;
      }
      const formData = this.labVals.map((obj) =>
        parseFloat(this.dougData[obj.value])
      );
      this.$store.commit("addDougData", { formData, chart: this.chart });
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
