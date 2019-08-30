import Vue from 'vue';
import VueRouter from 'vue-router';
// 路由懒加载，需要安装@babel/plugin-syntax-dynamic-import
const list = () => import('@/components/views/index/list.vue');
Vue.use(VueRouter);
export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/list',
      component: list
    }
  ]
});
