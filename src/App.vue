<template>
  <div id="app">
    <input type="text" v-model.trim="t1" @keyup="get()" placeholder="请输入需要查询的信息">
    <ul v-show="showList">
      <li v-for="(value,$index) in myData" :class="{gray:$index==now}" v-html="value.newValue" v-on:click.left="clickItem(value)">
      </li>
    </ul>
    <p v-show="!myData.length">暂无数据...</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        myData: [],
        t1: '',
        now: -1,
        showList: false
      }
    },
    methods: {
      clickItem: function ( value ) {
        this.t1 = value.oldValue;
        this.showList = false;
      },
      get: function () { //搜狗版
        var vm = this;
        vm.showList = true;
        window.sogou = {
          sug: function ( data ) {
            var arr = data[ 1 ];
            arr.forEach( function ( val, i ) {
              if ( val.indexOf( vm.t1 ) > -1 ) {
                arr[ i ] = {
                  oldValue: val,
                  newValue: [ vm.t1, '<b>', val.slice( val.indexOf( vm.t1 ) + vm.t1.length ), '</b>' ].join( '' )
                }
              } else {
                arr[ i ] = {
                  oldValue: val,
                  newValue: val
                }
              }
            } );

            vm.myData = data[ 1 ];
          }
        }

        vm.$http.jsonp( 'https://www.sogou.com/suggnew/ajajjson', {
          params: {
            key: vm.t1,
            type: 'web'
          }
        }, {
          jsonp: 'cb'
        } ).then( function ( res ) {
          console.log( 'success' )
        }, function () {} );
      }

    }

  }
</script>

<style scoped>
  input {
    height: 30px;
    width: 300px;
    font-size: 24px;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    background: #888;
  }
  
  ul>li {
    cursor: pointer ;
    height: 30px;
    border: 1px solid #666;
  }
</style>