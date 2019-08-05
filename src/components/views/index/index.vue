<template>
  <div class="content">
    <h3>{{ msg }}</h3>
    <img src="../../../static/images/test.jpg">
    <img src="../../../static/images/1.png">
    <ListVue />
  </div>
</template>
<script>
// import { toast } from '@/common/js/utils.js';
import { toast } from 'utilsJs'
import ListVue from './list.vue';
export default {
  components: { ListVue },
  data () {
    return {
      msg: 'welcome to webpack-vue'
    };
  },
  mounted () {
    toast();
    console.log(a)
  }
};
</script>
<style lang="scss">
@import url('~@/common/css/utils.scss');
</style>

<style lang="scss" scoped>
.content {
  text-align: center;
  padding-top: 120px;
}
</style>
