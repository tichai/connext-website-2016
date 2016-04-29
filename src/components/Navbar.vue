<script>
  export default {
    name: "Navbar"
  }
</script>

<template>

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><img src="../lx-01.png" /></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a v-link="{name: 'home'}">会议概览</a></li>
        <li><a v-link="{name: 'pres'}">演讲嘉宾</a></li>
        <li><a v-link="{name: 'about'}">关于我们</a></li>
        <li><a v-link="{name: 'reg'}">讲者注册</a></li>
        <li><a href="http://shenyang.connextconf.org/" target="_blank">@Shenyang</a></li>
      </ul>

    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
<style>
nav {
  z-index: 1000 !important;
  opacity: 1
}
.navbar-brand img{
  height: 20px
}
</style>