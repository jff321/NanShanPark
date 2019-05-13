<template>
  <div>
    <van-nav-bar
      title="详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />

  </div>
</template>

<script>
  export default {
    name: "CouponDetail",
    mounted(){
      console.log(this.$route.query.id);
    },
    methods: {
      onClickLeft(){
        this.$router.back(-1);
      }
    }
  }
</script>

<style scoped>

</style>