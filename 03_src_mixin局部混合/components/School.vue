<template>
  <h2>{{name}}</h2>
  <h2>{{address}}</h2>
  <button @click="showInfo">click</button>
</template>

<script>
// 引入混合组件
import { hunhe } from '../mixin.js'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'School',
    data() {
        return {
            name:'SchoolAAA',
            address:'beijing'
        }
    },
    mixins:[hunhe]

}
</script>

<style>

</style>