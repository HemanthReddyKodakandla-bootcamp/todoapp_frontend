<template>
  <div class="login-form">
    <b-form @submit.prevent="loginForm">
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="username"
          type="text"
          placeholder="Enter username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          type="password"
          id="input-2"
          v-model="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: '',
      //   form: {
      //     username: '',
      //     password: '',
      //   },
    }
  },

  methods: {
    async loginForm() {
      await this.$store.dispatch('login', {
        username: this.username,
        password: this.password,
      })

      await this.$store.dispatch('getAllTodos')
    },
  },
}
</script>

<style>
</style>