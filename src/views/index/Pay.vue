<template>
  <div>
    <van-nav-bar
      title="支付"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div>
      <van-cell-group>
        <van-cell title="订单类型" value="商品订单" />
        <van-cell title="订单编号" value="15584318544636" />
        <van-cell title="订单金额" value="￥200.00" />
      </van-cell-group>
    </div>
    <div>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell clickable @click="radio = '1'">
            <template slot="title">
              <div style="display: inline-block;">
                <img src="@/assets/微信支付.png" alt="" style="width: 20px;height: 20px;vertical-align:middle;">
                <span class="ml-2">微信支付</span>
              </div>
            </template>
            <van-radio name="1" />
          </van-cell>
          <van-cell clickable @click="radio = '2'">
            <template slot="title">
              <div style="display: inline-block;">
                <img src="@/assets/payment1.png" alt="" style="width: 20px;height: 20px;vertical-align:middle;">
                <span class="ml-2">快捷支付</span>
              </div>
            </template>
            <van-radio name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pay",
    data(){
      return{
        radio: '1',
      }
    },
    methods: {
      onClickLeft(){
        this.$router.push('/couponConfirm');
      },
    }
  }
</script>

<style scoped>

</style>