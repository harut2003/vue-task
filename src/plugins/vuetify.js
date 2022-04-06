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
      chat: "far fa-comment-alt",
      edit: "far fa-edit",
      down: "fas fa-angle-down",
      attachment: "fas fa-paperclip",
      history: "fas fa-history",
      alert: "fas fa-exclamation-triangle",
      jira: "fab fa-jira",
      trash: "fas fa-trash",
    },
  },
});
