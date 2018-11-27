import R from 'ramda'
import _ from 'lodash'
import axios from 'axios'

export const helpers = {
  install (Vue) {
    Vue.prototype.$http = axios
    Vue.prototype.$_ = _
    Vue.prototype.$R = R
  }
}
