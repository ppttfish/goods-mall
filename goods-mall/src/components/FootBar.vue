<template>
  <div class="foot-wrapper">
    <div class="foot-navbar">
      <a
        :class="{active: this.$store.state.pageFlag === 'home'}"
        @click="handlePageClick('home')"
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhuye"></use>
        </svg>
        <span>主页</span>
      </a>
      <a
        :class="{active: this.$store.state.pageFlag === 'topic'}"
        @click="handlePageClick('topic')"
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wupinjicun"></use>
        </svg>
        <span>识物</span>
      </a>
      <a
        :class="{active: this.$store.state.pageFlag === 'item'}"
        @click="handlePageClick('item')"
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wupinfanghangx"></use>
        </svg>
        <span>分类</span>
      </a>
      <a
        :class="{active: this.$store.state.pageFlag === 'cart'}"
        @click="handlePageClick('cart')"
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
        <span>购物车</span>
      </a>
      <a
        :class="{active: this.$store.state.pageFlag === 'user'}"
        @click="handlePageClick('user')"
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-menuIcon-0803"></use>
        </svg>
        <span>我的</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FootBar',
  methods: {
    handlePageClick (flag) {
      this.$store.commit('pageChange', flag)
      if (flag === 'home') {
        this.$router.push('/')
        return
      }
      if (flag === 'topic') {
        this.$router.push('/')
        return
      }
      this.$router.push(`/${flag}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .foot-wrapper
    // height 48px
    height 3rem
    background-color #fff
    .foot-navbar
      display flex
      align-items center
      justify-content space-around
      position fixed
      width 100%
      // height 48px
      height 3rem
      left 0
      bottom 0
      background-color #fafafa
      border-top: 1px solid #d9d9d9
      z-index 1
      a
        text-align center
        &.active
          color #b4282d
        svg
          // font-size 20px
          font-size 1.25rem
        span
          display block
          // font-size 12px
          font-size .75rem
          // margin-top 4px
          margin-top .125rem
</style>
