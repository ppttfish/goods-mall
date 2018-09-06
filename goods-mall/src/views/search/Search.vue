<template>
  <div class="search">
    <div class="search-input">
      <div class="search-input-text">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <input type="text" placeholder="输入关键字">
      </div>
      <router-link to="/" class="back-home">
        取消
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style lang="stylus" scoped>
  .search
    font-size 16px
    background-color #fff
    .search-input
      display flex
      align-items center
      padding 5px 15px
      height 42px
      .search-input-text
        display inline-block
        flex 1
        padding 5px
        background-color #f4f4f4
        input
          background-color transparent
      .back-home
        margin-left 15px
</style>
