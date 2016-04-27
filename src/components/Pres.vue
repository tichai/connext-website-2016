<script>
  import under_cons from "./under_cons.vue"
  export default {
    name: "Pres",
    components: {
      under_cons
    }
  }
</script>
<template>
<div class="container pres">
<under_cons></under_cons>
</div>
</template>
<style lang="stylus">
.container.pres
  margin-top 100px
  padding-bottom 10vh
</style>