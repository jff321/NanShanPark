<template>
  <div style="padding-bottom: 50px;">
    <!--搜索-->
    <van-search class="py-1 px-2" placeholder="请输入搜索关键词" v-model="value" background="#E5E5E5" />
    <!--轮播-->
    <div class="Border">
      <van-swipe :autoplay="3000" :height="180">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" style="width: 100vw;" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--活动通知-->
    <div class="Border">
      <van-notice-bar
        text="活动通知活动通知活动通知活动通知活动通知活动通知活动通知活动通知活动通知活动通知活动通知活动通知活动通知活动通知活动通知活动通知"
        left-icon="volume-o"
      />
    </div>
    <!--快捷通道-->
    <div class="pt-2 Border">
      <!-- 居中 -->
      <van-row type="flex" justify="center">
        <van-col span="6" class="text-center py-2">
          <router-link to="/track">
            <img src="@/assets/track.png" alt="" class="rounded-circle" width="45">
            <p class="mt-2 mb-0 Font">赛道</p>
          </router-link>
        </van-col>
        <van-col span="6" class="text-center py-2">
          <router-link to="/coupon">
            <img src="@/assets/quan.png" alt="" class="rounded-circle" width="45">
            <p class="mt-2 mb-0 Font">赛道券</p>
          </router-link>
        </van-col>
        <van-col span="6" class="text-center py-2">
          <router-link to="/activity">
            <img src="@/assets/activity.png" alt="" class="rounded-circle" width="45">
            <p class="mt-2 mb-0 Font">活动</p>
          </router-link>
        </van-col>
        <van-col span="6" class="text-center py-2">
          <router-link to="/appointment">
            <img src="@/assets/yuyue.png" alt="" class="rounded-circle" width="45">
            <p class="mt-2 mb-0 Font">预约</p>
          </router-link>
        </van-col>
      </van-row>
    </div>
    <!--热门商品-->
    <div class="py-2 Border text-center">
      <img src="@/assets/hot.png" alt="" width="20" style="vertical-align: middle">
      <span class="ml-1">热门商品</span>
    </div>
    <div>
      <van-card
        v-for="(item, index) in list"
        :key="index"
        :num="item.num"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.thumb"
        centered
      >
      </van-card>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    Search,
    Swipe,
    SwipeItem,
    Lazyload,
    Row,
    Col,
    NoticeBar,
    Card
  } from 'vant';
  Vue.use(Search);
  Vue.use(Swipe).use(SwipeItem);
  Vue.use(Lazyload);
  Vue.use(Row).use(Col);
  Vue.use(NoticeBar);
  Vue.use(Card);
  export default {
    name: 'index',
    data() {
      return {
        value: '',
        images: [
          'http://img2.imgtn.bdimg.com/it/u=234634259,4236876085&fm=26&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=153784318,420152699&fm=26&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=1055727654,337004439&fm=26&gp=0.jpg'
        ],
        list: [
          {
            num: 2,
            price: '2.00',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            title: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
            thumb: 'http://image.cn.made-in-china.com/2f0j01SeQEfClPIhzt/%E5%A4%B4%E7%9B%94%E8%B4%B4%E8%8A%B1%E8%AE%BE%E8%AE%A1.jpg'
          },
          {
            num: 3,
            price: '4.00',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            title: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
            thumb: 'http://m.360buyimg.com/n12/jfs/t2377/60/624217279/191382/9acc71df/561f1bb2N080fee8b.jpg!q70.jpg'
          }
        ]
      }
    },
    methods: {
      onSearch(){
        console.log('搜索:', this.value);
      },
      onCancel(){
        console.log('取消搜索');
      }
    }
  }
</script>

<style lang="scss">
  a{
    text-decoration: none;
    color: #212529;
  }
</style>
