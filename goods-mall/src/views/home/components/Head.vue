<template>
  <div class="home-nav">
    <div class="home-nav-head">
      <a href="/" class="home-logo">
        <img src="~assets/pic/logo.png" alt="">
      </a>
      <div class="nav-serach">
        <span>搜索商品, 共13300款好物</span>
      </div>
    </div>
    <nav-slider></nav-slider>
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
.home-nav
  background-color #fff
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
</style>
