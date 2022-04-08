import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 2,
        description: "adssa",
        project: "asdsa",
        priority: 72,
        criticality: 14,
        date: "2018-08-08",
        benef: "Admin",
      },
      {
        id: 11,
        description: "tre",
        project: "yoz",
        priority: 72,
        criticality: 14,
        date: "2018-08-08",
        benef: "Admin",
      },
    ],
    averageData: [],
    agreedData: [],
    dougData: [3, 2],
    dougLabels: [
      { label: `Completed due date`, value: "complited" },
      { label: `Nearing due date`, value: "nearing" },
    ],
    appexPieLabels: [
      { label: `Reviewed tasks`, value: "reviewed" },
      { label: `Not reviewed tasks`, value: "notReviewed" },
    ],
    selectedOption: "",
    filteredTasks: null,
    cycleData: [26, 18],
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    filteredTasks: (state) => state.filteredTasks,
    data: (state) =>
      state.selectedOption === "average" ? state.averageData : state.agreedData,
    averageData: (state) => state.averageData,
    agreedData: (state) => state.agreedData,
    dougData: (state) => state.dougData,
    cycleData: (state) => state.cycleData,
    dougLabels: (state) => state.dougLabels,
    appexPieLabels: (state) => state.appexPieLabels,
  },
  mutations: {
    addDougData(state, { formData, chart }) {
      if (chart === "doug") {
        state.dougData = [...formData];
      } else if (chart === "cycle") {
        state.cycleData = [...formData];
      }
    },
    setOption(state, opt) {
      state.selectedOption = opt;
    },
    addData(state, newData) {
      if (state.selectedOption === "average") {
        state.averageData = [...newData];
      } else {
        state.agreedData = [...newData];
      }
    },
    addTask(state, newTask) {
      state.tasks = [...state.tasks, newTask];
    },
    searchProject(state, value) {
      if (!value) {
        state.filteredTasks = null;
        return;
      }
      state.filteredTasks = state.tasks.filter((obj) =>
        obj.project.includes(value)
      );
    },
    searchRanges(state, { priority, circy }) {
      const prioritySelected = filterPriorityCircy(
        priority,
        state.tasks,
        "priority"
      );
      const circySelected = filterPriorityCircy(
        circy,
        state.tasks,
        "criticality"
      );
      const filtered = [];
      for (let i = 0; i < prioritySelected.length; i++) {
        for (let j = 0; j < circySelected.length; j++) {
          if (
            prioritySelected[i]?.id === circySelected[i]?.id &&
            !filtered.includes(prioritySelected[i])
          ) {
            filtered.push(circySelected[i]);
          }
        }
      }
      state.filteredTasks = [...filtered];
    },
    editTask(state, { id, form }) {
      const editingTask = state.tasks.find((task) => task.id === id);
      for (const key in editingTask) {
        editingTask[key] = form[key];
      }
    },
    deleteTask(state, id) {
      const filtered = state.tasks.filter((task) => task.id !== id);
      state.tasks = filtered;
    },
  },
  actions: {},
  modules: {},
});

function filterPriorityCircy(range, tasks, rangeName) {
  return tasks.filter((task) => {
    if (range.includes("Low") && task[rangeName] < 33) {
      return true;
    }
    if (
      range.includes("Normal") &&
      task[rangeName] > 33 &&
      task[rangeName] <= 66
    ) {
      return true;
    }
    if (range.includes("High") && task[rangeName] > 66) {
      return true;
    }
    return false;
  });
}
