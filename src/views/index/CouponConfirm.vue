<template>
  <div>
    <van-nav-bar
      title="确认订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div style="padding-top: 46px;" class="van-hairline--bottom">
      <van-row class="py-3 m-0" gutter="10" type="flex" align="center">
        <van-col span="4" class="text-center">
          <img src="@/assets/location.png" alt="" style="width: 35px;height: 35px;">
        </van-col>
        <van-col span="18">
          <p class="mb-0"><span style="font-size: 14px;">姜芳</span><span class="text-black-50">&nbsp;&nbsp;&nbsp;&nbsp;17711545233</span></p>
          <p class="mb-0">四川省成都市双流区四川省成都市双流区四川省成都市双流区四川省成都市双流区</p>
        </van-col>
        <van-col span="2"><van-icon name="arrow" /></van-col>
      </van-row>
    </div>
    <div>
      <van-row gutter="10" class="py-2 bg-light mx-0" type="flex" align="center">
        <van-col span="8" class="text-center">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557288087023&di=212348f9f4e0501f5bc0b6b5498f91e5&imgtype=0&src=http%3A%2F%2Fpic36.nipic.com%2F20131207%2F11620527_093200679000_2.jpg" alt="" style="width: 85%;">
        </van-col>
        <van-col span="16">
          <p class="mb-0">单场券</p>
          <p class="van-ellipsis mb-0">描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息</p>
          <p class="mb-0"><span class="text-danger font-weight-bold" style="font-size: 14px;">￥2.00</span> <span class="float-right">x1</span></p>
        </van-col>
      </van-row>
      <div>
        <van-cell-group>
          <van-cell title="优惠券" value="未使用"  value-class="Font-color"/>
          <van-cell title="商品价格" value="￥450.00" value-class="Font-color"/>
          <van-cell title="订单价格" value="￥450.00" value-class="Font-color"/>
          <van-cell title="发票" value="不开发票" is-link/>
          <van-field
            v-model="message"
            label="买留言"
            type="textarea"
            placeholder="请输入留言（选填）"
            rows="1"
            autosize
          />
        </van-cell-group>
      </div>
    </div>
    <div class="van-hairline--top" style="position: absolute;bottom: 0;left: 0;right: 0;">
      <van-row style="font-size: 14px;">
        <van-col span="12" class="py-3">&nbsp;</van-col>
        <van-col span="3" class="py-3">需付：</van-col>
        <van-col span="3" class="Font-color py-3">￥ 200</van-col>
        <van-col span="6" class="text-center van-button--default">
          <div class="py-3"  @click="pay">立即支付</div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CouponConfirm",
    data(){
      return {
        message: ''
      }
    },
    mounted(){
      console.log(this.$route.params);
    },
    methods: {
      onClickLeft(){
        this.$router.push('/coupon');
      },
      pay(){
        console.log('skjfhsdufh');
        this.$router.push('/pay');
      }
    }
  }
</script>

<style scoped>

</style>