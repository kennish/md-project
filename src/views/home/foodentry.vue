<template>
  <div>
    <swipe :auto="0">
      <swipe-item v-for="(item, index) in swipeData" :key="index">
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
import Icon from '@/components/Icon.vue'
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
          path: require('@/assets/img/fd01.png'),
          title: '美食'
        },
        {
          path: require('@/assets/img/fd01.png'),
          title: '美食'
        },
        {
          path: 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg',
          title: '美食'
        },
        {
          path: 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg',
          title: '美食'
        },
        {
          path: 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg',
          title: '美食'
        },
        {
          path: 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg',
          title: '美食'
        },
        {
          path: 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg',
          title: '美食'
        },
        {
          path: 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg',
          title: '美食'
        },
        {
          path: 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg',
          title: '美食'
        },
        {
          path: 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg',
          title: '美食'
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
  font-size: .6rem;
  color: #333333;
}
</style>
