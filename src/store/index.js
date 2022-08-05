import router from '@/router';
import { authUser } from '@/utils/user-auth';
import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    productoObject: {},
    usuarioLogeado: null,
    usuariosApi: []
  },
  mutations: { // almacena nuevos datos de propiedad "producto" del state
    setProductos(state, payload) {
      state.productos = payload;
    },
    setProductById(state, payload) {
      state.productoObject = payload;
    },
    setUsuario(state, payload) {
      state.usuarioLogeado = payload;
    },
    setUsuariosApi(state, payload) {
      state.usuariosApi = payload;
    }
  },
  actions: { // llamados a APIs externas
    async getProductsApi({commit}) {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        console.log(data); // El arreglo de los productos 8 elementos
        commit('setProductos', data);
      } catch (error) {
        throw error;
      }
    },
    async getProductByIdApi({commit}, id) {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const data = await response.json();
        commit('setProductById', data)
      } catch (error) {
        throw error;
      }
    },
    async loginUsuario({commit}, usuario) {
      let existe;
      //console.log(usuario);
      // validaciones
      const usuarioLogeado = { // esto es redundante se puede omitir
        email: usuario.email,
        password: usuario.password
      };// hasta acá
      try {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        console.log(data) // El arreglo con el único objeto que es el usuario
        commit('setUsuariosApi', data)
        existe = data.some(user => user.email === usuarioLogeado.email && user.password === usuarioLogeado.password) // si los datos ingresados estan dentro de las propiedades del objeto va a devolver 'true'
        console.log(existe)
      } catch (error) {
        throw error
      }
      commit('setUsuario', usuarioLogeado)
      authUser(existe);
      router.push('/products')
    },
    async registroUsuario({commit}, usuario) {
      try {
        await fetch('http://localhost:3000/users',{
          method: 'POST',
          body: JSON.stringify(usuario),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        router.push('/login')
      } catch (error) {
        throw error
      }
    }
  },
  getters: {
  },
  modules: {
  }
})
