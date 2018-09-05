<template>
  <div>
    <home-head></home-head>
    <home-swiper></home-swiper>
    <server-police></server-police>
  </div>
</template>

<script>
import homeHead from './components/Head'
import homeSwiper from './components/Swiper'
import ServerPolice from './components/ServerPolice'
export default {
  name: 'home',
  components: {
    homeHead,
    homeSwiper,
    ServerPolice
  }
}
</script>

<style lang="stylus" scoped>

</style>
