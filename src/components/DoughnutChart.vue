<template>
  <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  computed: {
    // chartData() {
    //   return this.chartData;
    // },
  },
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 244,
    },
    height: {
      type: Number,
      default: 244,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    const dataValues = [3, 2];
    return {
      chartData: {
        datasets: [
          {
            backgroundColor: ["#43bccd", "#6d32a5"],
            data: [...dataValues],
          },
        ],
        labels: [
          `Completed due date (${dataValues[0]})`,
          `Nearing due date (${dataValues[1]})`,
        ],
      },

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        stroke: {
          width: 0,
        },
        scales: {
          y: {
            display: false,
            scaleLabel: {
              labelString: "y-axis label",
              padding: 10,
            },
          },
        },
        borderWidth: 0,
        plugins: {
          legendMargin: {
            id: "legendMargin",
            beforeInit: function (chart, options) {
              console.log(chart);
              chart.legend.afterFit = function () {
                this.height = this.height + 80;
              };
            },
          },
          legend: {
            position: "left",
            display: true,

            labels: {
              usePointStyle: true,
              boxWidth: 16,
              font: {
                size: 13,
                weight: "bold",
              },
            },
          },
        },
      },
    };
  },
};
</script>
