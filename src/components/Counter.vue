<template>
  <div style="color:red;">{{ count }}</div>
</template>

<script>
  export default {
    computed: {
      count () {
        return store.state.count + 55;
      }
    }
  }
</script>

<style>
</style>