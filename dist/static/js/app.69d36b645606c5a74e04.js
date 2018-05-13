webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(7)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  "data-v-6328b370",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            myData: [],
            searchVal: "",
            selected: -1,
            showList: false
        };
    },
    methods: {
        clickItem: function clickItem(value) {
            this.searchVal = value.oldValue;
            this.showList = false;
        },
        get: function get($event) {
            if ([13, 37, 38, 39, 40].indexOf($event.which) > -1) {
                return;
            }
            var vm = this;
            vm.showList = true;
            vm.selected = -1;
            window.baidu = {
                sug: function sug(data) {
                    var arr = data.s;
                    arr.forEach(function (val, i) {
                        if (val.indexOf(vm.searchVal) > -1) {
                            arr[i] = {
                                oldValue: val,
                                newValue: [vm.searchVal, "<b>", val.slice(val.indexOf(vm.searchVal) + vm.searchVal.length), "</b>"].join("")
                            };
                        } else {
                            arr[i] = {
                                oldValue: val,
                                newValue: val
                            };
                        }
                    });

                    vm.myData = data.s;
                }
            };

            vm.$http.jsonp("http://suggestion.baidu.com/su", {
                params: {
                    wd: vm.searchVal
                }
            }, {
                jsonp: "cb"
            }).then(function (res) {
                console.log("success");
            }, function () {});
        },
        downSelect: function downSelect() {
            if (!this.myData.length || !this.showList) {
                return;
            }
            if (this.selected < this.myData.length - 1) {
                this.selected++;
            } else {
                this.selected = 0;
            }
        },
        upSelect: function upSelect() {
            if (!this.myData.length || !this.showList) {
                return;
            }
            if (this.selected > 0) {
                this.selected--;
            } else {
                this.selected = this.myData.length - 1;
            }
        },
        enterEvent: function enterEvent() {
            if (this.showList && this.selected !== -1) {
                this.searchVal = this.myData[this.selected].oldValue;
                this.selected = -1;
                this.showList = false;
                this.openLink();
            } else if (!this.showList) {
                this.openLink();
            }
        },
        openLink: function openLink() {
            if (!this.searchVal) {
                return;
            }
            window.open("https://www.baidu.com/s?wd=" + this.searchVal);
        }
    }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BaiduSug__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BaiduSug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_BaiduSug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_index_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__css_index_css__);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue_resource__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  template: '<BaiduSug/>',
  components: { BaiduSug: __WEBPACK_IMPORTED_MODULE_1__components_BaiduSug___default.a }
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "baiduSug"
    }
  }, [_c('div', {
    staticClass: "logo"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.searchVal),
      expression: "searchVal",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入需要查询的信息"
    },
    domProps: {
      "value": (_vm.searchVal)
    },
    on: {
      "keyup": function($event) {
        _vm.get($event)
      },
      "keydown": [function($event) {
        if (!('button' in $event) && $event.keyCode !== 38) { return null; }
        _vm.upSelect()
      }, function($event) {
        if (!('button' in $event) && $event.keyCode !== 40) { return null; }
        _vm.downSelect()
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.enterEvent()
      }],
      "click": function($event) {
        _vm.showList = true
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchVal = $event.target.value.trim()
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "type": "button",
      "name": "",
      "id": "",
      "value": "百度一下"
    },
    on: {
      "click": function($event) {
        _vm.openLink()
      }
    }
  }), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showList),
      expression: "showList"
    }]
  }, _vm._l((_vm.myData), function(value, $index) {
    return _c('li', {
      key: $index,
      class: {
        select: $index == _vm.selected
      },
      domProps: {
        "innerHTML": _vm._s(value.newValue)
      },
      on: {
        "click": function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) { return null; }
          if ('button' in $event && $event.button !== 0) { return null; }
          _vm.clickItem(value)
        },
        "mousemove": function($event) {
          _vm.selected = $index
        }
      }
    })
  })), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.myData.length),
      expression: "!myData.length"
    }]
  }, [_vm._v("暂无数据...")])])
},staticRenderFns: []}

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[6]);