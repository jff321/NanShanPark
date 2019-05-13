<template>
  <div>
    <van-nav-bar
      title="活动"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!--搜索-->
    <div>
      <van-search style="margin-top: 46px;" class="py-1 px-2" placeholder="请输入搜索关键词" v-model="value" background="#E5E5E5" />
    </div>
    <!--活动列表-->
    <scroller :on-infinite="infinite"  :on-refresh = "refresh" style="padding-top: 88px;">
      <van-row type="flex" align="center" class="pt-2 pb-2 Border listRow" v-for="(item, index) in list" :key="index">
        <van-col span="8" class="px-1">
          <img :src="item.thumb" alt="" style="width: 100%">
        </van-col>
        <van-col span="16">
          <van-row type="flex" align="center">
            <van-col span="18" class="px-1">
              <p class="mb-0 Font">{{ item.title }}</p>
              <p class="mb-0 Font van-ellipsis">{{ item.desc  }}</p>
              <p class="mb-0 Font">报名时间：{{ item.start_time }}</p>
              <p class="mb-0 Font">结束时间：{{ item.end_time }}</p>
            </van-col>
            <van-col span="5">
              <van-button size="small">报名</van-button>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </scroller>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    NavBar,
    Search,
    Button,
    Row, Col
  } from 'vant';
  Vue.use(NavBar);
  Vue.use(Search);
  Vue.use(Button);
  Vue.use(Row).use(Col);
  export default {
    name: "activity",
    data(){
      return {
        value: '',
        list: [
          {
            id: 1,
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206664752&di=4e18411ede57322d52c40fe1a33016d1&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fauto5%2F1405%2F17%2Fc2%2F34329465_1400315970937.jpg',
            title: '活动标题',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            start_time: '2019-05-01 23:59:00',
            end_time: '2019-06-11 23:59:00'
          },
          {
            id: 2,
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206100152&di=0794d883436788cf30d3361a3bfebe2b&imgtype=0&src=http%3A%2F%2Fdealer0.autoimg.cn%2Fnews%2F201509%2F126749%2F620x0_1_q87_20150909151322141.jpg',
            title: '活动标题',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            start_time: '2019-05-01 23:59:00',
            end_time: '2019-06-11 23:59:00'
          },
          {
            id: 3,
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206664752&di=4e18411ede57322d52c40fe1a33016d1&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fauto5%2F1405%2F17%2Fc2%2F34329465_1400315970937.jpg',
            title: '活动标题',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            start_time: '2019-05-01 23:59:00',
            end_time: '2019-06-11 23:59:00'
          },
          {
            id: 4,
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206100152&di=0794d883436788cf30d3361a3bfebe2b&imgtype=0&src=http%3A%2F%2Fdealer0.autoimg.cn%2Fnews%2F201509%2F126749%2F620x0_1_q87_20150909151322141.jpg',
            title: '活动标题',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            start_time: '2019-05-01 23:59:00',
            end_time: '2019-06-11 23:59:00'
          },
          {
            id: 5,
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206664752&di=4e18411ede57322d52c40fe1a33016d1&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fauto5%2F1405%2F17%2Fc2%2F34329465_1400315970937.jpg',
            title: '活动标题',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            start_time: '2019-05-01 23:59:00',
            end_time: '2019-06-11 23:59:00'
          },
          {
            id: 6,
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206100152&di=0794d883436788cf30d3361a3bfebe2b&imgtype=0&src=http%3A%2F%2Fdealer0.autoimg.cn%2Fnews%2F201509%2F126749%2F620x0_1_q87_20150909151322141.jpg',
            title: '活动标题',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            start_time: '2019-05-01 23:59:00',
            end_time: '2019-06-11 23:59:00'
          },
          {
            id: 7,
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206664752&di=4e18411ede57322d52c40fe1a33016d1&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fauto5%2F1405%2F17%2Fc2%2F34329465_1400315970937.jpg',
            title: '活动标题',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            start_time: '2019-05-01 23:59:00',
            end_time: '2019-06-11 23:59:00'
          },
          {
            id: 8,
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206100152&di=0794d883436788cf30d3361a3bfebe2b&imgtype=0&src=http%3A%2F%2Fdealer0.autoimg.cn%2Fnews%2F201509%2F126749%2F620x0_1_q87_20150909151322141.jpg',
            title: '活动标题',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            start_time: '2019-05-01 23:59:00',
            end_time: '2019-06-11 23:59:00'
          },
          {
            id: 9,
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206664752&di=4e18411ede57322d52c40fe1a33016d1&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fauto5%2F1405%2F17%2Fc2%2F34329465_1400315970937.jpg',
            title: '活动标题',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            start_time: '2019-05-01 23:59:00',
            end_time: '2019-06-11 23:59:00'
          },
          {
            id: 10,
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206100152&di=0794d883436788cf30d3361a3bfebe2b&imgtype=0&src=http%3A%2F%2Fdealer0.autoimg.cn%2Fnews%2F201509%2F126749%2F620x0_1_q87_20150909151322141.jpg',
            title: '活动标题',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            start_time: '2019-05-01 23:59:00',
            end_time: '2019-06-11 23:59:00'
          },
          {
            id: 11,
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206664752&di=4e18411ede57322d52c40fe1a33016d1&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fauto5%2F1405%2F17%2Fc2%2F34329465_1400315970937.jpg',
            title: '活动标题',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            start_time: '2019-05-01 23:59:00',
            end_time: '2019-06-11 23:59:00'
          },
          {
            id: 12,
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206100152&di=0794d883436788cf30d3361a3bfebe2b&imgtype=0&src=http%3A%2F%2Fdealer0.autoimg.cn%2Fnews%2F201509%2F126749%2F620x0_1_q87_20150909151322141.jpg',
            title: '活动标题',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            start_time: '2019-05-01 23:59:00',
            end_time: '2019-06-11 23:59:00'
          }
        ]
      }
    },
    methods: {
      onClickLeft(){
        this.$router.push('/index')
      },

      // 下拉刷新
      refresh() {
        console.log("refresh");
        // this.pageNumber = 1;
        // this.getDataList(this.selectTabIndex);
      },

      // 上拉获取
      infinite(done) {
        // this.pageNumber++;
        console.log("infinite", done);
        // this.getDataList(this.selectTabIndex, done);
      }
    }
  }
</script>

<style scope>
</style>