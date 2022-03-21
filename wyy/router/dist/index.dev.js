"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _GeShou = _interopRequireDefault(require("../pages/songs/GeShou"));

var _ShiPing = _interopRequireDefault(require("../pages/video/ShiPing"));

var _DianTai = _interopRequireDefault(require("../pages/DianTai"));

var _ShoucanggeQu = _interopRequireDefault(require("../pages/ShoucanggeQu"));

var _PaihangBang = _interopRequireDefault(require("../pages/PaihangBang"));

var _FaxianYy = _interopRequireDefault(require("../pages/FaxianYy"));

var _login = _interopRequireDefault(require("../pages/login"));

var _ShiPingAll = _interopRequireDefault(require("../pages/video/ShiPingAll"));

var _videoPlay = _interopRequireDefault(require("../pages/video/videoPlay"));

var _ShiPingMv = _interopRequireDefault(require("../pages/video/ShiPingMv"));

var _MvFenlei = _interopRequireDefault(require("../pages/video/MvFenlei"));

var _SongsFenlei = _interopRequireDefault(require("../pages/songs/SongsFenlei"));

var _GeShouXq = _interopRequireDefault(require("../pages/songs/GeShouXq"));

var _GeDanxq = _interopRequireDefault(require("../pages/GeDanxq"));

var _GeShouDq = _interopRequireDefault(require("../pages/songs/GeShouDq"));

var _GeShouJs = _interopRequireDefault(require("../pages/songs/GeShouJs"));

var _GeShouMv = _interopRequireDefault(require("../pages/songs/GeShouMv"));

var _meiriTJ = _interopRequireDefault(require("../pages/meiriTJ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 该文件专门用于创建整个应用的路由器
//引入组件
//创建并暴露一个路由器
var _default = new _vueRouter["default"]({
  routes: [{
    //主页默认显示路由
    path: '*',
    redirect: '/FaxianYy'
  }, {
    path: '/GeShou',
    component: _GeShou["default"],
    redirect: {
      path: '/GeShou/SongsFenlei',
      query: {
        area: -1,
        types: -1
      }
    },
    children: [{
      name: 'SongsFenlei',
      path: 'SongsFenlei',
      component: _SongsFenlei["default"]
    }]
  }, {
    path: '/ShiPing',
    component: _ShiPing["default"],
    redirect: '/ShiPing/ShiPingMv',
    children: [{
      path: 'ShiPingAll',
      component: _ShiPingAll["default"]
    }, {
      path: 'ShiPingMv',
      component: _ShiPingMv["default"],
      redirect: {
        path: '/ShiPing/ShiPingMv/MvFenlei',
        query: {
          id: '001',
          type: '内地'
        }
      },
      children: [{
        name: 'MvFenlei',
        path: 'MvFenlei',
        component: _MvFenlei["default"]
      }]
    }]
  }, {
    path: '/Login',
    name: 'name',
    component: _login["default"]
  }, {
    path: '/DianTai',
    component: _DianTai["default"]
  }, {
    path: '/ShoucanggeQu',
    component: _ShoucanggeQu["default"]
  }, {
    path: '/PaihangBang',
    component: _PaihangBang["default"]
  }, {
    path: '/FaxianYy',
    component: _FaxianYy["default"]
  }, {
    path: '/videoPlay',
    component: _videoPlay["default"]
  }, {
    path: '/GeShouXq',
    component: _GeShouXq["default"],
    redirect: '/GeShouXq/GeShouDq',
    children: [{
      path: 'GeShouDq',
      component: _GeShouDq["default"]
    }, {
      path: 'GeShouJs',
      component: _GeShouJs["default"]
    }, {
      path: 'GeshouMv',
      component: _GeShouMv["default"]
    }]
  }, {
    path: '/GeDanxq',
    component: _GeDanxq["default"]
  }, {
    path: '/meiriTJ',
    component: _meiriTJ["default"]
  }]
});

exports["default"] = _default;