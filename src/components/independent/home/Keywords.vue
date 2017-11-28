<template>
  <div class="Keywords">
    <div class="Keywords-wrap">
      <router-link v-for="(item, index) in keyData" :key="index" class="Keywords-link" :to="item.link">{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyData: [
        {
          link: '',
          title: '蛋糕'
        },
        {
          link: '',
          title: '馄饨'
        },
        {
          link: '',
          title: '生煎'
        },
        {
          link: '',
          title: '馒头'
        },
        {
          link: '',
          title: '小面'
        },
        {
          link: '',
          title: '油条豆浆'
        },
        {
          link: '',
          title: '麻辣烫'
        },
        {
          link: '',
          title: '酸辣粉'
        },
        {
          link: '',
          title: '盖浇饭'
        },
        {
          link: '',
          title: '烧烤'
        }
      ]
    }
  }
}
</script>

<style>
.Keywords{
  padding: .2rem .6rem .6rem;
  background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
  background-image: -webkit-linear-gradient(left,#0af,#0085ff);
  background-image: linear-gradient(90deg,#0af,#0085ff);
}
.Keywords-wrap{
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

.Keywords-wrap::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

.Keywords-link{
  font-size: .5rem;
  color: #ffffff;
  margin-right: .7rem;
}
</style>
