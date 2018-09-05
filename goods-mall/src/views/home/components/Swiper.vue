<template>
  <div class="home-swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(img, index) in imgList" :key="index">
        <img :src="img.url" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      },
      swiperSlides: [1, 2, 3, 4, 5],
      imgList: [
        {
          url: 'https://yanxuan.nosdn.127.net/58568bc29efac66da5419b040abe990c.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          url: 'https://yanxuan.nosdn.127.net/f02e973bd0673b30ee30e08918f9aa5c.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          url: 'https://yanxuan.nosdn.127.net/a7e05880a9b809b88c4228504ff7d1eb.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          url: 'https://yanxuan.nosdn.127.net/06b6c3d06bd35bcde539271aa96214c6.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          url: 'https://yanxuan.nosdn.127.net/5bd71fd82188ac7b43fe4d705227a9ca.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          url: 'https://yanxuan.nosdn.127.net/af7d906e174cb160ab5a979310aa223d.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          url: 'https://yanxuan.nosdn.127.net/ed14da36343329e354641bb7f15c2ace.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          url: 'https://yanxuan.nosdn.127.net/36a7d266892601faeb8225ff088828d3.jpg?imageView&quality=75&thumbnail=750x0'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-swiper >>> .swiper-pagination-bullet
    background-color #fff
    width 22px
    height 3px
    border-radius 0
  .home-swiper
    overflow hidden
    width 100%
    height 0
    background-color #eee
    padding-bottom 53.333%
    img
      width 100%
</style>
