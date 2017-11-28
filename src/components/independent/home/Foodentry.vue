<template>
  <div class="foodentry">
    <swipe :auto="0">
      <swipe-item v-for="(item, index) in swipeData" :key="index" class="clear">
        <div v-for="(item2, index2) in item" :key="index2" class="item">
          <icon :path="item2.path" class="item-icon"></icon>
          <span class="item-title">{{item2.title}}</span>
        </div>
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
import Icon from '@/components/common/Icon'
export default {
  components: {
    Swipe,
    SwipeItem,
    Icon
  },
  data () {
    return {
      data: [
        {
          path: require('@/assets/img/fd01.jpg'),
          title: '美食'
        },
        {
          path: require('@/assets/img/fd02.jpg'),
          title: '晚餐'
        },
        {
          path: require('@/assets/img/fd01.jpg'),
          title: '商超便利'
        },
        {
          path: require('@/assets/img/fd02.jpg'),
          title: '果蔬生鲜'
        },
        {
          path: require('@/assets/img/fd01.jpg'),
          title: '新店特惠'
        },
        {
          path: require('@/assets/img/fd02.jpg'),
          title: '大牌5折'
        },
        {
          path: require('@/assets/img/fd01.jpg'),
          title: '甜品饮品'
        },
        {
          path: require('@/assets/img/fd02.jpg'),
          title: '医药健康'
        },
        {
          path: require('@/assets/img/fd01.jpg'),
          title: '浪漫鲜花'
        },
        {
          path: require('@/assets/img/fd02.jpg'),
          title: '麻辣烫'
        },
        {
          path: require('@/assets/img/fd01.jpg'),
          title: '汉堡'
        },
        {
          path: require('@/assets/img/fd02.jpg'),
          title: '地方菜系'
        }
      ]
    }
  },
  created () {
    
  },
  computed: {
    swipeData () {
      let y = 8; // 当前展示个数
      let array = [];
      const n = Math.ceil(this.data.length / y); // 页数
      for(var i=0; i<n; i++){
        array.push(this.data.slice(y*i, y*(i+1)))
      }
      return array;
    }
  }
}
</script>

<style>
.foodentry{
  height: 7.5rem;
  background: #ffffff;
}
.foodentry .mint-swipe-indicator{
  width: 4px;
  height: 4px;
}
.foodentry .mint-swipe-indicator.is-active{
  background: #333333;
  opacity: .8;
}
.item{
  width: 4rem;
  float: left;
  text-align: center;
  margin-top: .3rem;
}
.item-icon{
  width: 2rem;
  display: inline-block;
}
.item-title{
  display: block;
  font-size: .5rem;
  color: #666666;
}
</style>
