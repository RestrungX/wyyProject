"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _router = _interopRequireDefault(require("../router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//引入Vue
//引入App
//引入VueRouter
//引入路由器
_vue["default"].use(_elementUi["default"]); //关闭Vue的生产提示


_vue["default"].config.productionTip = false; //应用插件

_vue["default"].use(_vueRouter["default"]); //创建vm


new _vue["default"]({
  el: '#app',
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  beforeCreate: function beforeCreate() {
    _vue["default"].prototype.$bus = this; //安装全局事件总线
  }
});