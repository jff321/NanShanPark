<template>
  <div>
    <van-nav-bar
      title="赛道券"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div style="padding-top: 46px;">
      <van-card
        v-for="(item, index) in list"
        :key="index"
        :price="item.price"
        :origin-price="item.originPrice"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.thumb"
        centered
        @click="toCouponDetail(item.id)"
      >
        <div slot="num">
          <van-tag class="mt-1 mr-2" plain type="danger">剩余{{item.num}}张</van-tag>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "coupon",
    data(){
      return {
        list: [
          {
            id: 1,
            title: '单场券',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            num: 2,
            price: '2.00',
            originPrice: '10.00',
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557288087023&di=212348f9f4e0501f5bc0b6b5498f91e5&imgtype=0&src=http%3A%2F%2Fpic36.nipic.com%2F20131207%2F11620527_093200679000_2.jpg'
          },
          {
            id: 2,
            title: '半日券',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            num: 3,
            price: '4.00',
            originPrice: '15.00',
            thumb: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3039461206,1422316674&fm=26&gp=0.jpg'
          },
          {
            id: 3,
            title: '团购（50以上）',
            desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
            num: 3,
            price: '4.00',
            originPrice: '20.00',
            thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557882890&di=63280dcd2d5aa6e9c55cfedb92ad6304&imgtype=jpg&er=1&src=http%3A%2F%2Fpic3.nipic.com%2F20090629%2F2806322_104430008_2.jpg'
          }
        ]
      }
    },
    methods: {
      onClickLeft(){
        this.$router.push('/index')
      },
      toCouponDetail(id){
        this.$router.push({
          path: `/couponDetail/${id}`,
        })
      }
    }
  }
</script>

<style scoped>
  .van-card__price{
    font-size: 20px;
  }
</style>