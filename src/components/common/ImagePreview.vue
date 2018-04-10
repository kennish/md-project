<template>
  <div v-show="value" class="img-preview" @click="updateValue(false)">
    <img :src="path" /> 
  </div>
</template>

<script>
export default {
  props: ['value', 'path'],
  methods: {
    updateValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style>
.img-preview{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, .8);
  display: flex;
  align-items: center;
  z-index: 500;
}
.img-preview img{
  display: block;
  width: 100%;
}
</style>

