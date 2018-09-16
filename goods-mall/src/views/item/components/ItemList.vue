<template>
  <div class="item-list">
    <div class="list-banner-wrapper">
      <div class="list-banner">
        <img :src="goodList.bannerImg" alt="">
      </div>
    </div>
    <div class="good-list">
      <ul class="list">
        <li v-for="good of goodList.items" :key="good._id">
          <a href="">
            <div class="img-wrapper">
              <img :src="good.imgUrl">
            </div>
            <div class="name">{{ good.info }}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    goodList: Object
  }
}
</script>

<style lang="stylus" scoped>
  .item-list
    margin-left 5.375rem
    padding .9375rem .9375rem
    background-color #fff
    overflow hidden
    .list-banner-wrapper
      overflow hidden
      height 0
      margin-bottom 1.25rem
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
              width 4rem
              height 4rem
              margin auto
              img
                width 100%
                height 100%
            .name
              height 2.25rem
              font-size .875rem
              text-align center
              line-height 1.125rem
              color #333
              overflow hidden
              text-overflow ellipsis
</style>
