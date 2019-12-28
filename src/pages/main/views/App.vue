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
<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop, Watch } from 'vue-property-decorator';
import{State,Mutation} from 'vuex-class';
import { toast } from "../../../common/js/utils";
@Component
export default class App extends Vue{
  msg:string= "welcome to panda"
  @Prop({default:'anne'}) name!:string
  @State stateTest;
  mounted(){
    toast();
    console.log(this.stateTest);
    
  }
}
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
