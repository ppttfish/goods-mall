<template>
  <div class="item-list">
    <div class="list-banner-wrapper">
      <div class="list-banner">
        <img src="http://yanxuan.nosdn.127.net/e7e5e94d7bb43b6b9043fee3c1da851d.png?imageView&thumbnail=0x196&quality=75" alt="">
      </div>
    </div>
    <div class="good-list">
      <ul class="list">
        <li v-for="(good, index) of goodList" :key="index">
          <a href="">
            <div class="img-wrapper">
              <img :src="good.img">
            </div>
            <div class="name">{{ good.name }}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  data () {
    return {
      goodList: [
        {
          name: '配件第2件半价',
          img: 'http://yanxuan.nosdn.127.net/70082b1f2a4284939f3a656ffcc3af05.png?imageView&quality=85&thumbnail=144x144'
        },
        {
          name: '配件特价低至5折',
          img: 'http://yanxuan.nosdn.127.net/a644471a88c86b8c3b43ce671cd90435.png?imageView&quality=85&thumbnail=144x144'
        },
        {
          name: '配件2件6折',
          img: 'http://yanxuan.nosdn.127.net/e171f0facdf45e34ac7f17982112e088.png?imageView&quality=85&thumbnail=144x144'
        },
        {
          name: '饮食低至35%off',
          img: 'http://yanxuan.nosdn.127.net/bdfbc49234d83f3fec87387a7c663807.png?imageView&quality=85&thumbnail=144x144'
        },
        {
          name: '零食每满159减30',
          img: 'http://yanxuan.nosdn.127.net/fb64cdf3dd9acfe77c3c26f577c412fe.png?imageView&quality=85&thumbnail=144x144'
        },
        {
          name: '婴童服饰2件5折',
          img: 'http://yanxuan.nosdn.127.net/8057ab62c70de1f9782bbd9c47e36d00.png?imageView&quality=85&thumbnail=144x144'
        },
        {
          name: '个护仪器满199减30',
          img: 'http://yanxuan.nosdn.127.net/e117d6d9bbbfa86518c08be4ba73e38d.png?imageView&quality=85&thumbnail=144x144'
        },
        {
          name: '中秋好礼',
          img: 'http://yanxuan.nosdn.127.net/7065686880342e583d2950204a30fd14.png?imageView&quality=85&thumbnail=144x144'
        },
        {
          name: '丁磊的好货推荐',
          img: 'http://yanxuan.nosdn.127.net/7e71b041939a8785c038484dba48a500.png?imageView&quality=85&thumbnail=144x144'
        },
        {
          name: '999+好评',
          img: 'http://yanxuan.nosdn.127.net/0822dcdac7803df99a4f428115ba7640.png?imageView&quality=85&thumbnail=144x144'
        },
        {
          name: '北欧极简主义',
          img: 'http://yanxuan.nosdn.127.net/9f30de788a9fae660e9d186cab9f4c15.png?imageView&quality=85&thumbnail=144x144'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item-list
    margin-left 86px
    padding 15px 15px
    background-color #fff
    overflow hidden
    .list-banner-wrapper
      overflow hidden
      height 0
      margin-bottom 20px
      padding-bottom 37%
      background-color #ccc
      .list-banner
        img
          width 100%
          height 100%
    .good-list
      .list
        li
          float left
          width 33.33%
          vertical-align top
          a
            .img-wrapper
              width 80%
              height 80%
              margin auto
              img
                width 100%
                height 100%
            .name
              height 36px
              font-size 14px
              text-align center
              line-height 18px
              color #333
              overflow hidden
              text-overflow ellipsis
</style>
