<template>
  <aside class="filter">
    <div class="filter-header">
      <div :class="`filter-nav ${num == 0? 'isactive':''}`" @click="tab(0)">
        分类<i class="iconfont">&#xe661;</i>
      </div>
      <div :class="`filter-nav ${num == 1? 'isactive':''}`" @click="tab(1)">
        综合排序<i class="iconfont">&#xe661;</i>
      </div>
      <div :class="`filter-nav ${num == 2? 'isactive':''}`" @click="tab(2)">
        筛选<i class="iconfont">&#xe661;</i>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div class="filter-extend" v-show="num == 0">
        <slot name="category"></slot>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="filter-extend" v-show="num == 1">
        <slot name="sort"></slot>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="filter-extend" v-show="num == 2">
        <slot name="filter"></slot>
      </div>
    </transition>
    <transition name="fade">
      <div class="filter-mask" v-show="num != null" @click="hideAll"></div>
    </transition>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      num: null
    }
  },
  methods: {
    tab (n) {
      if (this.num == n) {
        this.num = null;
        document.body.className = '';
      } else {
        this.num = n;
        document.body.className = 'lock-position';
      }
    },
    hideAll () {
      this.num = null;
      document.body.className = '';
    }
  }
}
</script>

<style>
.filter{
  height: 1.8rem;
  position: relative;
  z-index: 100;
}
.filter .filter-header{
  display: flex;
  background: #ffffff;
  height: 100%;
  border-bottom: 1px solid #eeeeee;
  box-sizing: border-box;
}
.filter .filter-header .filter-nav{
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: .6rem;
  color: #666666;
}
.filter .filter-header .filter-nav i{
  font-size: .5rem;
  margin-left: .2rem;
  transition: transform .3s;
}
.filter .filter-header .filter-nav.isactive{
  color: #3190e8;
}
.filter .filter-header .filter-nav.isactive i{
  transform: rotate(180deg);
}
.filter .filter-extend{
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
}
.filter .filter-mask{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: rgba(0,0,0,.2)
}

.lock-position{
  height: 100%;
  overflow: hidden;
  width: 100%;
  position: fixed;
}
</style>
