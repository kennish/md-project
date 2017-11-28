<template>
  <div class="shoplist-title">{{title}}</div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      
    }
  }
}
</script>

<style>
.shoplist-title{
  height: 1.6rem;
  align-items: center;
  font-size: .7rem;
  color: #000000;
  text-align: center;
  display: flex;
  justify-content: center;
}
.shoplist-title:before{
  display: block;
  content: '';
  width: 1rem;
  height: 1px;
  background: #999999;
  margin-right: .5rem;
}
.shoplist-title:after{
  display: block;
  content: '';
  width: 1rem;
  height: 1px;
  background: #999999;
  margin-left: .5rem;
}
</style>
