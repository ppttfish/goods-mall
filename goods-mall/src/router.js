import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Cart from './views/cart/Cart.vue'
import User from './views/user/User.vue'
import Item from './views/item/Item.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'user',
      // component: () => import('./views/user/User.vue')
      component: User
    },
    {
      path: '/item',
      name: 'item',
      component: Item
    }
  ]
})
