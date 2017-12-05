<template>
  <div class="discover">

    <div style="height: 40px;">
      <qd-header fixed title="发现"></qd-header>
    </div>

    <entry></entry>

    <router-link to="" tag="div" style="margin: .5rem 0;">
      <qd-img :path="`assets/img/ad02.jpg`"></qd-img>
    </router-link>

    <activity :data="activityData"></activity>
    <activity :data="activityData"></activity>

  </div>
</template>

<script>
import { Header } from 'mint-ui'
import Entry from '@/components/independent/order/Entry'
import qdImg from '@/components/common/Img'
import Activity from '@/components/independent/order/Activity'
export default {
  components: {
    'qd-header': Header,
    Entry,
    qdImg,
    Activity
  },
  data () {
    return {
      activityData: {
        headers: {
          title: '美食热推',
          msg: '你的美味，我都懂得1',
          icon: '&#xe644;'
        },
        list: [
          {
            title: '1元的美式哦',
            path: 'assets/img/at01.png',
            price: '1',
            oldPrice: '24.9',
            discount: '限时优惠'
          },
          {
            title: '9.9元吃嗨午餐',
            path: 'assets/img/at01.png',
            price: '9.9',
            oldPrice: '30',
            discount: '超值'
          },
          {
            title: '8折狂欢',
            path: 'assets/img/at01.png',
            price: '6.6',
            oldPrice: '15',
            discount: '折上折'
          }
        ]
      }
    }
  }
}
</script>


<style>

</style>

