import { createWebHistory, createRouter } from "vue-router";

const routes = [
 /*  {
    path: "/",
    name: "Home",
    component: () => import('../pages/Home-v2.vue'),
  }, */
  {
    path:'/product-details-v1-:id',
    name:'ProductDetail',
    component: () => import('../pages/ProductDetail.vue'),
    props: true
  },
  {
    path:'/product-details-v2-:id',
    name:'ProductDetail_v2',
    component: () => import('../pages/ProductDetail-v2.vue'),
    props: true
  },
  {
    path: '/item-details',
    name: 'itemDetails',
    component: () => import('../pages/ItemDetails.vue')
  },
  {
    path: '/item-details-v2',
    name: 'itemDetailsV2',
    component: () => import('../pages/ItemDetails-v2.vue')
  },
  {
    path: '/',
    name: 'explore',
    component: () => import('../pages/Explore.vue')
  },

  {
    path: '/pedido',
    name: 'pedido',
    component: () => import('../pages/Pedido.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/Register.vue')
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        left: 0,
        top: 0
      }
    }
  }
});

export default router;