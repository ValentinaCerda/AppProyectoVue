import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {name: 'login'} // redirección por el nombre de la ruta
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
        path: '',
        name: 'list-products',
        component: () => import(/* webpackChunkName: "lista-productos"*/ '../products/views/ListProductsView.vue')
      },
      {
        path: ':id', // ":" (dos puntos), son obligatorios cuando se quiere acceder a dato de URL
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