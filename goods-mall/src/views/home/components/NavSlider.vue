<template>
  <!-- <div class="nav-slider"> -->
   <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li v-for="(item, index) in swiperSlides" :key="index">
          index + {{ item }}
        </li>
      </ul>
    </div>
  <!-- </div> -->
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'NavSlider',
  data () {
    return {
      swiperOption: {
        slidesPerView: 5,
        pagination: {
            el: '.swiper-pagination'
          }
      },
      swiperSlides: ['推荐', '居家', '鞋包配饰', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区']
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  }
}
</script>

<style lang="stylus" scoped>
.nav-slider
  padding-left 10px
  padding-right 10px
  .swiper-slide
    line-height 30px
    text-align center
    font-size 16px
    color #333
  .swiper-slide-active
    color #b4282d
</style>
