<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <form @submit.prevent="loginUsuario({email: email, password: password})">

          <div class="mb-3">
            <label for="InputEmail" class="form-label">Ingrese su correo</label>
            <input type="email" class="form-control" id="InputEmail" v-model="email">
          </div>

          <div class="mb-3">
            <label for="InputPassword" class="form-label">Ingrese su clave</label>
            <input type="password" class="form-control" id="InputPassword" v-model="password">
          </div>

          <button type="submit" class="btn btn-success">Acceder</button>
          <router-link class="btn btn-info mx-4" :to="`/register`">Registrar</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: { //aqui van las acciones
    ...mapActions(['loginUsuario'])
  }
}
</script>

<style>

</style>