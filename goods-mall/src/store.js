import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageFlag: 'home'
  },
  mutations: {
    pageChange (state, flag) {
      state.pageFlag = flag
    }
  },
  actions: {

  }
})
