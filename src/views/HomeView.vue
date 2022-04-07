<template>
  <div>
    <div class="bar-circle">
      <div class="chart-container bar-container">
        <div class="title-container">
          <v-btn @click="openModal = true">Add data</v-btn>
          <h4>transitions state</h4>
          <v-select class="select status-sel" label="All" dense></v-select>
        </div>

        <BarChart />
      </div>
      <div class="chart-container doug-container">
        <div class="title-container">
          <h4>due date</h4>
        </div>

        <DoughnutChart />
      </div>
    </div>
    <div class="chart-container">
      <div class="title-container">
        <h4>cycle time</h4>
      </div>
      <LineChart />
    </div>
    <div class="chart-container">
      <div class="title-container">
        <h4>cycle time</h4>
      </div>
      <apexchart
        type="pie"
        width="380"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    <TransitionChartModal
      :openModal="openModal"
      @closeModal="openModal = false"
    />
  </div>
</template>

<script>
import BarChart from "@/components/BarChart.vue";
import DoughnutChart from "@/components/DoughnutChart.vue";
import LineChart from "@/components/LineChart.vue";
import VueApexCharts from "vue-apexcharts";
import TransitionChartModal from "@/components/TransitionChartModal.vue";

const dataValues = [3, 2];
export default {
  data() {
    return {
      openModal: false,
      series: [26, 18],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Reviewed tasks (26)", "Not reviewed tasks (18)"],
        legend: {
          position: "left",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
  name: "Home",
  components: {
    BarChart,
    DoughnutChart,
    LineChart,
    apexchart: VueApexCharts,
    TransitionChartModal,
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
