<template>
  <div class="login-wrap">
    <div class="login-logo">
      <qd-img :path="`assets/img/logo.png`"></qd-img>
    </div>
    <div class="login-nav">
      <router-link exact to="/login">账号登录</router-link>
      <router-link to="/login/registration">账号注册</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import qdImg from '@/components/common/Img'
export default {
  components: {
    qdImg
  }
}
</script>

<style>
.login-wrap{
  background: #ffffff;
  height: 100vh;
  padding: 0 2rem;
  text-align: center;
}
.login-wrap .login-logo{
  display: inline-block;
  width: 6rem;
  margin-top: 2rem;
}
.login-wrap .login-nav{
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.login-wrap .login-nav a{
  font-size: .7rem;
  color: #333333;
  padding-bottom: .2rem;
}
.login-wrap .login-nav a:first-child{
  margin-right: 1rem;
}
.login-wrap .login-nav .is-active{
  color: #2395ff;
  border-bottom: 2px solid #2395ff;
}
</style>

