import { type Component } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { Desktop28Regular, Settings28Regular } from '@vicons/fluent';
import type { MenuOption } from 'naive-ui';

interface MenuWithRouteItemType {
  type?: 'menu' // Menu真正的菜单，menuRoute需要存到菜单里的路由
  path?: string
  name: string
  props?: boolean | ((route: any) => object)
  meta: {
    title: string
    icon?: Component
  }
  component?: () => Promise<Component>
  children?: MenuWithRouteItemType[]
}

const workbenchMenuWithRoutes: MenuWithRouteItemType[] = [
  {
    path: '/workbench',
    name: 'workbench',
    meta: {
      title: '工作台',
      icon: Desktop28Regular,
    },
    component: () => import(/* webpackChunkName: 'workbench' */ '@/views/workbench/WorkbenchIndex.vue'),
  },
  {
    type: 'menu',
    name: 'system',
    meta: {
      title: '系统管理',
      icon: Settings28Regular,
    },
    children: [
      {
        path: '/system/user/list',
        name: 'userList',
        meta: {
          title: '用户管理',
        },
        component: () => import(/* webpackChunkName: 'user' */ '@/views/system/user/UserList.vue'),
      },
      {
        path: '/system/role/list',
        name: 'roleList',
        meta: {
          title: '角色管理',
        },
        component: () => import(/* webpackChunkName: 'role' */ '@/views/system/role/RoleList.vue'),
      },
      {
        path: '/system/permission/list',
        name: 'permissionList',
        meta: {
          title: '权限管理',
        },
        component: () => import(/* webpackChunkName: 'permission' */ '@/views/system/permission/PermissionList.vue'),
      },
    ],
  },
];

const workbenchRoutes: RouteRecordRaw[] = [];
const workbenchMenus: MenuOption[] = [];

export type Breadcrumb = {
  name: string
  path?: string
  title: string
}

function initFormat(
  menuWithRoutes: undefined | MenuWithRouteItemType[],
  menus: MenuOption[],
  breadcrumbs: Breadcrumb[]) {
  if (!menuWithRoutes) {
    return;
  }

  menuWithRoutes.forEach(item => {
    const menu: MenuOption = {
      key: item.name,
      label: item.meta.title,
      iconComponent: item.meta.icon,
    };
    menus.push(menu);
    breadcrumbs.push({
      name: item.name,
      path: item.path,
      title: item.meta.title,
    });
    if (item.type === 'menu') {
      menu.children = [];
      initFormat(item.children, menu.children, breadcrumbs);
    } else {
      const tmp = { ...item };
      delete tmp.meta.icon;
      tmp.meta.breadcrumbs = [...breadcrumbs];
      workbenchRoutes.push(tmp as RouteRecordRaw);
    }

    breadcrumbs.pop();
  });
}

initFormat(workbenchMenuWithRoutes, workbenchMenus, []);

export { workbenchRoutes, workbenchMenus };
