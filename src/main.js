import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.css";
import UniqueId from "vue-unique-id";
import VueCompositionAPI from "@vue/composition-api";

Vue.config.productionTip = false;
Vue.use(UniqueId);
Vue.use(VueCompositionAPI);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
