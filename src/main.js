import Vue from 'vue'
import { Button } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'ant-design-vue/dist/antd.css'

Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
