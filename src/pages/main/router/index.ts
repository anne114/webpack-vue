import Vue from "vue";
import VueRouter from "vue-router";
import { iRouterConfig } from '../interface/router.interface';
import routers from './router.config';
import { getRoutes } from './router.utils'
const routes = getRoutes(routers);
Vue.use(VueRouter);
export default new VueRouter({
  mode: "hash",
  routes
});