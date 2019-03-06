<template>
  <div class="topic">
    <topic-head></topic-head>
    <topic-swiper></topic-swiper>
  </div>
</template>

<script>
import TopicHead from 'components/UserHead.vue'
import TopicSwiper from './components/TopicSwiper.vue'

export default {
  name: 'Topic',
  components: {
    TopicHead,
    TopicSwiper
  }
}
</script>

<style>

</style>
