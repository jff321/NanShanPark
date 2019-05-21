<template>
  <div>
    <van-nav-bar
      title="商城"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <iframe style="padding-top: 46px;width: 100vw;height: 100vh;" src="http://chixiaoauto.com" frameborder="0"></iframe>
  </div>
</template>

<script>
  export default {
    name: "Shop",
    methods: {
      onClickLeft(){
        this.$router.push('/index')
      }
    }
  }
</script>

<style scoped>

</style>