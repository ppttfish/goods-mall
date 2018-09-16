<template>
  <div class="module-botton-style">
    <div class="recommand-head">
      <router-link to="">
        品牌制造商直供
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou"></use>
        </svg>
      </router-link>
    </div>
    <div class="recommand-goods">
      <ul class="recommand-goods-list">
        <li class="goods" v-for="(item, index) of goodsList" :key="index">
          <div class="goods-wrapper">
            <router-link to="/">
              <div class="content">
                <h4 class="title">{{ item.name }}</h4>
                <h4>
                  {{ item.price }}
                  <span>元起</span>
                </h4>
              </div>
              <div>
                <img :src="item.url" alt="">
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  data () {
    return {
      goodsList: [
        {
          name: '海外制造商',
          price: '9.9',
          url: 'http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65'
        },
        {
          name: 'CK制造商',
          price: '25',
          url: 'http://yanxuan.nosdn.127.net/5aecffba9202b1fa956758dfbcd65b85.png?imageView&thumbnail=355x0&quality=65'
        },
        {
          name: '新秀丽制造商',
          price: '159',
          url: 'http://yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png?imageView&thumbnail=355x0&quality=65'
        },
        {
          name: 'Nine West制造商',
          price: '209',
          url: 'http://yanxuan.nosdn.127.net/cc056d931b009298769d65b94175d696.png?imageView&thumbnail=355x0&quality=65'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/common/common.styl'
  .recommand-head
    padding 1rem 0
    text-align center
    a
      font-size 1rem
      color #333
  .recommand-goods
    .recommand-goods-list
      padding 0 .3125rem
      text-align center
      .goods
        display inline-block
        position relative
        width 49%
        height 7.5rem
        margin-bottom .3125rem
        background-color #f4f4f4
        .good-wrapper
          overflow: hidden
          height: 0
          padding-bottom: 64%
        &:nth-child(odd)
          margin-right .3125rem
        img
          max-width 100%
          max-height 100%
        .content
          position absolute
          left 0
          top 0
          padding-left .3125rem
          padding-top .625rem
          text-align left
          font-size .9375rem
          color #333
          span
            font-size .8125rem
</style>
