import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$myModule = null

new Vue({
  render: h => h(App),
}).$mount('#app')
