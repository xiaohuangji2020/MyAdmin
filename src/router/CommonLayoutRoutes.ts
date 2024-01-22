export const commonLayoutRoutes = [
	{
		path: '/workbench',
		name: 'workbench',
		meta: {
			title: 'workbench',
		},
		component: () => import('@/views/workbench/WorkbenchIndex.vue'),
	},
];

