import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login"*/ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register"*/ '../views/RegisterView.vue')
  },
  {
    path: '/products',
    name: 'products-app',
    component: () => import(/* webpackChunkName: "productos"*/ '../products/HomeProducts.vue'),
    children: [
      {
        path: 'list-products',
        name: 'list-products',
        component: () => import(/* webpackChunkName: "lista-productos"*/ '../products/views/ListProductsView.vue')
      },
      {
        path: ':id',
        name: 'product-id',
        component: () => import(/* webpackChunkName: "ProductoId"*/ '../products/views/ProductsByIdView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router