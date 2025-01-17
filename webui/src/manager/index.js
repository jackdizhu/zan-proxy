import Vue from 'vue'
import App from './App'
import router from './router'
import DataCenter from 'vue-data-center'
import 'regenerator-runtime/runtime'
import './iconfont.css'
import './index.pcss'
import { helpers as helpersPlugin } from '../utils/plugins'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(DataCenter)
Vue.use(helpersPlugin)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
document.addEventListener('keydown', function (e) {
  if ((event.ctrlKey || event.metaKey) && event.which == 83) {
    // Save Function
    event.preventDefault()
    return false
  }
}, true)

