import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/transitions",
    name: "transitions",
    meta: { layout: "main", noTool: true },
    // component: () => import("../views/MeetingsView.vue"),
  },
  {
    path: "/transitions/meetings",
    name: "meetings",
    meta: { layout: "main", noTool: true },
    component: () => import("../views/MeetingsView.vue"),
  },
  {
    path: "/transitions/tasks",
    name: "tasks",
    meta: { layout: "main", noTool: true },
    component: () => import("../views/TasksView.vue"),
  },
  {
    path: "/transitions/add-task",
    name: "addTask",
    meta: { layout: "main", title: "ADD TASK", noTool: false },
    component: () => import("../views/AddTask.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
