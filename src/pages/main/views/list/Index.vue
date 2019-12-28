<template>
  <div>
    <div>list页面</div>
    <ul class="d-flex d-f-c">
      <li class="nav-item"><router-link :to="{path:'/list/one'}">one</router-link></li>
      <li class="nav-item"><router-link :to="{path:'/list/two'}">two</router-link></li>
    </ul>
    <router-view class="router"></router-view>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>

.nav-item {
  margin: 10px 15px;
}
.router {
  border-top: solid 1px #ccc;
  padding-top: 20px;
}
</style>

