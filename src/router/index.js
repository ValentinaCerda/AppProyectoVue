import { isAuth } from '@/utils/user-auth';
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
    meta: { requiresAuth: true }, // para hacer la ruta protegida
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Lógica para rutas protegidas
router.beforeEach((to, from, next) => {
  // Vamos a recorrer cada una de las rutas
  if(to.matched.some(record => record.meta.requiresAuth)) {
    let usuarioValido = false;
    console.log('Ruta Protegida');
    //const usuario = isAuth() // puede ser V o F
    //console.log(usuario)
    // Obtener info del local storage
    let auth = localStorage.getItem('isAuth');
    console.log('auth del localstorage' + auth)
    auth=='false' || auth == null ? usuarioValido = false: usuarioValido = true;
    if(!usuarioValido) { // si usuario es falso, se redirige al LOGIN
      next({path: '/login'})
    } else {
      next() // Lo dejamos pasar a los productos
    }
  } else {
    next() // Para rutas que no tengan el requiresAuth los dejamos pasar, es decir, 'next()'
  }
})

export default router