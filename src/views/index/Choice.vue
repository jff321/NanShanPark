<template>
  <div>
    <van-nav-bar
      title="预约"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div style="padding-top: 46px;">
      <div>
        <van-cell-group>
          <van-cell  value="请选择赛道券" />
        </van-cell-group>
        <div class="d-flex justify-content-between py-1 px-4">
          <van-radio-group v-model="radio">
            <van-radio name="1" class="p-1">单场券（{{singleNum}}张）</van-radio>
            <van-radio name="2" class="p-1">半日券（{{halfNum}}张）</van-radio>
            <van-radio name="3" class="p-1">团购券（{{groupNum}}张）</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="van-hairline--top dateDiv" @click="show=true">
        <span>请选择日期</span>
        <span class="date">{{currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate()}}</span>
      </div>
      <div>
        <van-cell-group>
          <van-cell value="请选择时间段" />
        </van-cell-group>

        <van-checkbox-group v-if="radio === '2'" class="d-flex justify-content-between py-2 px-4 flex-wrap" v-model="timeB">
          <van-checkbox
            v-for="(item) in timeListB"
            :key="item"
            :name="item"
            class="mr-2 mb-2"
          >
            {{ item }}
          </van-checkbox>
        </van-checkbox-group>

        <van-checkbox-group v-else class="d-flex justify-content-between py-2 px-4 flex-wrap" v-model="time">
          <van-checkbox
            v-for="(item) in timeList"
            :key="item"
            :name="item"
            class="mr-2 mb-2"
          >
            {{ item }}
          </van-checkbox>
        </van-checkbox-group>

      </div>
    </div>
    <div class="p-2" @click="commit">
      <van-button block>点击预约</van-button>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        @confirm="show = false"
      />
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: "Choice",
    data(){
      return {
        radio: '1',
        singleNum: 1,
        halfNum: 2,
        groupNum: 80,
        timeListB: [
          '10:00~12:00',
          '14:00~17:00'
        ],
        timeB: ['10:00~12:00'],
        timeList: [
          '10:00~10:25',
          '10:25~10:50',
          '10:50~11:15',
          '11:15~11:40',
          '11:40~12:00',
          '14:00~14:25',
          '14:25~14:50',
          '14:50~15:15',
          '15:15~15:40',
          '15:40~16:05',
          '16:05~16:30',
          '16:30~16:55'
        ],
        time: ['10:00~10:25'],
        show: false,
        currentDate: new Date(),
        minDate: new Date(),
      }
    },
    mounted(){
      // if(this.singleNum < this.timeListB.length){
      // }
    },
    methods: {
      onClickLeft(){
        this.$router.push('/appointment')
      },
      commit(){
        this.$router.push('/choiceDetail')
      }
    }
  }
</script>

<style scoped>
.dateDiv{
  padding: 10px 15px;
}
.date{
  float: right
}
</style>