<template>
  <div>
    <van-nav-bar
      title="订单详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="box rounded">
      <div class="text-center p-2 text-white font-weight-bold" style="background-color: #FF5E53">确认订单</div>
      <div class="pt-3 px-2 pb-2" style="font-size: 12px;">
        <van-row class="pb-1">
          <van-col span="5">预约日期：</van-col>
          <van-col span="19"><span class="text">2019年5月23日（周四） 10:00~10:25 16:00~16:25</span></van-col>
        </van-row>
        <van-row class="pb-1">
          <van-col span="5">赛道地址：</van-col>
          <van-col span="19"><span class="text">成都天府店</span></van-col>
        </van-row>
        <van-row class="pb-1">
          <van-col span="5">预约姓名：</van-col>
          <van-col span="19"><span class="text">张三</span></van-col>
        </van-row>
        <van-row class="pb-1">
          <van-col span="5">手机号码：</van-col>
          <van-col span="19"><span class="text">13600000000</span></van-col>
        </van-row>
      </div>
      <div class="pt-3 px-2 pb-2 border-top"  style="font-size: 12px;">
        <van-row class="pb-1">
          <van-col span="5"><strong>套餐信息：</strong></van-col>
          <van-col span="19"><span class="text">单场券</span></van-col>
        </van-row>
        <van-row class="pb-1">
          <van-col span="5"><strong>预计耗时：</strong></van-col>
          <van-col span="19"><span class="text">约50分钟</span></van-col>
        </van-row>
      </div>
      <div class="pt-3 px-2 pb-2 border-top"  style="font-size: 12px;">
        <van-row type="flex" align="center">
          <van-col span="15">
            <van-row>
              <van-col span="8"><strong>订单金额：</strong></van-col>
              <van-col span="6" class="text">￥ 150</van-col>
              <van-col span="10"><u>我有优惠券</u></van-col>
            </van-row>
          </van-col>
          <van-col span="9">
            <van-row type="flex" align="center" style="color: #FF5E53;">
              <van-col span="14"><strong>需付订金：</strong></van-col>
              <van-col span="9">￥<span class="money">60</span></van-col>
            </van-row>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="d-flex justify-content-center py-3">
      <van-button class="mr-3" style="background-color: white;color: #0033CC;" @click="onClickLeft">重选套餐</van-button>
      <van-button>确认并支付</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "choiceDetail",
    data() {
      return {
      }
    },
    mounted() {

    },
    methods: {
      onClickLeft() {
        this.$router.push('/choice')
      }
    }
  }
</script>

<style scoped>
.box{
  margin: 66px 20px 20px 20px;
  border: 1px solid #DEE2E6;
}
.money{
  font-weight: bolder;
  font-size: 16px;
}
</style>