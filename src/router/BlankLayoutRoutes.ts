// Import { RouteRecordRaw } from "vue-router"

// declare module 'vue-router' {
//   interface RouteMeta {
//     title?: string
//   }
// }

// export const blankLayoutRoutes: Array<RouteRecordRaw> = [
export const blankLayoutRoutes = [
	{
		path: '/login',
		name: 'login',
		meta: {
			title: 'login',
		},
		component: () => import(/* webpackChunkName: 'login' */ '@/views/login/LoginIndex.vue'),
	},
];

