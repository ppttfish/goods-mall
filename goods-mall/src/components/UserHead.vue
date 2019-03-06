<template>
  <div class="user">
    <div class="user-nav-wrapper">
      <div class="user-nav">
        <router-link to="/">
          <svg @click="handlItemClcik('home')" class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhuye"></use>
          </svg>
        </router-link>
        <router-link to="/" class="nav-logo">
          <img @click="handlItemClcik('home')" src="~assets/pic/logo.png" alt="">
        </router-link>
        <div class="nav-right">
          <router-link class="" to="/serach">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sousuo"></use>
            </svg>
          </router-link>
          <router-link to="/cart">
            <svg @click="handlItemClcik('cart')" class="icon" aria-hidden="true">
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
  name: 'UserHead',
  methods: {
    handlItemClcik (flag) {
      this.$store.commit('pageChange', flag)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .user-nav-wrapper
    height 2.6875rem
    background-color #fafafa
    .user-nav
      display flex
      position fixed
      right 0
      left 0
      height 2.6875rem
      background-color #fafafa
      justify-content space-between
      align-items center
      padding 0 .625rem
      font-size 1.125rem
      border-bottom 1px solid #ddd
      svg
        font-size 1.625rem
      .nav-logo
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
        width 4.875rem
        height 1.5rem
        img
          width 100%
          height 100%
</style>
