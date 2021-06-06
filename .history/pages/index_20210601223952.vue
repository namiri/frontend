<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      </div>
      <v-card>
       <v-btn color="primary" flat nuxt to="/login">Log In</v-btn>
        <v-btn color="primary" flat nuxt to="/admin">Admin</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<sc
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
        this.alert = { type: 'success', message: result.data.message }
        this.loading = false
        this.$router.push('/index')
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