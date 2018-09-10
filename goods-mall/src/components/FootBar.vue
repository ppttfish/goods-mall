<template>
  <div class="foot-wrapper">
    <div class="foot-navbar">
      <router-link to="/" class="active">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhuye"></use>
        </svg>
        <span>主页</span>
      </router-link>
      <router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wupinjicun"></use>
        </svg>
        <span>识物</span>
      </router-link>
      <router-link to="/item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wupinfanghangx"></use>
        </svg>
        <span>分类</span>
      </router-link>
      <router-link to="/cart">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
        <span>购物车</span>
      </router-link>
      <router-link to="/user">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-menuIcon-0803"></use>
        </svg>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FootBar'
}
</script>

<style lang="stylus" scoped>
  .foot-wrapper
    height 55px
    background-color #fff
    .foot-navbar
      display flex
      align-items center
      justify-content space-around
      position fixed
      width 100%
      height 55px
      left 0
      bottom 0
      background-color #fafafa
      border-top: 1px solid #d9d9d9
      a
        text-align center
        &.active
          color #b4282d
        svg
          font-size 22px
        span
          display block
          font-size 14px
          margin-top 4px
</style>
