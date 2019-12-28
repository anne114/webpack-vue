import Vue from "vue";
import VueRouter from "vue-router";
import routers from './router.config.js';
import {
  getRoutes
} from './router.utils.js'
const routes = getRoutes(routers);
Vue.use(VueRouter);
export default new VueRouter({
  mode: "hash",
  routes
});