<template>
  <div class="recommend-list">
    <subtitle :title="`推荐商家`"></subtitle>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <shop-item v-for="(item, index) in shopList" :key="index" :data="item" ></shop-item>
      <div class="loadingbar" v-show="loading">
        <spinner :type="3" :size="24" style="display: inline-block; vertical-align: middle; margin-right: 10px;"></spinner>正在加载...
      </div>
    </div>
  </div>
</template>

<script>
import { Spinner } from 'mint-ui'
import Subtitle from '@/components/common/Subtitle'
import ShopItem from '@/components/common/ShopItem'
export default {
  components: {
    Spinner,
    Subtitle,
    ShopItem
  },
  data () {
    return {
      list: [1],
      loading: false,
      shopList: [
        {
          path: 'assets/img/shop-logo.png',
          title: '汉堡王',
          brand: true,
          support: ['保', '票'],
          transaction: 500,
          distribution: '蜂鸟专送',
          moneylimit: 30,
          serviceFee: 5,
          distance: '880m',
          takeTime: 30,
          tagline: 1,
          activities: [
            {
              tag: '首',
              msg: '新用户下单立减18元'
            },
            {
              tag: '减',
              msg: '满35元减18元'
            },
            {
              tag: '折',
              msg: '特惠折扣秒杀'
            },
            {
              tag: '特',
              msg: '经典套餐吐血特价'
            }
          ]
        },
        {
          path: 'assets/img/shop-logo.png',
          title: '炒鸡汉堡王',
          brand: false,
          support: ['保'],
          transaction: 500,
          distribution: '蜂鸟专送',
          moneylimit: 30,
          serviceFee: 5,
          distance: '880m',
          takeTime: 30,
          tagline: 2,
          activities: [
            {
              tag: '首',
              msg: '新用户下单立减18元'
            }
          ]
        },
        {
          path: 'assets/img/shop-logo.png',
          title: '汉堡王',
          brand: true,
          support: ['保', '票'],
          transaction: 500,
          distribution: '蜂鸟专送',
          moneylimit: 30,
          serviceFee: 5,
          distance: '880m',
          takeTime: 30,
          tagline: 1,
          activities: [
            {
              tag: '首',
              msg: '新用户下单立减18元'
            },
            {
              tag: '减',
              msg: '满35元减18元'
            },
            {
              tag: '折',
              msg: '特惠折扣秒杀'
            }
          ]
        }
      ]
    }
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.shopList[this.shopList.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.shopList.push(last);
        }
        this.loading = false;
      }, 4500);
    }
  }
}
</script>

<style>
.recommend-list{
  background: #ffffff;
}
</style>

