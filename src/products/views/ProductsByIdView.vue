<template>
  <pre> {{productoObject}} </pre>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  methods: {
    ...mapActions({
      productById: 'getProductByIdApi'
    })
  },
  computed: {
    ...mapState(['productoObject'])
  },
  created() {
    this.productById(this.$route.params.id)
  }
}
</script>

<style>

</style>