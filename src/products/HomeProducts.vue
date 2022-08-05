<template>
  <Navbar/>
  <p>Este es el Home Product</p>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>

</style>