<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msgFromFather }}</h1>
    <div @click="onClickMe">open mouse!</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello from component a!'
    }
  },
  props: ['msgFromFather'],
  methods: {
    onClickMe () {
      console.log(this.msgFromFather);
      this.$emit('child-tell-me',this.msg);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
