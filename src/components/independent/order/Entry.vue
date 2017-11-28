<template>
  <div class="entry">
    <entry-item v-for="(item, index) in entryData" :key="index" :data="item"></entry-item>
  </div>
</template>

<script>
import EntryItem from '@/components/common/EntryItem'
export default {
  components: {
    EntryItem
  },
  data () {
    return {
      entryData: [
        {
          title: '金币商城',
          color: 'rgb(255, 153, 0)',
          description: '0元好物在这里',
          imgPath: 'assets/img/entry01.jpg'
        },
        {
          title: '必吃爆料',
          color: 'rgb(245, 120, 93)',
          description: '最穷外卖指南',
          imgPath: 'assets/img/entry01.jpg'
        },
        {
          title: '推荐有奖',
          color: 'rgb(27, 169, 225)',
          description: '5元奖励拿不停',
          imgPath: 'assets/img/entry01.jpg'
        },
        {
          title: '周边优惠',
          color: 'rgb(237, 102, 96)',
          description: '领取口碑好券',
          imgPath: 'assets/img/entry01.jpg'
        }
      ]
    }
  }
}
</script>

<style>
.entry{
  display: flex;
  flex-wrap: wrap;
}
</style>

