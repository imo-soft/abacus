import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import About from '@/components/About'
import Sabiranje from '@/components/Sabiranje'
import Sabiranje1 from '@/components/Sabiranje_nivo1'
import Sabiranje2 from '@/components/Sabiranje_nivo2'
import Sabiranje3 from '@/components/Sabiranje_nivo3'
import Sabiranje4 from '@/components/Sabiranje_nivo4'
import Oduzimanje from '@/components/Oduzimanje'
import Oduzimanje1 from '@/components/Oduzimanje_nivo1'
import Oduzimanje2 from '@/components/Oduzimanje_nivo2'
import Oduzimanje3 from '@/components/Oduzimanje_nivo3'
import Oduzimanje4 from '@/components/Oduzimanje_nivo4'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '', name: 'Dashboard', component: Dashboard },
		{ path: '/about', name: 'About', component: About },
		{ path: '/sabiranje', name: 'Sabiranje', component: Sabiranje },
		{ path: '/sabiranje1', name: 'Sabiranje1', component: Sabiranje1 },
		{ path: '/sabiranje2', name: 'Sabiranje2', component: Sabiranje2 },
		{ path: '/sabiranje3', name: 'Sabiranje3', component: Sabiranje3 },
		{ path: '/sabiranje3', name: 'Sabiranje4', component: Sabiranje4 },	
		{ path: '/oduzimanje', name: 'Oduzimanje', component: Oduzimanje },
		{ path: '/oduzimanje1', name: 'Oduzimanje1', component: Oduzimanje1 },
		{ path: '/oduzimanje2', name: 'Oduzimanje2', component: Oduzimanje2 },
		{ path: '/oduzimanje3', name: 'Oduzimanje3', component: Oduzimanje3 },
		{ path: '/oduzimanje4', name: 'Oduzimanje4', component: Oduzimanje4 },
		//{ path: '*', name: 'Dashboard', component: Dashboard },
	]
})
