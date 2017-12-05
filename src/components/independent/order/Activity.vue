<template>
  <div style="overflow-x: hidden; margin-bottom: .5rem;">
    <activity-title :title="data.headers.title" :msg="data.headers.msg">
      <i class="iconfont" v-if="data.headers.icon" v-html="data.headers.icon"></i>
    </activity-title>
    <div class="at-wrap clear">
      <activity-item v-for="(item, index) in data.list" :key="index" :title="item.title" :price="`￥${item.price}`" :path="item.path">
        <span v-if="item.discount" slot="discount">{{item.discount}}</span>
        <span v-if="item.oldPrice" slot="oldPrice">￥{{item.oldPrice}}</span>
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
  },
  props: ['data']
}
</script>

<style>
.at-wrap{
  padding: .5rem .5rem 0;
  margin-right: -.45rem;
  background: #ffffff;
}
</style>

