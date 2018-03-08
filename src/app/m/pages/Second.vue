<template>
  <div class="second">
    <img src="../assets/images/zdy.jpeg" alt="">
    <p>{{name}}</p>
  </div>
</template>
<script>
  require('@/lib/jquery-3.2.1.js')
  import platform from '@/utils/platform'
  export default {
    data() {
      return {
        name: '小房鸭'
      }
    },
    mounted() {
      console.log($('.about'))
    }
  }
</script>
<style>
  .second{
    text-align: center;
  }
</style>