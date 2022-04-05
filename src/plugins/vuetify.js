import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa",
    values: {
      lamp: "fas fa-lightbulb",
      settings: "fas fa-cogs",
      signal: "fas fa-wifi",
      back: "fas fa-angle-left",
    },
  },
});
