import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $api from './api/index'
Vue.config.productionTip = false
Vue.use($api)
// import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

import  {Button,NavBar,Tabbar,TabbarItem,Swipe,SwipeItem,Lazyload,Search,Grid,GridItem,image,Divider} from 'vant'
Vue.use(image).use(Divider).use(Button).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Search).use(Grid).use(GridItem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
