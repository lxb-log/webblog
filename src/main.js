import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
=======
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
>>>>>>> master
}).$mount('#app')
