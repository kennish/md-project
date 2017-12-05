<template>
  <div class="about">

    <div style="height: 40px;">
      <qd-header fixed title="我的"></qd-header>
    </div>

    <!-- 登录信息beg -->
    <router-link :to="{path: '/login', query: {redirect: 'about'}}" tag="div" class="profile" v-if="login == false">
      <div class="profile-l">
        <div class="portrait">
          <i class="iconfont">&#xe6f1;</i>
        </div>
        <div class="not-login">
          <div class="not-login-t">登录/注册</div>
          <div class="not-login-d">
            <i class="iconfont">&#xe64a;</i>登陆后享受更多特权
          </div>
        </div>
      </div>
      <div class="profile-r">
        <i class="iconfont">&#xe661;</i>
      </div>
    </router-link>

    <router-link to="" tag="div" class="profile" v-if="login == true">
      <div class="profile-l">
        <div class="portrait">
          <i class="iconfont">&#xe6f1;</i>
        </div>
        <div class="not-login">
          <div class="not-login-t">{{user.username}}</div>
          <div class="not-login-d">
            <i class="iconfont">&#xe64a;</i>{{user.phone | phone}}
          </div>
        </div>
      </div>
      <div class="profile-r">
        <i class="iconfont">&#xe661;</i>
      </div>
    </router-link>
    <!-- 登录信息end -->

    <!-- 优惠、金币beg -->
    <div class="about-info">
      <div class="about-info-item">
        <p><i class="iconfont">&#xe6e0;</i></p>
        <p>优惠</p>
      </div>
      <div class="about-info-item">
        <p><i class="iconfont">&#xe6ed;</i></p>
        <p>金币</p>
      </div>
    </div>
    <!-- 优惠、金币end -->
    
    <div class="cell-wrap">
      <cell title="我的地址" style="margin-top: .5rem;">
        <i class="iconfont" slot="icon" style="vertical-align: middle;">&#xe651;</i>
        <span class="iconfont cell-icon-r">&#xe661;</span>
      </cell>
    </div>

    <div class="cell-wrap">
      <cell title="金币商城" style="margin-top: .5rem;">
        <i class="iconfont" slot="icon" style="vertical-align: middle;">&#xe6ed;</i>
        <span class="iconfont cell-icon-r">&#xe661;</span>
      </cell>
      <cell title="分享拿5元现金">
        <i class="iconfont" slot="icon" style="vertical-align: middle;">&#xe77d;</i>
        <span class="iconfont cell-icon-r">&#xe661;</span>
      </cell>
    </div>

    <div class="cell-wrap">
      <cell title="我的客服" style="margin-top: .5rem;">
        <i class="iconfont" slot="icon" style="vertical-align: middle;">&#xe6ff;</i>
        <span class="iconfont cell-icon-r">&#xe661;</span>
      </cell>
      <cell title="下载app">
        <i class="iconfont" slot="icon" style="vertical-align: middle;">&#xe675;</i>
        <span class="iconfont cell-icon-r">&#xe661;</span>
      </cell>
    </div>
    

  </div>
</template>

<script>
import { Header, Cell } from 'mint-ui'
export default {
  components: {
    'qd-header': Header,
    Cell
  },
  data () {
    return {
      login: false,
      user: {
        username: '',
        phone: '13636366666'
      }
    }
  },
  created () {
    let info = this.$local.fetch('user');
    if (info.token) {
      this.login = true;
      this.user.username = info.username;
    }
  },
  methods: {
    
  },
  filters: {
    phone (n) {
      return n.substring(0, 3) + " **** " + n.substring(7, n.length)
    }
  }
}
</script>

<style>
.about{
  /* min-height: 100vh; */
}
.profile{
  display: flex;
  justify-content: space-between;
  background: #26a2ff;
  padding: 1rem .8rem;
}
.profile .profile-l{
  display: flex;
  flex: 1;
  align-items: center;
}
.profile .profile-l .portrait{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  background: #f1f1f1;
  border-radius: 50%;
  margin-right: .5rem;
}
.profile .profile-l .portrait i{
  font-size: 2rem;
  color: #dddddd;
}
.profile .profile-l .not-login{
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
}
.profile .profile-l .not-login .not-login-t{
  width: 100%;
  font-size: .8rem;
  color: #ffffff;
  display: flex;
}
.profile .profile-l .not-login .not-login-d{
  width: 100%;
  font-size: .6rem;
  color: #ffffff;
  margin-top: .4rem;
  display: flex;
  align-items: center;
}
.profile .profile-l .not-login .not-login-d i{
  font-size: .6rem;
}
.profile .profile-r{
  display: flex;
  width: 1rem;
  align-items: center;
}
.profile .profile-r i{
  font-size: .6rem;
  color: #ffffff;
  transform: rotate(-90deg)
}

.about-info{
  display: flex;
  background: #ffffff;
}
.about-info .about-info-item{
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding: .6rem 0;
  border-bottom: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
}
.about-info .about-info-item:last-child{
  border-right: none;
}
.about-info .about-info-item p{
  justify-content: center;
  display: flex;
  width: 100%;
  font-size: .6rem;
}
.about-info .about-info-item p:first-child{
  margin-bottom: .4rem;
}
.about-info .about-info-item i{
  color: rgb(237, 102, 96)
}

.cell-wrap{
  color: #777777;
}
.cell-icon-r{
  font-size: .6rem;
  color: #cccccc;
  transform: rotate(-90deg)
}
</style>
