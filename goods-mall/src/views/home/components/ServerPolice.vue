<template>
  <div class="home-server-police module-botton-style">
    <ul class="police-group">
      <li class="police-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-right-1"></use>
        </svg>
        <a href="">网易自营品牌</a>
      </li>
      <li class="police-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-right-1"></use>
        </svg>
        <a href="">30天无忧退货</a>
      </li>
      <li class="police-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-right-1"></use>
        </svg>
        <a href="">48小时快速退款</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeServer'
}
</script>

<style lang="stylus" scoped>
  @import '~style/common/common.styl'
  .home-server-police
    background-color #fff
    .police-group
      display flex
      overflow hidden
      height 30px
      align-items center
      padding 0 12px
      .police-item
        float left
        flex 1
        text-align center
        svg
          margin-right 5px
</style>
