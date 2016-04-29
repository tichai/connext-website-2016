<script>
  import bg_canvas from "./bg_canvas.vue"
  export default {
    name: "Home",
    ready: function(){
$("#app > div.container.index > div.logo > img").css("opacity", 0);
setTimeout(function(){$("#app > div.container.index > div.logo > img").css("opacity", 1);}, 1200);

$("#app > div.container.index > div.slogan > h3").css("opacity", 0);
setTimeout(function(){$("#app > div.container.index > div.slogan > h3").css("opacity", 1);}, 2400);

$("#app > div.container.index > div.slogan > p").css("opacity", 0);
setTimeout(function(){$("#app > div.container.index > div.slogan > p").css("opacity", 1);}, 3400);

$("#app > div.container.index > div.slogan > div").css("opacity", 0);
setTimeout(function(){$("#app > div.container.index > div.slogan > div").css("opacity", 1);}, 5000);
    },
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
        <p>:title => [:第二届新一代青少年科技大会, :"Connext 2016"] # <img src="../lx-01.png"></p>
        <p>:time => [:"2016 年 7 月 23 日", :"2016 年 7 月 24 日"] # <i class="fa fa-clock-o" aria-hidden="true"> </i></p>
        <p>:location => :杭州市余杭区梦想小镇氪空间 (近阿里巴巴总部) # <i class="fa fa-location-arrow" aria-hidden="true"> </i></p>
        <a href="#" class="scroll"><p class="arrow shake-slow shake-vertical-slow shake-vertical shake-constant shake-constant--hover"><i class="fa fa-angle-double-down" aria-hidden="true"></i></p></a>
      </div>
    </div>
    <div class="tianyu">北京海淀！北京海淀！中国最大青少年科技向活动 Connext 倒闭啦！王八蛋老板房天语带着他小姨子 Linghein Ho 跑啦！我们没有办法，只有敲开仓库，拿着 Mi Band 换吃的！原价 79 的 Mi Band，现在免费送！只要提供一顿饭即可！房天语你不是人！你还我们血汗钱！</div>
  </div>
  <div class="fullscreen-wrapper">
    <div class="container index-content">
      <h3>会议日程</h3>
      <div class="pre-list" style="display: none;">
        <div class="pre-date">
          <p>Day</p>1
        </div>
        <div class="pre-list-item">
          <img class="pre-avatar" src="#" />
          <p class="pre-title">Title</p>
          <p class="pre-description">Description.</p>
        </div>
        <div class="pre-date">
          <p>Day</p>2
        </div>
        <div class="pre-list-item">
          <img class="pre-avatar" src="#" />
          <p class="pre-title">这是标题</p>
          <p class="pre-description">Description.</p>
        </div>
      </div>
      <div class="pre-soon">&lt;!-- 待定 --&gt;</div>
      <div class="questionne">
        <p>你是否希望站在讲台上讲述你的经验和项目？</p>
        <p>无论你是开发者、设计师还是互联网行业的关注者，如果你想与青少年参会者分享你的知识和见解，欢迎申请成为演讲者！</p>
        <p class="quetionne-btn-line"><a v-link="{name: 'reg'}" class="quetionne-btn">查看详情</a></p>
      </div>
      <h4 class="commandeur">开发者？设计师？<br />关注互联网领域的你<br />
      <b>只要拥有一颗年轻的心并对科技充满着激情</b><br />就请同我们一起加入这疯狂的 party！</h4>
      <div class="ticket">
        <p>由于活动的成本等因素，本次 Connext 2016 将<strong>仅发放</strong>付费入场券。</p>
        <ul>
          <li>早鸟票 ¥29</li>
          <li>优先票 ¥99</li>
        </ul>
        <p>常规票种从 5 月 31 日开始销售，价格为 ¥49。</p>
        <blockquote>
        <p>请注意，本活动仅通过活动行出售入场券。</p>
        </blockquote>
        <p>由于活动的成本等因素，本次 Connext 2016 将<strong>仅发放</strong>付费入场券。我们仔细考虑了票券价格，认为 49 人民币元是一个多数参会者可接受的的价格同时，也是一个满足组委会活动经费的价格。除此之外，您可以通过在 5 月 31 日前选择早鸟票 (¥29) 从而降低成本。</p>
        <p>我们并不希望因为入场券的价格原因将很多朋友拒之门外所以，提供了免费获得入场券的方式，给热爱科技的你：</p>
        <blockquote>
          <ul>
            <li>成为志愿者。我们大约需要 5 位左右的志愿者来为活动服务。如果你成功报名成为志愿者，你将获得免费的入场资格。</li>
            <li>成为演讲者。Connext 重视聆听者，也同样重视分享者。如果你希望站在讲台上，请不要犹豫，尽快报名你的演讲。如果你成功报名成为演讲者，你将获得免费的入场资格。</li>
            <li>我们提供了 23 张免费门票。介绍自己并告诉我们你对本次活动的期待，写信给 <a href="mailto:free16@connext.im">free16@connext.im</a> 争取一个名额。</li>
          </ul>
        </blockquote>
        <p class="aller"><a href="http://www.huodongxing.com/event/2330305833500" target="_blank"><i class="fa fa-angle-double-right" aria-hidden="true"></i>跳转到活动行</a></p>
      </div>
      <h3 style="display: none;">赞助商</h3>
    </div>
  </div>
</template>
<style lang="stylus">
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.tianyu {
  background: #0A4356;
  color: #0A4356;
  height: 100vh;
  text-align: center;
  width: 1000vw;
  position: relative;
  left: -100vw;
  top: 5vh;
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
    font-size: 5vmin;
    animation-name: fadeIn;
    animation-duration: 2s;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-delay: 2s;
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
  z-index: 10;
  position: relative;
  > p {
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-delay: 3s;
  }
  .code {
    background: rgba(247, 247, 247, 0.38);
    margin: 4vh 4vw;
    padding: 3vh 2vw;
    padding-bottom: 1vh;
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    text-align: left;
    color: #607D8B;
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-delay: 4s;
    @media screen and (max-width: 350px) {
      margin: 0;
    }
    p {
      background: #ECEFF1;
      min-width: 10%;
      img {
        width: 5.8rem;
      }
    }
    p:last-child {
      text-align: center;
      width: 100%;
      background: 0;
    }
  }
}
.index-content {
  margin-top: 110vh;
  margin-bottom: 0;
  padding-top: 5rem;
  padding-bottom: 10vh;
  text-align: center;
  .commandeur {
    line-height: 3rem;
    padding: 12vh 0;
    color: #607D8B;
    font-size: 1.6rem;
  }
  /* Tianyu Fang, Ça va pas, non ? */
  .questionne {
    max-width: 65rem;
    margin: auto;
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 6.5vh 5vw;
    padding-bottom: 3vh;
    text-align: left;
    font-size: 1em;

    .quetionne-btn {
      color: #0A4356 !important;
      background: #eee;
      padding: 1rem 1rem;
      line-height: 5rem;
      text-decoration: none;
      font-size: .9em;
    }
  }
  .ticket {
    background: #229EBE;
    color: #EEEEEE;
    margin: 0;
    padding: 6vh 6vw;
    font-size: 1.3rem;
    margin-bottom: 10vh;
    text-align: left;
    .aller {
      margin-top: 3rem;
      text-align: center;
      &.disabled {
        &:after {
            position: absolute;
            content: "暂时不可用";
            font-size: 1.2rem;
            color: #156276;
            left: 0;
            width: 100%;
            transform: translateY(5.5rem);
          }
        cursor: not-allowed;
        a {
          background: rgb(17, 79, 95);
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.67) inset;
          cursor: not-allowed;
          color: #A2A2A2 !important;
          &:hover {

            color: #A2A2A2 !important;
          }
        }
      }
      a {
        color: #222 !important;
        background: #eee;
        padding: 1.6rem 3rem;
        line-height: 5rem;
        text-decoration: none;
        font-size: 1.2em;
        letter-spacing: 1rem;
        transition: color 0.5s;
        &:hover {
          color: #229ebe !important;
        }
      }
    }
    p {
      line-height: 2.2rem;
      letter-spacing: .14rem;
    }
    blockquote {
      margin: 2vh auto;
      font-size: 1.3rem;
      letter-spacing: .2rem;
      padding: 3vh 6vw 3vh 2vw;
      color: #E4E4E4;
      background: rgba(0, 0, 0, 0.38);
      ul {
        padding-left: 4vw;
        line-height: 2rem;
        li {
          padding-bottom: 1rem;
        }
      }
      a {
        color: #fff;
        text-decoration: underline;
        text-decoration-color: #fff;
      }
    }
  }
  .pre-soon {
      color: #aaa;
      margin: 8vh 13vw;
  }
  .pre-list {
    text-align: left;
    width: 70vw;
    margin: 6vh auto;
    margin-bottom: 10vh;
    .pre-date {
      position: absolute;
      transform: translate(-5rem);
      background: rgba(255, 255, 255, 0.3);
      font-size: 2rem;
      text-align: center;
      line-height: 2.6rem;
      padding: .8rem .8rem .2rem;
      p {
        font-size: 1.2rem;
        margin: 0;
        padding: 0;
        line-height: 1rem;
      }
    }
    .pre-list-item {
      min-height: 10rem;
      margin-bottom: 3vh;
      .pre-title {
        font-size: 1.8rem;
        color: #ddd;
        max-width: 80%;
      }
      .pre-description {
        font-size: 1.2rem;
        color: #aaa;
        max-width: 80%;
      }
      .pre-avatar {
        width: 8rem;
        height: 8rem;
        background: white;
        float: right;
        border-radius: 999rem;
        position: relative;
        top: 1rem;
        border: 2px solid #229EBE;
      }
    }
  }
}
.index {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    transform: translateY(15vh);
    overflow: visible;
    -ms-overflow-style: none;
    overflow:-moz-scrollbars-none;
  &::-webkit-scrollbar {
    display: none;
}
  .logo {
    background-image: url("../logo1-01.png");
    background-size: 100%;
    margin: auto;
    margin-top: 5vh;
    width: 70%;
    @media screen and (max-width: 350px) {
      margin-top: 3vh;
    }
    img {
      opacity: 1;
      width: 100%;
      animation-name: fadeIn;
      animation-duration: 1.5s;
      animation-timing-function: ease-in;
      animation-iteration-count: 1;
      animation-delay: .2s;
      z-index: 10;
      position: relative;
    }
  }
  .col-md-3 {
    text-align: center;
  }

}
</style>
