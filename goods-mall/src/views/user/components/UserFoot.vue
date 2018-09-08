<template>
  <div class="user-foot">
    <ul class="user-foot-itemlist">
      <li class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
        <span>微信</span>
      </li>
      <li class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-QQ"></use>
        </svg>
        <span>QQ</span>
      </li>
      <li class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibo"></use>
        </svg>
        <span>微博</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserFoot'
}
</script>

<style lang="stylus" scoped>
  .user-foot
    position fixed
    left 0
    right 0
    bottom 40px
    background-color #f4f4f4
    .user-foot-itemlist
      display flex
      align-items center
      padding 0 80px
      .item
        flex-grow 1
        font-size 16px
        color #7f7f7f
        text-align center
        &:nth-child(1)
          border-right 1px solid #7f7f7f
        &:nth-child(2)
          border-right 1px solid #7f7f7f
        svg
          margin-right 5px
          font-size 20px
</style>
