<template>
  <div class="hot-shop">
    <div class="setMeal clear">
      <div class="sm-item" v-for="(item, index) in setMealData" :key="index">
        <h3 :class="item.class? item.class: ''">{{item.title}}</h3>
        <div class="sm-show">{{item.description}}</div>
        <div class="sm-buy">
          <span>{{item.buy}}</span> 人正在抢 >
        </div>
        <div class="sm-img">
          <qd-img :path="item.path"></qd-img>
        </div>
      </div>
    </div>

    <div class="categories clear">
      <div class="c-item">
        <h3 class="c-title">天天特价</h3>
        <span class="red">低至1折</span>
        <div class="c-img">
          <qd-img :path="`assets/img/hot01.png`"></qd-img>
        </div>
      </div>
      <div class="c-item">
        <h3 class="c-title">天天特价</h3>
        <span>低至1折</span>
        <div class="c-img">
          <qd-img :path="`assets/img/hot01.png`"></qd-img>
        </div>
      </div>
      <div class="c-item">
        <h3 class="c-title">天天特价</h3>
        <span>低至1折</span>
        <div class="c-img">
          <qd-img :path="`assets/img/hot01.png`"></qd-img>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import qdImg from '@/components/common/Img'
export default {
  components: {
    qdImg
  },
  data () {
    return {
      setMealData: [
        {
          title: '限量抢购',
          description: '超值美味9.9元起',
          buy: '968',
          path: 'assets/img/hot01.png',
          class: 'red'
        },
        {
          title: '热卖套餐',
          description: '销量最高，好评最多',
          buy: '1268',
          path: 'assets/img/hot01.png'
        }
      ]
    }
  }
}
</script>

<style>
.hot-shop{
  background: #ffffff;
  margin-bottom: .5rem;
  padding-bottom: .5rem;
}
.setMeal{
  padding: 0 .5rem;
}
.setMeal .sm-item{
  position: relative;
  float: left;
  width: 7.4rem;
  height: 5.6rem;
  box-sizing: border-box;
  padding-top: .6rem;
  padding-left: .6rem;
  margin-right: .2rem;
  background: -webkit-gradient(linear,left bottom,left top,color-stop(5%,#f4f4f4),color-stop(95%,#fafafa));
  background: -webkit-linear-gradient(bottom,#f4f4f4 5%,#fafafa 95%);
  background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
}
.setMeal .sm-item:last-child{
  margin-right: 0;
}
.setMeal .sm-item h3{
  position: relative;
  z-index: 10;
  font-size: .7rem;
  color: #333333;
  margin-bottom: .4rem;
}
.setMeal .sm-item .red{
  color: #e81919;
}
.setMeal .sm-item .sm-show{
  position: relative;
  z-index: 10;
  font-size: .5rem;
  color: #777777;
  margin-bottom: .4rem;
}
.setMeal .sm-item .sm-buy{
  position: relative;
  z-index: 10;
  font-size: .5rem;
  color: #333333;
}
.setMeal .sm-item .sm-buy span{
  color: #e81919;
}
.setMeal .sm-item .sm-img{
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4.6rem;
}

.categories{
  padding: 0 .5rem;
}
.categories .c-item{
  position: relative;
  float: left;
  width: 4.86rem;
  height: 6rem;
  margin-right: .2rem;
  margin-top: .2rem;
  box-sizing: border-box;
  padding-top: .8rem;
  text-align: center;
  background: -webkit-gradient(linear,left bottom,left top,color-stop(5%,#f4f4f4),color-stop(95%,#fafafa));
  background: -webkit-linear-gradient(bottom,#f4f4f4 5%,#fafafa 95%);
  background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
  overflow: hidden;
}
.categories .c-item:last-child{
  margin-right: 0;
}
.categories .c-item .c-title{
  font-size: .7rem;
  color: #333333;
  margin-bottom: .1rem;
}
.categories .c-item span{
  font-size: .5rem;
  color: #777777;
  border: 1px solid #dddddd;
  box-shadow: 0 0 2px 1px rgba(187, 187, 187, .6);
  border-radius: 2px;
}
.categories .c-item .red{
  color: #e81919;
  border: 1px solid #ff7878;
  box-shadow: 0 0 2px 1px rgba(232, 25, 25, .5);
}
.categories .c-item .c-img{
  position: absolute;
  left: 0;
  bottom: -1rem;
}
</style>

