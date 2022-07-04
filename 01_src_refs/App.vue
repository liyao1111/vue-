<template>
  <School ref="sch"/>
  <input ref="input"/>
  <button ref="btn" @click="showInfo">click</button>
  
</template>

<script>
import School from './components/School.vue'
export default {
  name: 'App',
  components: {
    School,
  },
  methods: {
    showInfo(){
      console.log(this.$refs)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
