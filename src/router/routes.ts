
import {blankLayoutRoutes} from '@/router/BlankLayoutRoutes';
import {commonLayoutRoutes} from '@/router/CommonLayoutRoutes';

export const routes = [
	...blankLayoutRoutes,
	{
		name: 'index',
		path: '/',
		redirect: '/workbench',
		component: () => import(/* webpackChunkName: 'menu' */ '@/layout/CommonLayout.vue'),
		children: [
			...commonLayoutRoutes,
		],
	},
];

