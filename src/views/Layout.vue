<template>
  <div class="content">
    <!-- <transition :name="transitionName" mode="in-out">
      <router-view></router-view>
    </transition> -->
    <router-view class="main"></router-view>
    <tabbar style="z-index: 1" v-model="selected">
      <tab-item id="/" @click.native="to">
        <i slot="icon" class="iconfont">&#xe6b8;</i>
        首页
      </tab-item>
      <tab-item id="/order" @click.native="to">
        <i slot="icon" class="iconfont">&#xe67e;</i>
        发现
      </tab-item>
      <tab-item id="/discover" @click.native="to">
        <i slot="icon" class="iconfont">&#xe66c;</i>
        订单
      </tab-item>
      <tab-item id="/about" @click.native="to">
        <i slot="icon" class="iconfont">&#xe6f1;</i>
        我的
      </tab-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem  } from 'mint-ui'
export default {
  components: {
    Tabbar,
    TabItem
  },
  data () {
    return {
      selected: '',
      transitionName: 'slide-left'
    }
  },
  created () {
    this.selected = this.$route.path;
  },
  methods: {
    to () {
      this.$router.push(this.selected)
    }
  },
  watch: {
    '$route' (to, from) {
      this.selected = this.$route.path;
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      const  toIndex = to.meta.index;
      const fromIndex = from.meta.index;
      if (toDepth == fromDepth) { // 表示路由同级
        this.transitionName = toIndex < fromIndex ? 'slide-left' : 'slide-right'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content{
  width: 100%;
  height: 100%;
}
.main{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 60px;
}
.iconfont{
  font-size: 24px;
}

.slide-left-enter-active,.slide-left-leave-active, .slide-right-enter-active,.slide-right-leave-active{
    transition: transform .3s ease-in-out;
}
.slide-left-enter{
    transform: translateX(-100%);
}
.slide-left-enter-to{
    transform: translateX(0);
}

.slide-right-leave{
    transform: translateX(0);
}
.slide-right-leave-to{
    transform: translateX(-100%);
}

.slide-right-enter{
    transform: translateX(100%);
}
.slide-right-enter-to{
    transform: translateX(0);
}

.slide-right-leave{
    transform: translateX(0);
}
.slide-right-leave-to{
    transform: translateX(-100%);
}
</style>
