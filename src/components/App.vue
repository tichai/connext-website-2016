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

<style>
body, html {
  background-color: #fefefe !important;
  font-family: arial , "Hiragino Sans GB","Microsoft YaHei","STHeiti","WenQuanYi Micro Hei",Arial,SimSun,sans-serif !important;
}
</style>
