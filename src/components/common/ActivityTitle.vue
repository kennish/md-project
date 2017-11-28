<template>
  <div class="at-title">
    <div class="at-title-t">
      <span></span>
      <slot></slot>{{title}}
      <span></span>
    </div>
    <div class="at-title-b">{{msg}}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'icon', 'msg']
}
</script>


<style>
.at-title{
  display: flex;
  background: #ffffff;
  flex-wrap: wrap;
  padding: .8rem 0 .5rem;
}
.at-title-t{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: .8rem;
}
.at-title-t span{
  display: block;
  height: 0;
  width: 1rem;
  border: 1px solid #666666;
  position: relative;
}
.at-title-t span:before{
  content: '';
  display: block;
  width: .3rem;
  height: .3rem;
  background: #666666;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  margin-top: -.15rem;
}
.at-title-t span:first-child{
  margin-right: .5rem;
}
.at-title-t span:last-child{
  margin-left: .5rem;
}
.at-title-t span:first-child:before{
  margin-right: .5rem;
  right: -.8rem;
}
.at-title-t span:last-child:before{
  margin-left: .5rem;
  left: -.8rem;
}
.at-title-t i{
  color: rgb(237, 102, 96);
  margin-right: .2rem;
}
.at-title-b{
  display: flex;
  font-size: .5rem;
  color: #999999;
  width: 100%;
  justify-content: center;
}
</style>
