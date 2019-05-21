<template>
  <div>
    <div class="text-center my-5 pt-4 pb-2">
      <img src="../assets/LOGO4.png" alt="" style="width: 128px;">
    </div>
    <div class="px-3">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
        />

        <van-field
          required
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <van-button slot="button" size="small" style="background-color: white;color: #0033CC;">发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <div class="px-3 mt-4">
      <van-button block @click="toIndex">登录</van-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    Field,
    Button
  } from 'vant';
  Vue.use(Field);
  Vue.use(Button);
  export default {
    name: "login",
    data(){
      return{
        username: '',
        sms: ''
      }
    },
    methods: {
      toIndex(){
        this.$router.push('/index')
      }
    }
  }
</script>

<style scoped>

</style>