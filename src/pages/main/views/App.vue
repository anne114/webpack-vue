<template>
  <div class="content">
    <img class="logo" src="../../../static/images/logo.jpg">
    <h3>{{ msg }}</h3>
    <ul class="d-flex d-f-c">
      <li class="nav-item"><router-link :to="{ path: '/index' }">Main的首页</router-link></li>
      <li class="nav-item"><router-link :to="{ path: 'list' }">List页面</router-link></li>
    </ul>
    <router-view class="router"></router-view>
  </div>
</template>
<script>
import { toast } from "utilsJs";
export default {
  data () {
    return {
      msg: "welcome to panda"
    };
  },
  mounted () {
    toast();
  }
};
</script>
<style lang="scss">
@import url('~@/common/css/utils.scss');
</style>

<style lang="scss" scoped>
.content {
  text-align: center;
  padding-top: 60px;
}
.logo {
  width: 120px;
}
.nav-item {
  margin: 10px 15px;
}
.router {
  border-top: solid 1px #ccc;
  padding-top: 20px;
}
</style>
