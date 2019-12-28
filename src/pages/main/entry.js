import Vue from "vue";
import router from "./router/index";
import AppVue from "./views/App.vue";
const app = new Vue({
  render: h => h(AppVue),
  router
});
app.$mount("#app");