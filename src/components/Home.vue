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
  </div>
  <div class="container slogan">
    <h2>The Placeholder</h2>
    <hr>
    <p>placeholder
    </p>
  </div>
  
</template>

<style lang="sass">
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: .9;
  }
}
.slogan {
  background: rgba(255, 255, 255, .8);
  text-align: center;
  border: #EEE 1px solid;
  margin: 5vh auto !important;
  padding: 0.5vh 5vw !important;
  z-index: 10;
  position: relative;
      opacity: .9;
      width: 100%;
      animation-name: fadeIn;
      animation-duration: 1s;
      animation-timing-function: ease-in;
      animation-iteration-count: 1;
      animation-delay: 0s;
      z-index: 10;
      position: relative;
}
.index {
  .logo {
    width: 80%;
    background-image: url("../logo1-01.png");
    background-size: 100%;
    margin: auto;
    margin-top: 20vh;
    margin-bottom: 10vh;
    img {
      opacity: .9;
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
