<template>
  <img :src="require('@/'+path)"/>
</template>

<script>
export default {
  props: ['path'],
  data() {
    return {

    }
  }
}
</script>

<style>
img{
  display: block;
  width: 100%;
}
</style>
