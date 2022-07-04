<template>
  <Student name='tom' :age=18 sex='male'/>
  <hr>
  <Student name='alice'  sex='female'/>

  
</template>

<script>
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    Student,
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
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
