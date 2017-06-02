<template>
  <div id="baiduSug">
    <div class="logo"></div>
    <input type="text" v-model.trim="t1" @keyup="get($event)" placeholder="请输入需要查询的信息" @keydown.38="upSelect()" @keydown.40="downSelect()" @keydown.enter="t1=myData[selected].oldValue,selected=-1,showList=false" @focus="showList=true" />
    <input type="button" name="" id="" value="百度一下" @click="openLink()" />
    <ul v-show="showList">
      <li v-for="(value,$index) in myData" :class="{select:$index==selected}" v-html="value.newValue" @click.left="clickItem(value)" @mousemove="selected=$index">
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
      selected: -1,
      showList: false
    }
  },
  methods: {
    clickItem: function (value) {
      this.t1 = value.oldValue;
      this.showList = false;
    },
    get: function ($event) { //百度版
      if ([13, 37, 38, 39, 40].indexOf($event.which) > -1) {  //排除上下左右和enter
        return;
      }
      var vm = this;
      vm.showList = true;
      vm.selected = -1;
      window.baidu = {
        sug: function (data) {
          var arr = data.s;
          arr.forEach(function (val, i) {
            if (val.indexOf(vm.t1) > -1) {
              arr[i] = {
                oldValue: val,
                newValue: [vm.t1, '<b>', val.slice(val.indexOf(vm.t1) + vm.t1.length), '</b>'].join('')
              }
            } else {
              arr[i] = {
                oldValue: val,
                newValue: val
              }
            }
          });

          vm.myData = data.s;
        }
      }

      vm.$http.jsonp('http://suggestion.baidu.com/su', {
        params: {
          wd: vm.t1
        }
      }, {
          jsonp: 'cb'
        }).then(function (res) {
          console.log('success')
        }, function () { });
    },
    downSelect: function () {
      if (!this.myData.length) {
        return;
      }
      if (this.selected < this.myData.length - 1) {
        this.selected++;
      } else {
        this.selected = 0;
      }

    },
    upSelect: function () {
      if (!this.myData.length) {
        return;
      }
      if (this.selected > 0) {
        this.selected--;
      } else {
        this.selected = this.myData.length - 1;
      }
    },
    openLink: function () {
      if (this.t1 === '') {
        return;
      }
      window.open('https://www.baidu.com/s?wd=' + this.t1);
    }
  }
}
</script>

<style scoped>
.logo {
  background: url(../assets/baidu_logo.png) center no-repeat;
  height: 100px;
  width: 410px;
}

input[type="text"] {
  height: 30px;
  width: 300px;
  font-size: 24px;
}

input[type="button"] {
  font-size: 20px;
  width: 100px;
  height: 34px;
  color: #fff;
  letter-spacing: 1px;
  background: #3385ff;
  outline: medium;
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  border: 0;
  padding: 0;
  cursor: pointer;
}

input[type="button"]:hover {
  background: #317ef3;
  box-shadow: 1px 1px 1px #ccc;
}

ul {
  margin: 0;
  padding: 0;
  width: 410px;
  list-style: none;
  background: #C3DCD9;
}

ul>li {
  cursor: pointer;
  height: 30px;
  border: 1px solid #666;
}

.select {
  background-color: #888;
}
</style>