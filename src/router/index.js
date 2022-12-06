import VueRouter from 'vue-router'
import Settings from "../view/Settings";

Vue.use(VueRouter)

const router = () => {
	const r = 
	 new VueRouter({
		mode: 'hash',
		routes: [
			{
				path: '/',
				name: 'Settings',
				component: Settings,
				props: true,
				children: []
			},
		],
		
	});
	return r
}

export default router