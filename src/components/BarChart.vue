<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    a
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: {
    Bar,
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
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
          "tasks",
          "knowledge transfer",
          "production parallel",
          "live execution",
          "Completed",
        ].map((item) => item.toUpperCase()),
        datasets: [
          {
            label: "transitions state".toUpperCase(),
            backgroundColor: [
              "#1fc599",
              "#43bccd",
              "#6d32a5",
              "#f53361",
              "#f2a201",
            ],
            data: [1, 5, 4, 3, 2],
            barThickness: 50,
            borderRadius: 10,
            borderSkipped: false,
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              max: 6,
              min: 0,
              stepSize: 2,
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
      },
    };
  },
};
</script>
