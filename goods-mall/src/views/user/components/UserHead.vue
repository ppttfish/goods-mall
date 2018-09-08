<template>
  <div class="user">
    <div class="user-nav-wrapper">
      <div class="user-nav">
        <router-link to="/">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhuye"></use>
          </svg>
        </router-link>
        <router-link to="/" class="nav-logo">
          <img src="~assets/pic/logo.png" alt="">
        </router-link>
        <div class="nav-right">
          <router-link class="" to="/serach">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sousuo"></use>
            </svg>
          </router-link>
          <router-link to="/cart">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gouwuche"></use>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserHead'
}
</script>

<style lang="stylus" scoped>
  .user-nav-wrapper
    height 48px
    background-color #fafafa
    .user-nav
      display flex
      position relative
      justify-content space-between
      align-items center
      height 100%
      padding 0 10px
      font-size 18px
      svg
        font-size 28px
        margin-right 10px
      .nav-logo
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
        width 82px
        height 25px
        img
          width 100%
          height 100%
</style>
