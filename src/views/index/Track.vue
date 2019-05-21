<template>
  <div>
    <van-nav-bar
      title="赛道"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div style="padding-top: 46px;padding-bottom: 50px;">
      <div>
        <p class="text-center bg-primary text-white py-2 rounded font-weight-bold mx-auto" style="font-size: 20px;width: 200px;">成都赤晓汽车运动</p>
        <div class="text-center">
          <img src="@/assets/图片1.jpg" alt="" style="width:100%">
        </div>
        <p class="px-3 py-2 mb-0">
          成都赤晓汽车运动文化发展有限公司创建于2018年，隶属于<strong>中国南山开发集团</strong>。公司位于成都市经济开发区成龙大道三段999号南山汽车文化园内。
        </p>
        <p class="px-3 py-2">
          成都赤晓是一家以汽车运动为载体的创新型运动文化公司，业务涵盖赛车培训、赛事推广、参赛定制服务、赛道租赁、赛道赛事广告、汽车改装、平行进口车批发等领域；公司秉承“细节、务实、信念、行动”的企业精神，皆在通过“资源优化、平民化和娱乐化”的经营模式，推动汽车运动文化的普及、深化汽车运动产业的发展、树立汽车运动文化发展的标杆，致力于成为中国汽车运动行业专业领先的赛事场地运营商和服务商。
        </p>
      </div>
      <div class="d-flex justify-content-center py-2">
        <div style="width: 200px;">
          <p class="text-center font-weight-bold mb-0">
            <span class="font-italic" style="font-size: 20px;">1</span> 个赛道&nbsp;&nbsp;&nbsp;
            <span class="font-italic" style="font-size: 20px;">3</span> 种模式
          </p>
          <!--<p style="height: 12px;background-color: red;"></p>-->
        </div>
      </div>
      <div>
        <div class="text-center">
          <img src="@/assets/图片11.png" alt="" style="width: 100%">
        </div>
        <div class="text-center mt-2">
          <p>赛道全长：1.23公里（含可扩展赛道0.4公里）</p>
          <p>弯道数量：8处</p>
          <p>沙石路面：2处</p>
          <p>路面宽度：12-14.87米</p>
          <p>最长直道：170m，可测试百米加速</p>
          <p>看台座位数：500个</p>
        </div>
      </div>
      <div>
        <div class="text-center">
          <img src="@/assets/图片1.jpg" alt="" style="width: 100%">
        </div>
        <p class="py-2 px-3">
          <strong>赛道地址：</strong>成都·南山赛道位于“世界级汽车产业城”成都市龙泉驿区成龙大道999号，为成都市经济开发区核心区域。赛道毗邻龙泉山森林公园脚下，公共交通便利、自然环境优美。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Track",
    methods: {
      onClickLeft(){
        this.$router.push('/index')
      }
    }
  }
</script>

<style scoped>

</style>