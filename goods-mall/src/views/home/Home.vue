<template>
  <div>
    <home-head></home-head>
    <home-swiper></home-swiper>
    <server-police></server-police>
    <recomman-goods></recomman-goods>
    <new-goods></new-goods>
  </div>
</template>

<script>
import homeHead from './components/Head'
import homeSwiper from './components/Swiper'
import ServerPolice from './components/ServerPolice'
import RecommanGoods from './components/RecommanGoods'
import NewGoods from './components/NewGoods'
export default {
  name: 'home',
  components: {
    homeHead,
    homeSwiper,
    ServerPolice,
    RecommanGoods,
    NewGoods
  }
}
</script>

<style lang="stylus" scoped>

</style>
