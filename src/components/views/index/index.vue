<template>
  <div class="content">
    <h3>{{ msg }}</h3>
    <!-- <img src="../../../static/images/test.jpg">
    <img src="../../../static/images/1.png"> -->
    <router-view></router-view>
  </div>
</template>
<script>
import { toast } from 'utilsJs';
import config from 'config';
export default {
  data() {
    return {
      msg: 'welcome to webpack-vue'
    };
  },
  mounted() {
    toast();
    console.log('::config', config);
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
