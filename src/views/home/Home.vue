<template>
  <div class="home">

    <!-- 搜索beg -->
    <div class="search-wrapper">
      <router-link to="">
        <i class="iconfont">&#xe65c;</i>搜索商家、商品名称
      </router-link>
    </div>
    <!-- 搜索end -->

    <!-- banner beg -->
    <router-link to="/login">
      <qd-img :path="`assets/img/banner.png`"></qd-img>
    </router-link>
    <!-- banner end -->

    <!-- 关键字搜索 beg -->
    <Keywords></Keywords>
    <!-- 关键字搜索 end -->

    <!-- 食物分类 beg -->
    <foodentry class="foodentry"></foodentry>
    <!-- 食物分类 end -->

    <!-- 广告 beg -->
    <router-link to="/login">
      <qd-img :path="`assets/img/ad.png`"></qd-img>
    </router-link>
    <!-- 广告 end -->
    
    <!-- 热门分类 beg -->
    <hot></hot>
    <!-- 热门分类 end -->
    
    <!-- 推荐商家beg -->
    <recommend></recommend>
    <!-- 推荐商家end -->

  </div>
</template>

<script>
import qdImg from '@/components/common/Img'
import Foodentry from '@/components/independent/home/Foodentry'
import Keywords from '@/components/independent/home/Keywords'
import Hot from '@/components/independent/home/Hot'
import Recommend from '@/components/independent/home/Recommend'
export default {
  components: {
    qdImg,
    Foodentry,
    Keywords,
    Hot,
    Recommend
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
.home{
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
.loadingbar{
  font-size: .6rem;
  color: #999999;
  text-align: center;
  padding: .3rem 0;
}
</style>

