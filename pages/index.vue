<template>
  <div>
    <h1>jhjhjh</h1>
    <v-btn color="primary" flat nuxt to="/login">Log In</v-btn>
    <v-btn color="primary" flat nuxt to="/admin">Admin</v-btn>
  </div>
</template>
<script>
export default {
  computed: {
    user () {
      return (this.$store.state.auth || {}).user || null
    }
  }
}
</script>
