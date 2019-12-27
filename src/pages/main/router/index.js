import Vue from "vue";
import VueRouter from "vue-router";
// 路由懒加载，需要安装@babel/plugin-syntax-dynamic-import
const List = () => import("../views/list/Index.vue");
Vue.use(VueRouter);
export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/list",
      component: List
    }
  ]
});
