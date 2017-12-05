<template>
  <div class="login">
    <qd-input v-model="username" placeholder="手机/邮箱/用户名"></qd-input>
    <qd-input v-model="userpaws" :type="checked ? 'text' : 'password'" placeholder="密码">
      <qd-switch slot="right" v-model="checked"></qd-switch>
    </qd-input>
    <qd-button style="margin-top: 1rem;" title="登录" background="#4cd96f" @click="submit"></qd-button>
    <popup style="width: 100%; padding: .7rem 0; background: rgba(0, 0, 0, .6); color: #ffffff; font-size: .7rem;" 
    v-model="popupVisible" position="top" :closeOnClickModal="false">
      <p>登录成功!</p>
    </popup>
  </div>
</template>

<script>
import { Popup } from 'mint-ui';
import qdSwitch from '@/components/common/Switch'
import qdInput from '@/components/common/Input'
import qdButton from '@/components/common/Button'
export default {
  components: {
    qdSwitch,
    qdInput,
    qdButton,
    Popup
  },
  data () {
    return {
      popupVisible: false,
      checked: false,
      username: '',
      userpaws: ''
    }
  },
  created () {
    this.popupVisible = false
  },
  methods: {
    submit () {
      this.$local.save('user', {
        username: this.username,
        token: 'qindong123456789'
      });
      this.popupVisible = true
      setTimeout(() => {
        this.popupVisible = false
        let path = this.$route.query.redirect;
        if (path) {
          this.$router.push('/'+path)
        } else {
          this.$router.push('/')
        }
      }, 2000)
    }
  }
}
</script>

<style>
.login{
  padding-top: 1rem;
}
.login .v-modal{
  opacity: 0;
}
</style>

