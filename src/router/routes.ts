
import { blankLayoutRoutes } from '@/router/BlankLayoutRoutes';
import { workbenchRoutes } from '@/router/WorkbenchRoutes';

export const routes = [
  ...blankLayoutRoutes,
  {
    name: 'index',
    path: '/',
    redirect: '/workbench',
    component: () => import(/* webpackChunkName: 'menu' */ '@/layout/WorkbenchLayout.vue'),
    children: [
      ...workbenchRoutes,
    ],
  },
];

