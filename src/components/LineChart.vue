<template>
  <LineChartGenerator
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
import { Line as LineChartGenerator } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

export default {
  name: "LineChart",
  components: {
    LineChartGenerator,
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
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
    return {
      chartData: {
        labels: [
          "TASKS APPROVING",
          "knowledge transfer",
          "production parallel",
          "live execution",
        ].map((label) => label.toUpperCase()),
        datasets: [
          {
            label: "Average Cycle time",
            backgroundColor: "#ffffff",
            data: [8, 9, 26, 10],
            borderWidth: 6,
            borderColor: "#6d32a5",
          },
          {
            label: "Agreed TAT",
            borderColor: "#43bccd",
            borderWidth: 6,
            backgroundColor: "#ffffff",
            data: [13, 5, 15, 17],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              max: 30,
              min: 0,
              stepSize: 10,
              padding: 25,
              font: {
                size: 12,
                weight: "bold",
              },
              color: "#a3a6b9",
            },
            grid: {
              drawTicks: false,
              drawBorder: false,
              color: "rgba(163, 166, 185, 0.3)",
            },
          },
          x: {
            barThickness: 10,
            grid: {
              display: false,
              drawTicks: false,
              drawBorder: false,
            },
            ticks: {
              font: {
                size: 12,
                weight: "bold",
              },
              color: "#a3a6b9",
              padding: 25,
            },
          },
        },
        plugins: {
          legend: {
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
