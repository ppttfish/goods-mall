<template>
  <div class="user">
    <user-head></user-head>
    <user-body></user-body>
    <user-foot></user-foot>
  </div>
</template>

<script>
import UserHead from 'components/UserHead.vue'
import UserBody from './components/UserBody.vue'
import UserFoot from './components/UserFoot.vue'
export default {
  name: 'User',
  components: {
    UserHead,
    UserBody,
    UserFoot
  }
}
</script>

<style lang="stylus" scoped>

</style>
