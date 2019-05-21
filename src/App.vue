<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar
      v-model="active"
      active-color="#0033CC"
      v-show="$route.meta.isShowBar"
      fixed
    >
      <van-tabbar-item icon="wap-home" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="cluster-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/shop">商城</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Tabbar,
  TabbarItem
} from 'vant';
Vue.use(Tabbar).use(TabbarItem);
export default {
  name: 'app',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">
</style>
