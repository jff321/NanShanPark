<template>
  <div>
    <van-nav-bar
      title="赛道券"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div style="padding-top: 46px;">
      <div>
        <van-row  v-for="(item, index) in list" :key="index" gutter="10" class="py-2 bg-light mx-0" type="flex" align="center">
          <van-col span="8" class="text-center">
            <img :src="item.thumb" alt="" style="width: 85%;">
          </van-col>
          <van-col span="8">
            <p class="mb-0">{{item.title}}</p>
            <p class="van-ellipsis mb-0">{{item.desc}}</p>
            <p class="mb-0 text-danger font-weight-bold" style="font-size: 14px;">￥{{item.price}}</p>
          </van-col>
          <van-col span="8">
            <p class="mb-0">
              <van-stepper class="mt-1" v-model="item.value" />
            </p>
            <p class="mb-0 mt-1 text-center">
              <van-button size="small" @click="buy(item.value, item.id)">立即购买</van-button>
            </p>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Notify } from 'vant';
  Vue.use(Notify);
  export default {
    name: "coupon",
    data(){
      return {
        list: [
          {
            id: 1,
            title: '单场券',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            num: 2,
            price: '2.00',
            originPrice: '10.00',
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557288087023&di=212348f9f4e0501f5bc0b6b5498f91e5&imgtype=0&src=http%3A%2F%2Fpic36.nipic.com%2F20131207%2F11620527_093200679000_2.jpg',
            value: 1
          },
          {
            id: 2,
            title: '半日券',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            num: 3,
            price: '4.00',
            originPrice: '15.00',
            thumb: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3039461206,1422316674&fm=26&gp=0.jpg',
            value: 1
          },
          {
            id: 3,
            title: '团购（50以上）',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            num: 3,
            price: '4.00',
            originPrice: '20.00',
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557882890&di=63280dcd2d5aa6e9c55cfedb92ad6304&imgtype=jpg&er=1&src=http%3A%2F%2Fpic3.nipic.com%2F20090629%2F2806322_104430008_2.jpg',
            value: 1
          }
        ],
      }
    },
    methods: {
      onClickLeft(){
        this.$router.push('/index')
      },
      buy(num, id){
        console.log('商品数量:', num);
        console.log('商品ID:', id);
        this.$router.push({
          name: 'couponConfirm',
          params: {
            num: num,
            id: id
          }
        });
        // Notify({
        //   message: '购买成功',
        //   duration: 1000,
        //   background: '#0033CC'
        // });
      }
    }
  }
</script>

<style scoped>
  .van-card__price{
    font-size: 20px;
  }
</style>