<template>
  <div>
    <home-head></home-head>
    <home-swiper></home-swiper>
    <server-police></server-police>
    <recomman-goods></recomman-goods>
  </div>
</template>

<script>
import homeHead from './components/Head'
import homeSwiper from './components/Swiper'
import ServerPolice from './components/ServerPolice'
import RecommanGoods from './components/RecommanGoods'
export default {
  name: 'home',
  components: {
    homeHead,
    homeSwiper,
    ServerPolice,
    RecommanGoods
  }
}
</script>

<style lang="stylus" scoped>

</style>
