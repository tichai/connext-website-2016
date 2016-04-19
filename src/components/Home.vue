<script>
  import bg_canvas from "./bg_canvas.vue"
  export default {
    name: "Home",
    components: {
      bg_canvas
    },
    data() {
      return {
        page: "Home"
      }
    }
  }
</script>

<template>
  <bg_canvas></bg_canvas>
  <div class="container index">
    <div class="logo">
      <img src="../logo0-01.png" />
    </div>
    <div class="slogan">
      <h3>「多维度，多角度」</h3>
      <p>开放、全面、丰富的青少年互联网 meetup，只为志趣相投的你！<br />多视角的讲者和观众，带来经验、创新和激情。<br />有趣的新一代青少年科技大会，从中关村来到梦想小镇。</p>
      <div class="code">
        <p>:title => [:第二届新一代青少年科技大会, :"Connext 2016"] // <img src="../lx-01.png"></p>
        <p>:time => [:"2016 年 7 月 23 日", :"2016 年 7 月 24 日"] // <i class="fa fa-clock-o" aria-hidden="true"> </i></p>
        <p>:location => :杭州市余杭区梦想小镇氪空间 (近阿里巴巴总部) // <i class="fa fa-location-arrow" aria-hidden="true"> </i></p>
        <p class="arrow shake-slow shake-vertical-slow shake-vertical shake-constant shake-constant--hover"><i class="fa fa-angle-double-down" aria-hidden="true"></i></p>
      </div>
    </div>
  </div>
  <div class="container index-content">
    <h3>赞助商</h3>
    <h4>往届赞助商</h4>
  </div>

</template>

<style lang="sass">
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.shake-slow.shake-vertical {
    animation-duration: 10s !important;
    animation-iteration-count: infinite;
    animation-name: shake-vertical;
    animation-timing-function: ease-in-out;
}
.slogan {
  .arrow {
    margin-top: 2vh;
  }
  h3 {
    margin-bottom: 5vh;
  }
  background: 0;
  text-align: center;
  border: 0;
  margin: 5vh auto !important;
  padding: 0.5vh 5vw !important;
  z-index: 10;
  position: relative;
      font-size: 1.2rem;
      opacity: 1;
      width: 100%;
      animation-name: fadeIn;
      animation-duration: 1s;
      animation-timing-function: ease-in;
      animation-iteration-count: 1;
      animation-delay: 0s;
      z-index: 10;
      position: relative;
  .code {
    background: rgba(247, 247, 247, 0.38);
    margin: auto;
    padding: 3vh 8vw;
    padding-bottom: 1vh;
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    text-align: left;
    color: #607D8B;
    p {
      background: #ECEFF1;
      min-width: 10%;
      img {
        width: 5.8rem;
      }
    }
    p:last-child {
      text-align: right;
      width: 100%;
      background: 0;
    }
  }
}
.index-content {
  margin-top: 110vh;
  text-align: center;

}
.index {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 65vh;
  .logo {
    background-image: url("../logo1-01.png");
    background-size: 100%;
    margin: auto;
    img {
      opacity: 1;
      width: 100%;
      animation-name: fadeIn;
      animation-duration: 1s;
      animation-timing-function: ease-in;
      animation-iteration-count: 1;
      animation-delay: 0s;
      z-index: 10;
      position: relative;
    }
  }
  .col-md-3 {
    text-align: center;
  }

}
</style>
