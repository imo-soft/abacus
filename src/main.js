import { createApp } from 'vue'
import App from '@/components/App.vue'
import router from "./router"
//import VueNavigationBar from 'vue-navigation-bar';

createApp(App).use(router).mount('#app')

// App.component('vue-navigation-bar', VueNavigationBar);