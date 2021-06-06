<template>
  <h1>jhjhjh</h1>
</template>
<script>
export default {
  computed: {
    user () { return (this.$store.state.auth || {}).user || null }
} 
}
</script>