<template>
  <apexchart
    type="donut"
    width="380"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  computed: {
    series() {
      return this.$store.getters.cycleData;
    },

    chartOptions() {
      return {
        chart: {
          type: "donut",
        },
        labels: this.$store.getters.appexPieLabels.map(
          (lbl, i) => `${lbl.label} (${this.series[i]})`
        ),
        legend: {
          position: "left",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: false,
        },
        colors: ["#43bccd", "#6d32a5"],
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
      };
    },
  },
};
</script>
