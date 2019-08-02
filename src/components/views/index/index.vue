<template>
  <div class="content">
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'welcome to webpack-vue'
    };
  }
};
</script>
<style lang="scss" scoped>
.content {
  text-align: center;
  padding-top: 120px;
}
</style>


