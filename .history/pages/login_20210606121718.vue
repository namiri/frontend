<template>
  <v-layout justify-center align-center>
    <v-card class='elevation-10' style='flex: 0 1 400px'>
      <v-card-title class='headline'>Log In</v-card-title>
      <v-card-text>
        <v-form @submit.prevent='submit'>
          <v-alert v-if='alert' :type='alert.type' value='true'>{{
            alert.message
          }}</v-alert>
          <v-text-field label='mobile' v-model='mobile' />
          <v-text-field label='Password' v-model='password' type='password' />
          <v-btn type='submit' :loading='loading' :disabled='loading'
            >Log In</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  layout: 'fullscreen',
  data () {
    return {
      mobile: '',
      password: '',
      alert: null,
      loading: false
    }
  },
  methods: {
    submit () {
      this.alert = null
      this.loading = true
      this.$store.dispatch('auth/login', {
        mobile: this.mobile,
        password: this.password
      }).then(result => {
        console.log('res', result)
        // this.alert = { type: 'success', message: result.data.message }
        this.loading = false
        this.$router.push('/main')
      }).catch(error => {
        this.loading = false
        if (error.response && error.response.data) {
          this.alert = { type: 'error', message: error.response.data.message || error.reponse.status }
        }
      })
    }
  }
}
</script>
