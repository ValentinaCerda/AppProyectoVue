<template>
<div class="mt-2 card" style="width: 19rem">
  <img class="mt-2 card-img-top" :src="productoCard.image" alt="img producto">
  <div class="card-body">
    <h5 class="mt-1 card-title text-center"> {{productoCard.title}} </h5>
  </div>
  <span class="d-block fw-bold text-center"> ${{ Intl.NumberFormat().format(productoCard.precio)}} </span>
    <router-link class="btn btn-info mb-2 mt-2" :to="`/products/${productoCard.id}`">Ir a producto</router-link>
</div>
</template>

<script>
export default {
  props: {
    productoCard: Object
  }
}
</script>

<style>

</style>