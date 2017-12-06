<template>
  <div class="order">

    <div style="height: 40px;">
      <qd-header fixed title="订单"></qd-header>
    </div>

    <div class="not-login" v-if="login == false">
      <div class="not-login-icon">
        <qd-img :path="`assets/img/not-login.gif`"></qd-img>
      </div>
      <div class="not-login-msg">登录后查看外卖订单</div>
      <router-link :to="{path: '/login', query: {redirect: 'order'}}">
        <qd-button type="primary" size="small" style="background: #56d176;">立即登录</qd-button>
      </router-link>
    </div>

    <div class="has-login" v-if="login == true">
      <div class="order-header">
        <div class="order-header-l">我的订单</div>
        <div class="order-header-r">全部订单<i class="iconfont">&#xe6a3;</i></div>
      </div>
      <order-item></order-item>
      <order-item></order-item>
      <order-item></order-item>
      <order-item></order-item>
      <order-item></order-item>
    </div>

  </div>  
</template>

<script>
import {Header, Button} from 'mint-ui'
import qdImg from '@/components/common/Img'
import OrderItem from '@/components/common/OrderItem'
export default {
  components: {
    'qd-header': Header,
    'qd-button': Button,
    qdImg,
    OrderItem
  },
  data () {
    return {
      login: false
    }
  },
  created () {
    let info = this.$local.fetch('user');
    if(info.token) {
      this.login = true;
    }
  },
  methods: {
    toLogin () {

    }
  }
}
</script>

<style>
.order{
  
}
.order .has-login{
  background: #ffffff;
}
.order .not-login{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 3rem;
}
.not-login-icon{
  width: 10rem;
}
.order .not-login .not-login-msg{
  width: 100%;
  text-align: center;
  font-size: .8rem;
  color: #666666;
  margin-bottom: .5rem;
}

.order-header{
  display: flex;
  justify-content: space-between;
  color: #333333;
  padding: 0 .5rem;
  padding-top: .5rem;
}
.order-header .order-header-l{
  font-size: .6rem;
}
.order-header .order-header-r{
  font-size: .5rem;
  color: #26a2ff;
}
.order-header .order-header-r i{
  font-size: .5rem;
}
</style>
