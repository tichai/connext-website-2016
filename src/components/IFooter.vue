<script>
  export default {
    name: "IFooter"
  }
</script>

<template>
<p class="footer">本站不保证在老旧设备以及腾讯X5内核上的体验.<br />
但保证在 Windows Phone 8.1 以及 Windows 10 Mobile 上的体验.<br />
Copyright under MIT licence. <br />
Designed by Awc, made with <i class="fa fa-heart"></i>. </p>
</template>

<style lang="stylus">
.footer
  margin 0
  font-size 1rem
  color #BDBDBD
  text-align center
  padding-top 5vh
  background #FFF
  padding-bottom 4vh
  position relative
  z-index 120
  .fa
    color: #F44336 !important
</style>