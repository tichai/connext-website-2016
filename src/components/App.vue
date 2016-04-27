<script>
  import Navbar from './Navbar.vue'
  import IFooter from './IFooter.vue'
  export default {
    name: "App",
    components: {
      Navbar,
      IFooter
    }
  }
</script>

<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <i-footer></i-footer>
  </div>
</template>

<style lang="stylus">
body, html
  background-color #fefefe !important
  font-family arial , "Hiragino Sans GB","Microsoft YaHei","STHeiti","WenQuanYi Micro Hei",Arial,SimSun,sans-serif !important
.fullscreen-wrapper
    background #0A4356
    color #eeeeee
    z-index 11
    position: relative
</style>
