<template>
  <div id="app">
    <!-- <transition name="slide-login" mode="">
      <router-view/>
    </transition> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body{
  /* height: 100%;
  overflow-y: auto; */
  background: #f5f5f5;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
  -moz-overflow-scrolling: touch;
  -o-overflow-scrolling: touch;
  overflow-scrolling: touch;
}
body{
  margin: 0;
}
#app {
  /* height: 100%; */
  position: relative;
  overflow-x: hidden;
  /* overflow-y: auto; */
}
@font-face {
  font-family: 'iconfont';  /* project id 476079 */
  src: url('http://at.alicdn.com/t/font_476079_2zrahhzvl0qtcsor.eot');
  src: url('http://at.alicdn.com/t/font_476079_2zrahhzvl0qtcsor.eot?#iefix') format('embedded-opentype'),
  url('http://at.alicdn.com/t/font_476079_2zrahhzvl0qtcsor.woff') format('woff'),
  url('http://at.alicdn.com/t/font_476079_2zrahhzvl0qtcsor.ttf') format('truetype'),
  url('http://at.alicdn.com/t/font_476079_2zrahhzvl0qtcsor.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.slide-login-enter-active,.slide-login-leave-active{
    transition: transform .2s linear;
}
.slide-login-enter{
    transform: translateX(100%);
}
.slide-login-enter-to{
    transform: translateX(0);
}

.slide-login-leave{
    transform: translateX(0);
}
.slide-login-leave-to{
    transform: translateX(-100%);
}
</style>
