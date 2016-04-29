<script>
  export default {
    name: "About"
  }
</script>
<template>
<div class="container about">
  <section class="connext">
    <div class="logo">
      <img src="../logo0-01.png" />
    </div>
    <h1 class="headline">新一代青少年科技大会</h1>
    <p class="line">用分享与创造启发更多青少年科技人。</p>
    <p class="line">扩展青少年互联网生态，为青少年的科技之路增光添彩。</p>
    <h2 class="subtitle">#主办团队</h2>
    <ul class="team-list">
      <li class="team-list-item">
        <img class="team-avatar" src="../avatars/tianyu_fang.jpg" />
        <p class="team-title">Tianyu F.</p>
        <div class="team-description">
          <p>美国 The Governor&#39;s Academy 在读高中生；</p>
          <p>Blogger &amp; 科技撰稿人，社会科学爱好者。</p>
        </div>
      </li>
      <li class="team-list-item">
        <img class="team-avatar" src="../avatars/linghein_ho.jpg" />
        <p class="team-title">Linghein H.</p>
        <div class="team-description">
          <p>加拿大滑铁卢大学（University of Waterloo）本科生；</p>
          <p>拥有多个科技活动的组织经验。</p>
        </div>
      </li>
      <li class="team-list-item">
        <img class="team-avatar" src="../avatars/awc_zhang.jpg" />
        <p class="team-title">Jiacheng Z.</p>
        <div class="team-description">
          <p>法国兰斯大学（Université de Reims Champagne-Ardenne）本科生；</p>
          <p>语音学、音韵学爱好者，开源歌声合成软件 Rocaloid 开发组成员。</p>
        </div>
      </li>
      <li class="team-list-item">
        <img class="team-avatar" src="../avatars/yuze_fu.jpg" />
        <p class="team-title">Yuze F.</p>
        <div class="team-description">
          <p>昵称小傅Fox，东北育才中学高中生，学生开发者；</p>
          <p>曾获信息学竞赛辽宁一等奖，参与项目「Rap-ID」获创新大赛全国二等奖。</p>
          <p>Connext 沈阳地区负责人。</p>
        </div>
      </li>
    <ul>
  </section>
  <section class="c2015">
    <div class="wave"></div>
    <h1 class="headline">往届活动</h1>
    <div class="logo">
      <img src="../2015.png" />
    </div>
    <p class="line"><b>Connext 2015</b></p>
    <p class="line">北京航空航天大学 @ 北京中关村</p>
    <p class="line">2015 年 7 月 19 日</p>
    <p class="aller"><a href="http://connextchina.tumblr.com/" target="_blank"><i class="fa fa-tumblr-square" aria-hidden="true"></i>
更多信息请点此前往Tumblr查看</a></p>
  </section>
</div>
</template>
<style lang="stylus">
@keyframes waves
  0%
    background-position 0px 0px
  100%
    background-position: 300px 0px

.container.about
  padding 0
  margin 0
  width 100%
  margin-top 100px
  .connext
    margin 0
    padding 0 8vw
    .logo
      margin 5vh auto 0
      text-align center
      img
        width 60vw
    h1.headline
      font-size 2.8vmax
      color #0A4356
      text-align center
      font-weight bold
      margin-bottom 5vh
    p.line
      font-size 1.35rem
      text-align center
      line-height 1.8rem
      color #607D8B
    h2.subtitle
      font-size 2vmax !important
      text-align center
      padding-top 5vh
      margin 0
      color #888
  .team-list
    @media screen and (max-width: 480px)
      width 100%
      margin 3vh 0 10vh
      padding 0
    text-align left
    width 70vw
    margin 3vh 5vw 10vh
    margin-bottom 10vh
    display block
    .team-list-item
      display block
      min-height 10rem
      margin-bottom 3vh
      padding-bottom 2vh
      border-bottom 1px solid #eee
      .team-title
        font-size 1.8rem
        color #0a4356
        margin-bottom 1.6rem
        max-width 80%
        font-variant small-caps
        font-weight bold
        letter-spacing .2rem
      .team-description
        max-width 70%
        p
          font-size 1.25rem
          color #607d8b
          line-height 1.3rem
          letter-spacing .2rem
      .team-avatar
        width 8rem
        height 8rem
        background white
        float right
        border-radius 999rem
        position relative
        border 2px solid #0a4356
  .c2015
    background #229EBE
    color #fff
    text-align center
    h1.headline
      font-size 2vmax
      margin-top -2rem
      text-align center
    p.line
      font-size 1.25rem
      line-height 1.4rem
    .logo
      padding 0
      img
        width 26rem
    .aller
      @media screen and (max-width: 425px)
        width 100%
        margin 6vh 0 0
        padding-top 3vh
        padding-bottom 5vh
      margin-top 8rem
      text-align center
      a
        @media screen and (max-width: 425px)
          font-size 3.2vmin
          letter-spacing 0.4rem
        color #222 !important
        background #fff
        padding 1.6rem 3rem
        line-height 0rem
        text-decoration none
        font-size 1em
        letter-spacing .7rem
        transition line-height .8s, color .5s
        &:hover
          @media screen and (max-width: 425px)
            line-height 0
          line-height 4.85rem
          color #229ebe !important
    .wave
      background url("../wave.png") top repeat-x scroll
      background-size 150px 22px
      height 100px
      animation waves 6s infinite
      animation-timing-function linear
      animation-direction normal
</style>