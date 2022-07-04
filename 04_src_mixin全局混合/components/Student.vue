<template>
<h2>name:{{name}}</h2>
<h2>age:{{age}}</h2>
<button @click="showInfo">click</button>

</template>

<script>
// import {hunhe} from '../mixin.js'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Student",
    data() {
        return {
           name:'tom',
           age:18
        }
    },
    // mixins:[hunhe]
}

</script>

<style>

</style>