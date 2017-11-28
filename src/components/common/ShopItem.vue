<template>
  <div class="shop-item">
    <div class="shop-info">
      <div class="shop-logo">
        <qd-img :path="data.path"></qd-img>
      </div>

      <div class="shop-show">

        <div class="shop-title">
          <div class="shop-title-l">
            <i v-if="data.brand">品牌</i>{{data.title}}
          </div>
          <div class="shop-title-r">
            <span v-for="(item, index) in data.support" :key="index">{{item}}</span>
          </div>
        </div>

        <div class="shop-rate">
          <div class="shop-rate-l">月售{{data.transaction}}单</div>
          <div class="shop-rate-r">{{data.distribution}}</div>
        </div>

        <div class="shop-money">
          <div class="shop-money-l">
            <span>￥{{data.moneylimit}}元起送</span> | 
            <span>配送费￥{{data.serviceFee}}</span>
          </div>
          <div class="shop-money-r">
            <span>{{data.distance}}</span> | 
            <span>{{data.takeTime}}分钟</span>
          </div>
        </div>

      </div>

    </div>

    <div class="shop-activity">
      <div class="tag-line">
        <span v-if="data.tagline == 1" class="good"><i class="iconfont">&#xe64a;</i>口碑人气好店</span>
        <span v-if="data.tagline == 2" class="ad"><i class="iconfont">&#xe672;</i>广告</span>
      </div>
      <abbr class="cut-off"></abbr>
      <div class="activities">
        <div :class="`activities-l ${show ? 'packUp':''}`">
          <div class="act-row" v-for="(item, index) in data.activities" :key="index">
            <span>{{item.tag}}</span>{{item.msg}}
          </div>
        </div>
        <div class="activities-r" v-if="data.activities.length > 2" @click="open">
          {{data.activities.length}}个活动<i class="iconfont" :style="`float: right; transition: all .3s linear; transform: rotate(${show ? '0deg': '180deg'});`">&#xe661;</i>
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
  props: ['data'],
  data () {
    return {
      show: false
    }
  },
  created () {
    if(this.data.activities.length > 2){
      this.show = true;
    }
  },
  methods: {
    open () {
      this.show = !this.show;
    }
  }
}
</script>

<style>
.shop-item{
  padding: .7rem .5rem;
  border-bottom: 1px solid #eeeeee;
}
.shop-info{
  display: flex;
}
.shop-info .shop-logo{
  width: 3rem;
  height: 3rem;
  border: 1px solid #f1f1f1;
  border-radius: 3px;
}
.shop-info .shop-show{
  display: flex;
  flex: 1;
  padding-left: .5rem;
  flex-wrap: wrap;
  align-content: flex-start;
}
.shop-info .shop-show .shop-title{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: .2rem;
}
.shop-info .shop-show .shop-title .shop-title-l{
  display: flex;
  font-size: .7rem;
  color: #333333;
  font-weight: 700;
}
.shop-info .shop-show .shop-title .shop-title-l i{
  display: flex;
  align-items: center;
  font-style: normal;
  font-size: .5rem;
  margin-right: .2rem;
  color: rgba(148, 107, 19, 1);
  background: rgba(255, 239, 9, 1);
}
.shop-info .shop-show .shop-title .shop-title-r{
  display: flex;
}
.shop-info .shop-show .shop-title .shop-title-r span{
  color: #999999;
  font-size: .5rem;
  margin-left: .3rem;
}
.shop-info .shop-show .shop-title .shop-title-r span:first-child{
  margin-left: 0;
}

.shop-rate{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: .3rem;
}
.shop-rate .shop-rate-l{
  font-size: .5rem;
  color: #666666;
}
.shop-rate .shop-rate-r{
  font-size: .5rem;
  color: #ffffff;
  background: rgba(0, 159, 255, .8);
  padding: .1rem;
  border-radius: 3px;
}

.shop-money{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: .5rem;
  margin-top: .3rem;
}
.shop-money .shop-money-l{
  color: #999999;
}
.shop-money .shop-money-l span{
  color: #666666;
}
.shop-money .shop-money-r{
  color: #999999;
}
.shop-money .shop-money-r span{
  color: #999999;
}

.shop-activity{
  padding-left: 3rem;
}
.shop-activity .tag-line{
  padding-left: .5rem;
  font-size: .5rem;
  display: flex;
  align-items: center;
  margin-top: .3rem;
  margin-bottom: .3rem;
}
.shop-activity .tag-line .good{
  color: rgb(232, 71, 11);
}
.shop-activity .tag-line span i{
  font-size: .6rem;
  margin-right: .2rem;
}
.shop-activity .tag-line .ad{
  color: #999999;
}
.cut-off{
  display: block;
  margin-left: .5rem;
  border-top: 1px dotted #ddd;
}

.activities{
  margin-top: .3rem;
  padding-left: .5rem;
  display: flex;
  justify-content: space-between;
}
.activities .activities-l{
  overflow: hidden;
  height: auto;
  transition: all .3s linear;
  -webkit-transition: all .3s linear;
}
.activities .activities-l.packUp{
  height: 2rem;
}
.activities .activities-l .act-row{
  font-size: .5rem;
  color: #666666;
  height: .7rem;
  margin-bottom: .3rem;
  display: flex;
  align-items: center;
}
.activities .activities-l .act-row:last-child{
  margin-bottom: 0;
}
.activities .activities-l .act-row span{
  margin-right: .2rem;
  background: rgb(240, 115, 115);
  color: #ffffff;
  border-radius: 3px;
  padding: 1px;
}
.activities .activities-l .act-row:first-child span{
  background: rgb(112, 188, 70);
}
.activities .activities-r{
  font-size: .5rem;
  color: #999999;
}
.activities .activities-r i{
  font-size: .3rem;
  margin-left: .3rem;
}
</style>

