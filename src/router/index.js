import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import About from '@/components/About'
import Sabiranje from '@/components/Sabiranje'
import SabiranjeNivo from '@/components/SabiranjeNivo'
import Sabiranje3 from '@/components/Sabiranje_nivo3'
import Sabiranje4 from '@/components/Sabiranje_nivo4'
import Oduzimanje from '@/components/Oduzimanje'
import OduzimanjeNivo from '@/components/OduzimanjeNivo'
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
		{ path: '/sabiranje_nivo', name: 'SabiranjeNivo', component: SabiranjeNivo, props: true },
		{ path: '/sabiranje3', name: 'Sabiranje3', component: Sabiranje3 },
		{ path: '/sabiranje3', name: 'Sabiranje4', component: Sabiranje4 },	
		{ path: '/oduzimanje', name: 'Oduzimanje', component: Oduzimanje },
		{ path: '/oduzimanje_nivo', name: 'OduzimanjeNivo', component: OduzimanjeNivo, props: true },
		{ path: '/oduzimanje3', name: 'Oduzimanje3', component: Oduzimanje3 },
		{ path: '/oduzimanje4', name: 'Oduzimanje4', component: Oduzimanje4 },
	]
})
		// prop_title: { String, default: "Сабирање"}, 
		// prop_min_1: { Number, default: 1}, 
		// prop_max_1: { Number, default: 1}, 
		// prop_min_2: { Number, default: 1}, 
		// prop_max_2: