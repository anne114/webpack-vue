<template>
  <div class="content">
    <h3>{{ msg }}</h3>
    <ul>
      <li><router-link :to="{ path: 'list' }">List页面</router-link></li>
    </ul>
    <!-- <img src="../../../static/images/test.jpg">
    <img src="../../../static/images/1.png"> -->
    <router-view></router-view>
  </div>
</template>
<script>
import { toast } from "utilsJs";
export default {
  data() {
    return {
      msg: "welcome to webpack-vue"
    };
  },
  mounted() {
    toast();
  }
};
</script>
<style lang="scss">
@import url("~@/common/css/utils.scss");
</style>

<style lang="scss" scoped>
.content {
  text-align: center;
  padding-top: 120px;
}
</style>
