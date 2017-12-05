<template>
<div class="">
  <label class="qd-switch">
    <input ref="input" :checked="value" @change="updateValue($event.target.checked)" class="qd-switch-input" type="checkbox" style="display: none;" />
    <span class="qd-switch-core">abc</span>
  </label>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      
    }
  },
  methods: {
    updateValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>


<style>
.qd-switch{
  display: flex;
}
.qd-switch-core{
  font-size: 0.5rem;
  color: #ffffff;
  text-align: left;
  text-indent: .5em;
  display: inline-block;
  position: relative;
  width: 2rem;
  height: .8rem;
  line-height: .8rem;
  border: 1px solid #d9d9d9;
  border-radius: 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #d9d9d9;
}
.qd-switch-core:before{
  content: '***';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fdfdfd;
  border-radius: 1rem;
  transition: transform .3s;
  color: #333333;
  display: flex;
  line-height: .9rem;
  justify-content: flex-end;
  padding-right: .5em;
}
.qd-switch-core:after{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: .7rem;
  height: .7rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,.4);
  transition: transform .3s;
}
.qd-switch-input:checked + .qd-switch-core{
    border-color: #26a2ff;
    background-color: #26a2ff;
}
.qd-switch-input:checked + .qd-switch-core::before {
    -webkit-transform: scale(0);
            transform: scale(0);
}
.qd-switch-input:checked + .qd-switch-core::after {
  -webkit-transform: translateX(1.2rem);
  transform: translateX(1.2rem);
}
</style>
