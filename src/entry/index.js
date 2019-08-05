import Vue from 'vue';
import Index from '@/components/views/index/index.vue';
const app = new Vue({
  render: h => h(Index)
});
app.$mount('#app');
