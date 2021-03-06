import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faPhone, faEnvelope, faUserGroup, faChartPie, faGaugeHigh, faEllipsis, faMedal, faLock, faFilePen, faGraduationCap, faRocket, faGem, faNetworkWired, faChartSimple, faPlane, faGlobe, faInbox, faBriefcase, faXmark, faCheck, faAngleDown, faLocationDot, faAngleRight, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faClock, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faUserGroup,
  faChartPie, faGaugeHigh, faEllipsis, faMedal, faLock, faFilePen, faGraduationCap,
  faRocket, faBriefcase, faGem, faNetworkWired, faChartSimple, faPlane, faGlobe, faInbox,
  faXmark, faCheck, faAngleDown, faLocationDot, faAngleRight, faArrowUp
  )
Vue.component('font-awesome-icon', FontAwesomeIcon)

const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
