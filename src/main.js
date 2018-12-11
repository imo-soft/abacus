// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import NavBar from '@/components/NavBar'
import '@/assets/style.css'

import runtime from 'serviceworker-webpack-plugin/lib/runtime'
if ('serviceWorker' in navigator) {
  runtime.register();
}
import Swal from 'sweetalert2';


//Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content')
Vue.config.productionTip = false

new Vue({
  router,
  template: `
	  <div id="app" class="container">
	    <nav-bar></nav-bar>  
	    <router-view/>
	  </div>
  `,
  components: {
    NavBar
  }
}).$mount('#app') 
