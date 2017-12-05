<template>
  <div class="input-cell">
    <input class="input-txt" :type="isType" :value="value" @input="updateValue($event.target.value)" :placeholder="placeholder" />
     <div class="SwitchButton">
       <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'type', 'placeholder'],
  data () {
    return {
      isType: 'text'
    }
  },
  created () {
    if(this.type){
      this.isType = this.type;
    }
    
  },
  watch: {
    type () {
      if(this.type){
        this.isType = this.type;
      }
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
.input-cell{
  position: relative;
  margin-bottom: .5rem;
}
.input-cell .input-txt{
  display: block;
  width: 100%;
  height: 2rem;
  background: none;
  border: 1px solid #dddddd;
  border-radius: 4px;
  box-sizing: border-box;
  padding-left: .5rem;
  font-size: .7rem;
}
.input-cell .input-txt:focus{
  border-color: #0089dc;
}
.input-cell .SwitchButton{
  position: absolute;
  right: .5rem;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}
</style>

