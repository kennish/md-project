<template>
  <div class="order-item">
    <div class="order-info">
      <div class="order-logo">
        <qd-img :path="`assets/img/shop-logo.png`"></qd-img>
      </div>
      <div class="order-show">
        <div class="order-l">
          <h4>汉堡王1000号<i class="iconfont">&#xe6a3;</i></h4>
          <span>2017-12-02 12:10</span>
        </div>
        <div class="order-r">订单已完成</div>
      </div>
    </div>
    <div class="order-merchandise">
      <div class="order-merchandise-show">肉沫茄子 等3件商品</div>
      <div class="order-money">￥28</div>
      <div class="order-handle">
        <router-link class="again" to="">再来一单</router-link>
        <router-link class="estimate" to="">评价得20金币</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import QdImg from '@/components/common/Img'
export default {
  components: {
    QdImg
  }
}
</script>

<style>
.order-item{
  padding: .7rem .5rem;
  border-bottom: 1px solid #eeeeee;
}
.order-item .order-info{
  display: flex;
}
.order-item .order-info .order-logo{
  display: flex;
  width: 2rem;
  height: 2rem;
  border: 1px solid #f1f1f1;
  border-radius: 3px;
}
.order-item .order-info  .order-show{
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.order-item .order-info  .order-show .order-l{
  padding-left: .5rem;
  padding-top: .2rem;
}
.order-item .order-info  .order-show .order-l h4{
  font-size: .7rem;
  color: #333333;
}
.order-item .order-info  .order-show .order-l h4 i{
  font-size: .7rem;
  color: #999999;
  margin-left: .3rem;
  font-weight: 100;
}
.order-item .order-info  .order-show .order-l span{
  display: flex;
  margin-top: .3rem;
  font-size: .5rem;
  color: #999999;
}
.order-item .order-info  .order-show .order-r{
  font-size: .6rem;
  color: #666666;
  padding-top: .2rem;
}
.order-item .order-merchandise{
  padding-left: 2rem;
}
.order-item .order-merchandise .order-merchandise-show{
  padding-left: .5rem;
  padding-top: .4rem;
  font-size: .6rem;
  color: #666666;
}
.order-item .order-merchandise .order-money{
  padding-left: .5rem;
  font-size: .6rem;
  color: #333333;
  margin-top: .4rem;
}
.order-item .order-merchandise .order-handle{
  text-align: right;
  display: flex;
  justify-content: flex-end;
  margin-top: .4rem;
}
.order-item .order-merchandise .order-handle .again{
  display: block;
  font-size: .5rem;
  color: #26a2ff;
  border: 1px solid #26a2ff;
  padding: .1rem .3rem;
  border-radius: 3px;
  margin-right: .5rem;
}
.order-item .order-merchandise .order-handle .estimate{
  display: block;
  font-size: .5rem;
  color: #e81919;
  border: 1px solid #e81919;
  padding: .1rem .3rem;
  border-radius: 3px;
}
</style>
