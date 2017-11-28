<template>
  <div class="entry-item">
    <div class="entry-item-l">
      <h4 :style="`color: ${data.color}`">{{data.title}}</h4>
      <span>{{data.description}}</span>
    </div>
    <div class="entry-item-r">
      <qd-img :path="data.imgPath"></qd-img>
    </div>
  </div>
</template>

<script>
import qdImg from './Img'
export default {
  props: ['data'],
  components: {
    qdImg
  }
}
</script>

<style>
.entry-item{
  display: flex;
  width: 50%;
  height: 4rem;
  box-sizing: border-box;
  background: #ffffff;
  justify-content: space-between;
  align-items: center;
  padding: 0 .5rem;
}
.entry-item:nth-of-type(1){
  border-right: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
}
.entry-item:nth-of-type(2){
  border-bottom: 1px solid #ededed;
}
.entry-item:nth-of-type(3){
  border-right: 1px solid #ededed;
}
.entry-item-l{}
.entry-item-l h4{
  font-weight: normal;
  font-size: .8rem;
  color: rgb(255, 153, 0);
  margin-bottom: .3rem;
}
.entry-item-l span{
  display: block;
  font-size: .5rem;
  color: #666666;
}
.entry-item-r{}
.entry-item-r img{}
</style>

