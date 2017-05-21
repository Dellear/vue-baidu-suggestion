<template>
  <div style="color:red;">{{ counter }}</div>
</template>

<script>
  export default {
    computed: {
      counter () {
        return this.$store.state.counter + 55;
      }
    }
  }
</script>

<style>
</style>