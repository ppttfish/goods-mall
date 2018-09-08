<template>
  <div class="cart">
    <header>
      <h3 class="cart-head">购物车</h3>
    </header>
    <ul class="cart-tips">
        <li>30天无忧退货</li>
        <li>48小时快速退款</li>
        <li>满88元免邮费</li>
    </ul>
    <div class="cart-content">
      <div class="cart-content-img">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
      </div>
      <div class="cart-content-tips">去添加点什么吧</div>
      <div class="login-btn">登录</div>
    </div>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import FootBar from 'components/FootBar'
export default {
  name: 'Cart',
  components: {
    FootBar
  }
}
</script>

<style lang="stylus" scoped>
  .cart
    header
      height 50px
      .cart-head
        position fixed
        left 0
        right 0
        top 0
        height 50px
        line-height 50px
        text-align center
        font-size 20px
        color black
        background-color #fff
        border-bottom 1px solid #ccc
    .cart-tips
      display flex
      align-items center
      justify-content space-between
      padding 0 20px
      height 38px
      background-color #f4f4f4
    .cart-content
      position fixed
      display flex
      flex-direction column
      align-items center
      justify-content center
      left 0
      right 0
      bottom 0
      top 88px
      background-color #f4f4f4
      .cart-content-img
        font-size 140px
        color #c5c5c5
      .cart-content-tips
        position relative
        top -10px
        margin-bottom 20px
        font-size 15px
        color #7f7f7f
      .login-btn
        width 260px
        height 50px
        line-height 50px
        font-size 16px
        font-weight 600
        text-align center
        border-radius 2px
        color #fff
        background-color #b4282d
</style>
