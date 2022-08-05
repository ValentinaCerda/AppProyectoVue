<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <form @submit.prevent="registroUsuario({email: email, password: password})">

          <div class="mb-3">
            <label for="exampleInputEmail" class="form-label">Ingrese su correo</label>
            <input type="email" class="form-control" id="exampleInputEmail" v-model="email">
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword" class="form-label">Ingrese su clave</label>
            <input type="password" class="form-control" id="exampleInputPassword" v-model="password">
          </div>

          <button type="submit" class="btn btn-primary">Acceder</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: { //aqui van las acciones
    ...mapActions(['registroUsuario'])
  }
}
</script>

<style>

</style>