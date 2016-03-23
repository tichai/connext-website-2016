<script>
  import Navbar from './Navbar.vue'

  export default {
    name: "App",

    components: {
      Navbar
    }
  }
</script>

<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<style>
body, html {
  background-color: #FAFAFA !important;
  font-family: arial , "Hiragino Sans GB","Microsoft YaHei","STHeiti","WenQuanYi Micro Hei",Arial,SimSun,sans-serif !important;
}
</style>
