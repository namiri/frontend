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
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>