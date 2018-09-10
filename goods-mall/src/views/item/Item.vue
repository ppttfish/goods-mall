<template>
  <div class="item">
    <item-head></item-head>
    <item-slider></item-slider>
    <item-list></item-list>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import ItemHead from './components/ItemHead.vue'
import FootBar from 'components/FootBar.vue'
import ItemSlider from './components/ItemSlider.vue'
import ItemList from './components/ItemList.vue'
export default {
  name: 'Item',
  components: {
    ItemHead,
    FootBar,
    ItemSlider,
    ItemList
  }
}
</script>

<style lang="stylus" scoped>

</style>
