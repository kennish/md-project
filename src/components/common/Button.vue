<template>
  <div class="qd-button-cell">
    <button @click="submit" class="qd-btn" :style="`background: ${background}`">{{title}}</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'background'],
  methods: {
    submit () {
      this.$emit('click')
    }
  }
}
</script>

<style>
.qd-button-cell{
  margin-bottom: .5rem;
}
.qd-button-cell .qd-btn{
  width: 100%;
  height: 2rem;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: .8rem;
  color: #ffffff;
}
</style>
