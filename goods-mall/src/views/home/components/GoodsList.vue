<template>
  <div class="home-goods-list">
    <h3 class="goods-title">居家好物</h3>
    <ul class="goods-list">
      <li v-for="(good, index) of goodsList" :key="index" class="good">
        <a href="">
          <div class="good-wrapper">
            <div class="good-detail">
              <img v-lazy="good.img" alt="">
              <div class="good-tips">{{ good.info }}</div>
            </div>
          </div>
          <div class="good-name">{{ good.name }}</div>
          <div class="good-price">
            <span>￥</span>
            <span>{{ good.price }}</span>
          </div>
        </a>
      </li>
      <li class="good more-good">
        <a href="">
          <span>更多居家好物</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou2"></use>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeGoods',
  data () {
    return {
      goodsList: [
        {
          name: '全期猫粮 1.8KG',
          info: '优质食材，薯类膨化多肉配方',
          img: 'http://yanxuan.nosdn.127.net/aa68d160af714a4df687227bbdf89768.png?imageView&quality=65&thumbnail=330x330',
          price: '88'
        },
        {
          name: '3D透气高端弹簧床垫',
          info: '仅售供应商建议价的1/6',
          img: 'http://yanxuan.nosdn.127.net/2e5c458901c72ee6fce43c046a9cea53.png?imageView&quality=65&thumbnail=330x330',
          price: '3899'
        },
        {
          name: '自然光多功能触控阅读灯',
          info: '12档拟自然光源，轻薄冷峻线条',
          img: 'http://yanxuan.nosdn.127.net/2ab7b86be448341df0247b4e44fc2e3b.png?imageView&quality=65&thumbnail=330x330',
          price: '189'
        },
        {
          name: '日式水洗棉条纹四件套',
          info: '纯棉水洗感，柔软吸汗',
          img: 'http://yanxuan.nosdn.127.net/9ce754d44e3edf6ece83b2692e5efab6.jpg?imageView&quality=65&thumbnail=330x330',
          price: '299'
        },
        {
          name: '晾晒架',
          info: '铺展晾晒，多层可折叠',
          img: 'http://yanxuan.nosdn.127.net/c563eef6eacff0e0a379071dd1d3637a.png?imageView&quality=65&thumbnail=330x330',
          price: '249'
        },
        {
          name: '冬夏两用 护脊椰棕弹簧床垫',
          info: '硬度偏好者优选',
          img: 'http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330',
          price: '2099'
        },
        {
          name: '160*230羊毛手工地毯',
          info: '天然肌理感，厚实静音',
          img: 'http://yanxuan.nosdn.127.net/88dc5d80c6f84102f003ecd69c86e1cf.png?imageView&quality=65&thumbnail=330x330',
          price: '969'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/common/common.styl'
  .home-goods-list
    background-color #fff
    .goods-title
      line-height 3.75rem
      text-align center
      font-size 1rem
    .goods-list
      overflow hidden
      padding 0 .3125rem
      .good
        float left
        width 50%
        margin-bottom .3125rem
        padding 0 .1875rem
        box-sizing border-box
        a
          .good-wrapper
            position relative
            overflow hidden
            height 0
            padding-bottom 120%
            background-color #ccc
            .good-detail
              display block
              border-radius .125rem
              background-color $goodsbg
              img
                width 100%
                height 100%
              .good-tips
                position absolute
                bottom 0
                right 0
                left 0
                padding .75rem .3125rem
                color #9F8A60
                background-color #F1ECE2
                text-overflow ellipsis
                text-align left
                font-size .75rem
                overflow hidden
                white-space nowrap
          .good-name
            margin-top .625rem
            text-align left
            font-size 16px
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
            color #333
          .good-price
            line-height 1.5
            font-size 1rem
            color #b4282d
            text-align left
      .more-good
        a
          display flex
          height 100%
          flex-direction column
          justify-content center
          align-items center
          font-size 1.125rem
          color #333
          background-color $goodsbg
          svg
            margin-top .625rem
            color #888
            font-size 2rem
</style>
