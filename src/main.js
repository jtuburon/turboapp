import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import VueYoutube from 'vue-youtube'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@fortawesome/fontawesome-free/css/all.css'
import 'startbootstrap-sb-admin/css/sb-admin.min.css'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueYoutube)

new Vue({
  render: h => h(App),
}).$mount('#app')
