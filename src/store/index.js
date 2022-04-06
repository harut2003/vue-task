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
    filteredTasks: null,
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    filteredTasks: (state) => state.filteredTasks,
  },
  mutations: {
    addTask(state, newTask) {
      console.log(newTask);
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
      console.log(state.filteredTasks);
    },
    searchRanges(state, { priority, circy }) {
      const rangesValues = {
        low: priority.includes("Low"),
        normal: priority.includes("Normal"),
        high: priority.includes("High"),
      };
      state.filteredTasks = state.tasks.filter((task) => {
        for (const key in rangesValues) {
          if (priority.includes("Low") && task.priority < 33) {
            return true;
          }
          if (
            priority.includes("Normal") &&
            task.priority > 33 &&
            task.priority <= 66
          ) {
            return true;
          }
          if (priority.includes("High") && task.priority > 66) {
            return true;
          }
          return false;
        }
      });
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
