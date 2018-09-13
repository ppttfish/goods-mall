<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li v-for="(item, index) in swiperSlides" :key="index" :class="{ active: item==='推荐', tab: item!=='推荐'}">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'NavSlider',
  data () {
    return {
      swiperSlides: ['推荐', '居家', '鞋包配饰', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区']
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true
      })
    })
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    margin 0 .9375rem
    overflow-x hidden
    white-space nowrap
    .content
      li
        display inline-block
        position relative
        padding 0 .4375rem
        line-height 1.875rem
        font-size .875rem
        color #333
        text-align center
      .tab
        margin-left 1.6875rem
      .active
        color #b4282d
        &::after
          content ''
          position absolute
          width 100%
          height .16rem
          left 0
          bottom 0
          background-color #b4282d
</style>
