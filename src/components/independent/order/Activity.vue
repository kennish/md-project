<template>
  <div style="overflow-x: hidden; margin-bottom: .5rem;">
    <activity-title :title="`美食热推`" :msg="`你的美味，我都懂得`">
      <i class="iconfont">&#xe644;</i>
    </activity-title>
    <div class="at-wrap clear">
      <activity-item :title="`1元的美式哦`" :price="`￥1`" :path="`assets/img/at01.png`">
        <span slot="discount">限时优惠</span>
        <span slot="oldPrice">￥24.9</span>
      </activity-item>
      <activity-item :title="`2元的美式哦`" :price="`￥2`" :path="`assets/img/at01.png`">
      </activity-item>
      <activity-item :title="`1元的美式哦`" :price="`￥1`" :path="`assets/img/at01.png`">
        <span slot="oldPrice">￥24.9</span>
      </activity-item>
    </div>
  </div>
</template>

<script>
import ActivityTitle from '@/components/common/ActivityTitle'
import ActivityItem from '@/components/common/ActivityItem'
export default {
  components: {
    ActivityTitle,
    ActivityItem
  }
}
</script>

<style>
.at-wrap{
  padding: .5rem .5rem 0;
  margin-right: -.45rem;
  background: #ffffff;
}
</style>

