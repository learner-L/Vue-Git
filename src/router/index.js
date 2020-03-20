import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

/* 路由组件 */

/* 登录 */
const Login = () => import("../view/login/login");
const Enter = () => import ("../view/login/enter");
const Sign = () => import("../view/login/sign");
const Index = () => import("../view/index/index");
const Menu = () => import("../view/menu/side-menu");
//
const Decoration = () => import ("../view/shop/decoration");
const Template = () => import ("../view/shop/template");
const AppletLive = () => import ("../view/shop/applet-live");
const Guide = () => import ("../view/shop/distribute-guide");
const MicroPage = () => import ("../view/shop/micro-page");
const MobileCrm = () => import ("../view/shop/mobile-crm");
const Multimedia = () => import ("../view/shop/multimedia");
const Payment = () => import ("../view/shop/payment");
const PersonCenter = () => import ("../view/shop/person-center");
const PhotoGallery = () => import ("../view/shop/photo-gallery");
const SiteManage = () => import ("../view/shop/site-manage");
const WxApplet = () => import ("../view/shop/wx-applet");

let routes = [{
  path: '',
  redirect: '/login',
  meta: {}
}, {
  path: '/login',
  name: 'login',
  meta: {},
  component: Login,
  redirect: '/login/enter',
  children: [{
    path: 'enter',
    name: 'enter',
    component: Enter,
    meta: {}
  }, {
    path: 'sign',
    name: "sign",
    component: Sign,
    meta: {}
  }]
}, {
  path: '/board',
  name: 'board',
  component: Menu,
  redirect: '/board/index',
  meta: {
    title: '概览',
    icon: '',
    display: true,
  },
  children:[{
    path: 'index',
    name: 'index',
    component: Index,
    meta: {}
  }]
}, {
  path: '/shop',
  name: 'shop',
  component: Menu,
  redirect: '/shop/decoration',
  meta: {
    title: '店铺',
    icon: ''
  },
  children: [{
    path: 'decoration',
    name: 'decoration',
    component: Decoration,
    meta: {
      title: '店铺装修',
    }
  }, {
    path: 'template',
    name: 'template',
    component: Template,
    meta: {
      title: '模板市场',
    }
  }, {
    path: 'appletLive',
    name: 'appletLive',
    component: AppletLive,
    meta: {
      title: '微信小程序',
    }
  }, {
    path: 'guide',
    name: 'guide',
    component: Guide,
    meta: {
      title: '发布指南',
    }
  }, {
    path: 'microPage',
    name: 'microPage',
    component: MicroPage,
    meta: {
      title: '微页面',
    }
  }]
}];
let vmRouter = new VueRouter({
  mode: "history",
  routes
});
export default vmRouter;
