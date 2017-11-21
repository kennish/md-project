<template>
  <div class="home">
    <div class="search-wrapper">
      <router-link to="">
        <i class="iconfont">&#xe65c;</i>搜索商家、商品名称
      </router-link>
    </div>
    <router-link to="/login">
      <qd-img :path="`assets/img/banner.png`"></qd-img>
    </router-link>
    <foodentry class="foodentry"></foodentry>
  </div>
</template>

<script>
import qdImg from '@/components/Img'
import Foodentry from './foodentry'
export default {
  components: {
    qdImg,
    Foodentry
  }
}
</script>

<style>
.home{
  background: #ffffff;
  padding-top: 2.1rem;
}
.search-wrapper{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  padding: .3rem .5rem;
  background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
  background-image: -webkit-linear-gradient(left,#0af,#0085ff);
  background-image: linear-gradient(90deg,#0af,#0085ff);
}
.search-wrapper a{
  display: block;
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  background: #ffffff;
  font-size: .6rem;
  color: #777777;
  text-decoration: none;
}
.search-wrapper a i{
  margin-right: .2rem;
  font-size: .6rem;
  color: #999999;
}
.foodentry{
  height: 7.5rem;
}
</style>

