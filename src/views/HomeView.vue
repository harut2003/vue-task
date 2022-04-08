<template>
  <div>
    <div class="bar-circle">
      <div class="chart-container bar-container">
        <div class="title-container">
          <v-btn @click="openModal = true" v-if="selectedOption"
            >Add data</v-btn
          >
          <h4>transitions state</h4>
          <v-select
            v-model="selectedOption"
            class="select status-sel"
            label="All"
            :items="items"
            item-value="value"
            item-text="name"
            dense
          ></v-select>
        </div>

        <BarChart v-if="selectedOption" />
      </div>
      <div class="chart-container doug-container">
        <div class="title-container">
          <v-btn @click="(dougOpenModal = true), (chart = 'doug')"
            >Add data</v-btn
          >
          <h4>due date</h4>
        </div>

        <DoughnutChart />
      </div>
    </div>
    <div class="chart-container">
      <div class="title-container">
        <h4>cycle time</h4>
      </div>
      <LineChart v-if="selectedOption" />
    </div>
    <div class="chart-container">
      <div class="title-container">
        <v-btn @click="(dougOpenModal = true), (chart = 'cycle')"
          >Add data</v-btn
        >

        <h4>cycle time</h4>
      </div>
      <AppexPie />
    </div>
    <TransitionChartModal
      :openModal="openModal"
      @closeModal="openModal = false"
    />
    <DoughnutChartModal
      :openModal="dougOpenModal"
      @closeModal="dougOpenModal = false"
      :chart="chart"
    />
  </div>
</template>

<script>
import BarChart from "@/components/BarChart.vue";
import DoughnutChart from "@/components/DoughnutChart.vue";
import LineChart from "@/components/LineChart.vue";
import TransitionChartModal from "@/components/TransitionChartModal.vue";
import DoughnutChartModal from "@/components/DoughnutChartModal.vue";
import AppexPie from "@/components/AppexPie.vue";

const dataValues = [3, 2];
export default {
  data() {
    return {
      chart: null,
      selectedOption: null,
      items: [
        { value: "average", name: "Average Cycle Time" },
        { value: "agreed", name: "Agreed TAT" },
      ],
      openModal: false,
      dougOpenModal: false,
    };
  },
  watch: {
    selectedOption(opt) {
      this.$store.commit("setOption", opt);
    },
  },
  name: "Home",
  components: {
    BarChart,
    DoughnutChart,
    LineChart,
    TransitionChartModal,
    DoughnutChartModal,
    AppexPie,
  },
};
</script>

<style lang="scss" scoped>
.chart-container {
  background-color: white;
  padding-right: 22px;
  border-radius: 30px;
  margin-top: 15px;
}
.bar-container {
  width: 60%;
}
.doug-container {
  width: 35%;
}
.title-container {
  padding: 22px 25px;
  display: flex;
  align-items: baseline;
  * {
    margin-right: 15px;
  }
}
.bar-circle {
  display: flex;
  justify-content: space-between;
}
h4 {
  text-transform: uppercase;
  color: #a3a6b9;
}
// .select {
//   width: 50px;
//   .v-input--dense > .v-input__control > .v-input__slot {
//     margin-bottom: -7px;
//   }
.v-input__slot::before {
  border-style: none !important;
}
// }
.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none !important;
}
</style>
