<template>
  <div id="app">
    <p>{{ count }}</p>
    <p>
      <button v-on:click="increment">+</button>
      <button v-on:click="decrement">-</button>
    </p>
    <counter></counter>
  </div>
</template>

<script>
  import counter from './components/Counter';
  
  export default {
    computed: {
      count () {
        return store.state.count;
      }
    },
    components:{ counter },
    methods: {
      increment () {
        store.commit('increment');
      },
      decrement () {
        store.commit('decrement');
      }
    }
  }
</script>

<style>
</style>