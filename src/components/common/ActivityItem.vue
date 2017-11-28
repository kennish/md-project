<template>
  <div class="at-item">
    <qd-img :path="path"></qd-img>
    <div class="at-item-title">{{title}}</div>
    <div class="at-item-money">
      {{price}}<slot name="oldPrice"></slot>
    </div>
    <div class="at-item-discount">
      <slot name="discount"></slot>
    </div>
  </div>
</template>

<script>
import qdImg from './Img'
export default {
  components: {
    qdImg
  },
  props: ['price', 'title', 'path']
}
</script>

<style>
.at-item{
  float: left;
  width: 4.7rem;
  margin-right: .45rem;
  margin-bottom: .5rem;
  position: relative;
}
.at-item:last-child{
  margin-right: 0;
}
.at-item .at-item-title{
  font-size: .6rem;
  color: #666666;
  margin-top: .5rem;
}
.at-item .at-item-money{
  font-size: .6rem;
  color: #ff5339;
  margin-top: .5rem;
}
.at-item .at-item-money span{
  margin-left: .2rem;
  font-size: .5rem;
  color: #999999;
  text-decoration: line-through;
}
.at-item-discount{
  font-size: .5rem;
  color: #ffffff;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .6)
}
.at-item-discount>*{
  display: block;
  padding: .1rem .2rem;
}
</style>

