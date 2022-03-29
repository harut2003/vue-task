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
    path: "/meetings",
    name: "meetings",
    meta: { layout: "main" },
    component: () => import("../views/MeetingsView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
