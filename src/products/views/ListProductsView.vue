<template>
  <p>Este es List Products</p>
  <div class="container">
    <div class="row d-flex justify-content-between">
      <CardProducto v-for="producto of productos" :key="producto.id" :productoCard="producto"/>
    </div>
  </div>
  <!-- <pre> {{ productos }} </pre> -->
</template>

<script>
// http://localhost:8080/products/list-products
import { mapActions, mapState } from 'vuex';
import CardProducto from '../components/CardProducto.vue'
export default {
  name: 'HomeView',
  components: {
    CardProducto
  },
  methods: {
    ...mapActions({
      products: 'getProductsApi'
    })
  },
  computed: {
    ...mapState(['productos'])
  },
  created() {
    this.products();
  }
}
</script>

<style>

</style>