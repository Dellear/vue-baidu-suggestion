<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input v-model="newItem" @keyup.enter="addNew" />
    <ul>
      <li v-for="item in items" v-bind:class="{finished : item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
      
    </ul>
    <p>Child tell me:{{ childWords }}</p>
    <component-a msgFromFather="you die!" 
      @child-tell-me="listenToMyBoy"></component-a>
  </div>
</template>

<script>
  import Store from './store';
  import ComponentA from './components/componentA';
  export default {
    data() {
      return {
        title: `this is a todo list`,
        items: Store.fetch(),
        newItem:'',
        childWords:''
      }
    },
    components:{ ComponentA },
    watch: {
      items: {
        handler: function (val ,oldVal) {
          Store.save(val);
        },
        deep: true
      }
    },
    methods: {
      toggleFinish: function (item) {
      	item.isFinished = !item.isFinished;
      },
      addNew: function () {
      	this.items.unshift({
      	  label: this.newItem,
      	  isFinished: false
      	});
      	this.newItem = '';
      },
      listenToMyBoy (msg) {
        this.childWords = msg;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .img {
    background: url(assets/201272522441773.gif) no-repeat center;
  }
  .finished {
    text-decoration: line-through;
  }
</style>