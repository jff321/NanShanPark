<template>
  <div>
    <van-nav-bar
      title="预约"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div style="margin-top: 46px;">
      <van-cell-group>
        <van-cell value="赤晓汽车运动欢迎你" value-class="cellContent" />
      </van-cell-group>
    </div>
    <div class="introBox">
      <p class="intro">赛道练习预约说明</p>
      <div v-for="(item, index) in intro" :key="index">
        <p class="introP">{{item}}</p>
      </div>
    </div>
    <div class="van-hairline--top agree">
      <van-checkbox shape="square" v-model="checked">我同意上述条款</van-checkbox>
    </div>
    <div class="appButtonBox">
      <van-button v-if="checked" style="padding: 0px 80px" @click="toOrder">开始预约</van-button>
      <van-button v-else style="padding: 0px 80px" :disabled="isDisabled">开始预约</van-button>
    </div>
    <div class="appButtonBox">
      <van-button plain  style="padding: 0px 80px;background-color: transparent;color: #0033CC;">我的订单</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Appointment",
    data(){
      return {
        intro: [
          '预约成功后赛道券不可取消，如需更改时间场次，规则如下：距预约时间至少提前3小时以上进行时间场次更改申请，需在赛道券有效期内进行时间场次更改',
          '如未按预定时间到场，则视为放弃，赛道券（电子券）不予退还；',
          '如需多人多场，请分别预约；',
          '赛道券不包含赛道保险，赛道保险需现场办理；'
        ],
        checked: true,
        isDisabled: true
      }
    },
    methods: {
      onClickLeft(){
        this.$router.push('/index')
      },
      toOrder(){
        this.$router.push('/choice')
      },
    }
  }
</script>

<style scoped>
.cellContent{
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}
.introBox{
  padding: 5px 10px;
}
.intro{
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 12px;
}
.introP{
  font-size: 12px;
  margin-bottom: 5px;
}
.introP::before{
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
  margin: 2px 5px 2px 2px;
}
.agree{
  margin-top: 70px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
.appButtonBox{
  display: flex;
  justify-content: center;
  padding-top: 15px;
}
</style>
<style>
  .van-checkbox__label{
    color: darkolivegreen!important;
    font-size: 14px!important;
  }
</style>