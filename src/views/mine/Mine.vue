<template>
  <div>
    <div class="d-flex justify-content-center align-items-center bgDiv">
      <div>
        <img src="http://g.hiphotos.baidu.com/zhidao/pic/item/d833c895d143ad4bd74bac3f85025aafa50f06e3.jpg" class="rounded-circle" alt="" style="width: 80px;height: 80px;">
        <p class="text-center text-white mb-0 mt-1">17711655289</p>
        <p class="text-center text-white mb-0">我欲乘风破浪</p>
      </div>
    </div>
    <div>
      <van-cell-group>
        <van-cell title="个人中心" is-link >
          <span slot="icon" class="align-middle mr-2 Font-color">
            <i class="fa fa-gear"></i>
          </span>
        </van-cell>
        <van-cell title="我的优惠券" is-link>
          <span slot="icon" class="align-middle mr-2 Font-color">
            <i class="fa fa-money"></i>
          </span>
        </van-cell>
        <van-cell title="我的预约" is-link>
          <span slot="icon" class="align-middle mr-2 Font-color">
            <i class="fa fa-calendar-minus-o"></i>
          </span>
        </van-cell>
      </van-cell-group>
      <div class="py-3 text-center van-hairline--bottom Font-color" @click="toLogin">退出登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Mine",
    methods: {
      toLogin(){
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
.bgDiv{
  background: url("../../assets/2500平综合发布大厅 (2).png");
  background-size: 100%;
  /*background-repeat: no-repeat;*/
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>