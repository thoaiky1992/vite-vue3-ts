import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
export enum LAYOUT {
  DEFAULT = 'default',
  AUTH = 'auth',
  APP = 'app'
}
interface AppRouterMeta {
  meta: {
    layout: LAYOUT;
  };
}
type RouteConfig = RouteRecordRaw & AppRouterMeta;
const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login.vue'),
    meta: {
      layout: LAYOUT.AUTH
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home.vue'),
    meta: {
      layout: LAYOUT.APP
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/About.vue'),
    meta: {
      layout: LAYOUT.APP
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('@/components/Post.vue'),
    meta: {
      layout: LAYOUT.APP
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default function BootstrapRouter() {
  router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('access_token') && to.meta.layout == 'app') {
      next('/login');
    } else next();
  });
  router.afterEach(({ name }) => {
    if (name) {
      window.document.title = 'App';
    } else {
      window.document.title = 'App';
    }
  });

  return router;
}

export type routerType = typeof router;