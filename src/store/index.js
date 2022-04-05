import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    addTask(state, newTask) {
      console.log(newTask);
      state.tasks = [...state.tasks, newTask];
    },
  },
  actions: {},
  modules: {},
});
