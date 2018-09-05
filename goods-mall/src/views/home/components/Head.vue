<template>
  <div class="home-nav-wrapper">
    <div class="home-nav">
      <div class="home-nav-head">
        <a href="/" class="home-logo">
          <img src="~assets/pic/logo.png" alt="">
        </a>
        <div class="nav-serach">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
          <span>
            搜索商品, 共13300款好物
          </span>
        </div>
      </div>
      <nav-slider></nav-slider>
    </div>
  </div>
</template>

<script>
import NavSlider from './NavSlider'
export default {
  name: 'HomeHead',
  components: {
    NavSlider
  }
}
</script>

<style lang="stylus" scoped>
  .home-nav-wrapper
    height 73px
    .home-nav
      position fixed
      width 100%
      z-index 2
      background-color #fff
      &::after
        content ''
        position absolute
        width 100%
        height 1px
        bottom 0
        background-color #d9d9d9
      .home-nav-head
        display flex
        align-items center
        padding 10px 15px
        .home-logo
          margin-right 10px
          img
            width 70px
            height 20px
        .nav-serach
          display flex
          align-items center
          justify-content center
          flex-grow 1
          height 30px
          font-size 16px
          background-color #ededed
          border-radius 4px
          span
            margin-left 5px
</style>
