<template>
  <ul>
    <li
      v-for="item in 10"
      :key="item"
    >
      列表：{{ item }}
    </li>
  </ul>
</template>
<script>
import { toast } from '@/common/js/utils.js'

export default {

}
</script>
