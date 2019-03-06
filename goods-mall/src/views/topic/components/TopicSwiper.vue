<template>
  <div class="topic-swiper">
    <swiper :options="swiperOption">
      <swiper-slide class="my-swiper" v-for="(item, index) in swiperList" :key="index">
        <a class="swiper-img" href="">
          <img :src="item.imgUrl" alt="">
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'TopicSwiper',
  data () {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
      },
      swiperList: [
        {
          imgUrl: 'http://yanxuan.nosdn.127.net/3908de6e43f03e4f88f3ab53a5e8e0b9.jpg?imageView&quality=75'
        },
        {
          imgUrl: 'http://yanxuan.nosdn.127.net/199a5f4ab6c16b908b7ccb0746170183.jpg?imageView&quality=75'
        },
        {
          imgUrl: 'http://yanxuan.nosdn.127.net/9e3be00bb872d8e250b2eecf5ca65243.jpg?imageView&quality=75'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .topic-swiper
    .my-swiper
      width 320px !important
      .swiper-img
        img
          width 100%
          height 100%
</style>
