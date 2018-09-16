<template>
  <div class="item-slider wrapper" ref="wrapper">
    <ul class="item-slider-list content">
      <li
      v-for="(item, index) of itemList"
      :key="item.id"
      :class="{ active: activeFlag === index}"
      >
        <a class="txt" @click="hanldItemClick(index)">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'ItemSlider',
  props: {
    itemList: Array,
    activeFlag: Number
  },
  methods: {
    hanldItemClick (index) {
      this.$emit('itemIndex', index)
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
    top 3.0625rem
    bottom 0
    width 5.3125rem
    border-right 1px solid #f4f4f4
    overflow hidden
    background-color #fff
    .item-slider-list
      padding 1.5625rem 0
      padding-bottom 3.75rem
      text-align center
      font-size 1rem
      li
        &:not(:first-child)
          margin-top 1.5625rem
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
          color #333
          line-height 1.8
</style>
