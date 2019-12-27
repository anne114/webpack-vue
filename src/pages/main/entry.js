import Vue from "vue";
import router from "./router/index";
import Index from "./views/Index.vue";
const app = new Vue({
  render: h => h(Index),
  router
});
app.$mount("#app");
