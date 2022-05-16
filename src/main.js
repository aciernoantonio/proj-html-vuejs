import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faPhone, faEnvelope, faUserGroup, faChartPie, faGaugeHigh} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faClock, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faUserGroup, faChartPie, faGaugeHigh)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
