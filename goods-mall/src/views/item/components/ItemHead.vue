<template>
  <div class="item-head-wrapper">
    <div class="item-head">
      <div class="item-head-search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <span>搜索商品,共12600件好物</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemHead'
}
</script>

<style lang="stylus" scoped>
  .item-head-wrapper
    height 48px
    background-color #fff
    .item-head
      display flex
      align-items center
      position fixed !important
      left 0
      right 0
      top 0
      bottom 0
      padding 0 18px
      height 48px
      border-bottom 1px solid #f4f4f4
      background-color #fff
      .item-head-search
        display flex
        justify-content center
        align-items center
        width 100%
        height 32px
        border-radius 4px
        box-sizing border-box
        font-size 16px
        color #666
        background-color #ededed
        svg
          font-size 18px
          margin-right 5px
</style>
