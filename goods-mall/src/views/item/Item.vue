<template>
  <div class="item">
    <item-head></item-head>
    <item-slider></item-slider>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import ItemHead from './components/ItemHead.vue'
import FootBar from 'components/FootBar.vue'
import ItemSlider from './components/ItemSlider.vue'
export default {
  name: 'Item',
  components: {
    ItemHead,
    FootBar,
    ItemSlider
  }
}
</script>

<style lang="stylus" scoped>

</style>
