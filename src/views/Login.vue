<template>
  <div>
    <div class="text-center my-5 pt-4 pb-2">
      <img src="../assets/logo.jpg" alt="" class="rounded-circle" style="width: 128px;">
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
          <van-button slot="button" size="small" type="primary" plain>发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <div class="px-3 mt-4">
      <van-button type="primary" block>登录</van-button>
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
    }
  }
</script>

<style scoped>

</style>