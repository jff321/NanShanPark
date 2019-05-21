<template>
  <div>
    <van-nav-bar
      title="订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div style="padding-top: 46px;">
      <van-tabs v-model="active">
        <van-tab title="赛道券">赛道券</van-tab>
        <van-tab title="商品">商品</van-tab>
        <van-tab title="预约">
          <div class="p-2">
            <div class="border py-2 px-3 mt-3 mb-2 shadow" v-for="(item, index) in order" :key="index">
              <van-row>
                <van-col span="20">
                  <van-row>
                    <van-col span="24">{{item.name}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">{{item.time}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">{{item.area}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">{{item.type}}</van-col>
                  </van-row>
                </van-col>
                <van-col span="4" class="text-center text-white" :style="{'backgroundColor': item.status ? '#FF5E53' : 'gray'}">{{item.status ? '待支付' : '已关闭'}}</van-col>
              </van-row>
              <div class="pt-2 mt-2 border-top text-center" @click="toCoupon">查看订单详情<van-icon name="arrow" style="vertical-align: middle" /></div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Order",
    data(){
      return {
        active: 0,
        order: [
          {
            id: 1,
            name: '丸子',
            time: '2019年5月29日（周三） 16:00~16:25',
            area: '成都南山公园',
            type: '赛道券',
            status: 1
          },
          {
            id: 2,
            name: '丸子2',
            time: '2019年5月23日（周四） 10:00~10:25',
            area: '成都南山公园',
            type: '单场券',
            status: 0
          }
        ]
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push('/index')
      },
      toCoupon(){
        this.$router.push('/choiceDetail')
      }
    }
  }
</script>

<style scoped>

</style>