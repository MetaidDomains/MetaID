import {
	createRouter,
	createWebHashHistory,
	createWebHistory
} from 'vue-router';

import { pubilcUrlFun,isMobile } from '@/utils/token.js'


const routerContext =
	import.meta.globEager("./*.js");

const routes = [{
	path: `${pubilcUrlFun()}/`,
	name: 'home',
	meta: {
		auth: false,
		title: 'home',
		keepAlive: false
	},
	component: () => isMobile() ? import('/src/pages/user/phoneHome.vue'):import('/src/pages/home/home.vue')
}, 
{
	path: '/:pathMatch(.*)*',
	redirect: '/'
}];


// Object.values(routerContext).forEach(itemPath => {
// 	if (['./index.js'].includes(itemPath)) {
// 		return
// 	}
// 	console.log(itemPath)
// 	routes.push(...itemPath.default)
// })

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition && to.meta.keepAlive) {
			return savedPosition
		} else {
			return {
				top: 0
			}
		}
	},
});

export default router;
