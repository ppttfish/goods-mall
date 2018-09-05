<template>
  <div class="home-server-police">
    <ul class="police-group">
      <li class="police-item"><a href="">网易自营品牌</a></li>
      <li class="police-item"><a href="">30天无忧退货</a></li>
      <li class="police-item"><a href="">48小时快速退款</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeServer'
}
</script>

<style lang="stylus" scoped>
  .home-server-police
    margin-bottom 10px
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
</style>
