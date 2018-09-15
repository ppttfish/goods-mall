<template>
  <div class="item">
    <item-head></item-head>
    <item-slider :itemList="itemList" :activeFlag="itemActiveFlag" @itemIndex="handleItemClick"></item-slider>
    <item-list :goodList="goodList"></item-list>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import ItemHead from './components/ItemHead.vue'
import FootBar from 'components/FootBar.vue'
import ItemSlider from './components/ItemSlider.vue'
import ItemList from './components/ItemList.vue'
import axios from 'axios'
export default {
  name: 'Item',
  data () {
    return {
      itemList: [],
      goodList: {},
      itemActiveFlag: 0
    }
  },
  components: {
    ItemHead,
    FootBar,
    ItemSlider,
    ItemList
  },
  methods: {
    handleItemClick (index) {
      this.goodList = {
        bannerImg: this.itemList[index].bannerImg,
        items: this.itemList[index].items
      },
      this.itemActiveFlag = index
    }
  },
  mounted () {
    axios.get('/item')
      .then(res => {
        this.itemList = res.data.data
        
        this.goodList = {
          bannerImg: this.itemList[0].bannerImg,
          items: this.itemList[0].items
        }
        console.log(this.goodList)
      })
  }
}
</script>

<style lang="stylus" scoped>

</style>
