import Vue from 'vue'
import App from './App.vue'
import router from './router'
import   from './plugins/vuetify';
import "./assets/scss/main.scss";
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
