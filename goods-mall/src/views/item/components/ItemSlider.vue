<template>
  <div class="item-slider wrapper" ref="wrapper">
    <ul class="item-slider-list content">
      <li v-for="(item, index) of itemList" :key="index">
        <a class="txt" href="">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'ItemSlider',
  data () {
    return {
      itemList: [
        '推荐专区', '爆品区', '秋季专区', '居家', '鞋包配饰', '服装', '电器', '洗护', '饮食',
        '餐厨', '婴童', '文体', '特色区'
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        bounce: {
          top: true,
          bottom: true,
          left: false,
          right: false
        }
      })
    })
  }
}
</script>

<style lang="stylus" scoped>
  .item-slider
    position fixed
    left 0
    top 49px
    bottom 0
    width 85px
    border-right 1px solid #f4f4f4
    overflow hidden
    background-color #fff
    .item-slider-list
      padding 25px 0
      padding-bottom 60px
      text-align center
      font-size 16px
      li
        &:not(:first-child)
          margin-top 25px
        &.active
          position relative
          &::after
            content ' '
            position absolute
            top 0
            right 0
            bottom 0
            left 0
            width 3px
            background-color #ab2b2b
          .txt
            color #ab2b2b
        .txt
          display block
          color black
          line-height 1.5
</style>
