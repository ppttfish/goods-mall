<template>
  <div class="user-body">
    <div class="logo-wrapper">
      <img src="~assets/pic/userbody.png" alt="">
    </div>
    <div class="btn-wrapper">
      <div class="btn phone-btn">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouji"></use>
        </svg>
        <span>手机号码登录</span>
      </div>
      <div class="btn email-btn">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjian"></use>
        </svg>
        <span>邮箱账号登录</span>
      </div>
      <div class="btn-tips">
        <span>手机号快捷注册</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou1"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserBody'
}
</script>

<style lang="stylus" scoped>
  .user-body
    height 820px
    background-color #F2F5F4
    .logo-wrapper
      padding 88px 0
      text-align center
      img
        width 138px
        height 48px
    .btn-wrapper
      padding 0 25px
      .btn
        display flex
        justify-content center
        align-items center
        margin-bottom 15px
        box-sizing border-box
        height 50px
        border 1px solid #b4282d
        font-size 16px
        border-radius 2px
        text-align center
        font-weight bold
        svg
          margin-right 5px
          font-size 24px
      .phone-btn
        color #fff
        background-color #b4282d
      .email-btn
        color #b4282d
        background-color transparent
      .btn-tips
        text-align center
        font-size 16px
        color black
</style>
