<template>
  <div class="order main">

    <div style="height: 40px;">
      <qd-header fixed title="发现"></qd-header>
    </div>

    <entry></entry>

    <router-link to="" tag="div" style="margin: .5rem 0;">
      <qd-img :path="`assets/img/ad02.jpg`"></qd-img>
    </router-link>

    <activity></activity>
    <activity></activity>

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
  }
}
</script>


<style>
.order{
  
}
</style>

