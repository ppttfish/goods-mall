<template>
  <div class="new-goods module-botton-style">
    <router-link to="/">
      <span>新品首发</span>
      <div class="new-goods-more">
        查看全部
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'homeNewGoods'
}
</script>

<style lang="stylus" scoped>
  @import '~style/common/common.styl'
  .new-goods
    display flex
    justify-content center
    align-items center
    height 124px
    background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png')
    background-size 414px 124px
    a
      text-align center
      font-size 18px
      color #8BA0B6
      .new-goods-more
        width 120px
        height 26px
        line-height 26px
        margin-top 10px
        font-size 16px
        background-color #D8E5F1
</style>
