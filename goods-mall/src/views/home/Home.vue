<template>
  <div>
    <home-head></home-head>
    <home-swiper></home-swiper>
    <server-police></server-police>
    <recomman-goods></recomman-goods>
    <new-goods></new-goods>
    <foot-bar></foot-bar>
    <goods-list></goods-list>
  </div>
</template>

<script>
import homeHead from './components/Head'
import homeSwiper from './components/Swiper'
import ServerPolice from './components/ServerPolice'
import RecommanGoods from './components/RecommanGoods'
import NewGoods from './components/NewGoods'
import FootBar from 'components/FootBar'
import GoodsList from './components/GoodsList'
export default {
  name: 'home',
  components: {
    homeHead,
    homeSwiper,
    ServerPolice,
    RecommanGoods,
    NewGoods,
    FootBar,
    GoodsList
  }
}
</script>

<style lang="stylus" scoped>

</style>
