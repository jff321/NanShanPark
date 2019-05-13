import Vue from 'vue'
import Router from 'vue-router'
import APP from './App';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app',
      redirect: '/index',
      component: APP
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        title: '登录',
        isShowBar: false // 用于配置是否显示bar
      }
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue'),
      meta: {
        title: '首页',
        isShowBar: true // 用于配置是否显示bar
      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/order/Order.vue'),
      meta: {
        title: '订单',
        isShowBar: true // 用于配置是否显示bar
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./views/shop/Shop.vue'),
      meta: {
        title: '商场',
        isShowBar: true // 用于配置是否显示bar
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./views/mine/Mine.vue'),
      meta: {
        title: '个人中心',
        isShowBar: true // 用于配置是否显示bar
      }
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('./views/index/Activity.vue'),
      meta: {
        title: '活动',
        isShowBar: true // 用于配置是否显示bar
      }
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: () => import('./views/index/Coupon.vue'),
      meta: {
        title: '优惠券',
        isShowBar: true // 用于配置是否显示bar
      }
    },
    {
      path: '/couponDetail/:id',
      name: 'couponDetail',
      component: () => import('./views/index/CouponDetail.vue'),
      meta: {
        title: '优惠券明细',
        isShowBar: true // 用于配置是否显示bar
      }
    }
  ]
})
