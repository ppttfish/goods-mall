<template>
  <div class="user-body" id="user-body">
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
  name: 'UserBody',
  mounted () {
    this.adjustBodyHeight()
  },
  methods: {
    adjustBodyHeight () {
      const ele = document.getElementById('user-body')
      const height = window.screen.height - 35
      ele.style.height = height + 'px'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .user-body
    height 51.25rem
    background-color #F2F5F4
    .logo-wrapper
      padding 5rem 0
      text-align center
      img
        width 8.625rem
        height 3rem
    .btn-wrapper
      padding 0 1.5625rem
      .btn
        display flex
        justify-content center
        align-items center
        margin-bottom 0.9375rem
        box-sizing border-box
        height 3.125rem
        border 1px solid #b4282d
        font-size 1rem
        border-radius .125rem
        text-align center
        font-weight bold
        svg
          margin-right .3125rem
          font-size 1.5rem
      .phone-btn
        color #fff
        background-color #b4282d
      .email-btn
        color #b4282d
        background-color transparent
      .btn-tips
        text-align center
        font-size 1rem
        color black
</style>
