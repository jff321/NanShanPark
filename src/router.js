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
        isShowBar: false // 用于配置是否显示bar
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
      path: '/appointment',
      name: 'appointment',
      component: () => import('./views/index/Appointment.vue'),
      meta: {
        title: '预约',
        isShowBar: true // 用于配置是否显示bar
      }
    },
    {
      path: '/choice',
      name: 'choice',
      component: () => import('./views/index/Choice.vue'),
      meta: {
        title: '选择预约',
        isShowBar: true // 用于配置是否显示bar
      }
    },
    {
      path: '/choiceDetail',
      name: 'choiceDetail',
      component: () => import('./views/index/ChoiceDetail.vue'),
      meta: {
        title: '预约详情',
        isShowBar: true // 用于配置是否显示bar
      }
    },
    {
      path: '/couponConfirm',
      name: 'couponConfirm',
      component: () => import('./views/index/CouponConfirm.vue'),
      meta: {
        title: '确认订单',
        isShowBar: false // 用于配置是否显示bar
      }
    },
    {
      path: '/track',
      name: 'track',
      component: () => import('./views/index/Track.vue'),
      meta: {
        title: '赛道',
        isShowBar: true // 用于配置是否显示bar
      }
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('./views/index/Pay.vue'),
      meta: {
        title: '支付',
        isShowBar: false // 用于配置是否显示bar
      }
    },
  ]
})
