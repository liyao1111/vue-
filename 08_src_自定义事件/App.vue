<template>
  <!-- 父组件给子组件传递函数类型props实现字传父 -->
  <School :getSchoolName='getSchoolName'/>
  <hr>
  //父组件给子组件绑定一个自定义事件实现子传父
  <Student v-on:getStudentName='getStudentName'/>
  <!-- <Student ref='student'/> -->
</template>

<script>
import  School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    Student,
    School
  },
  methods:{
    getSchoolName(name){
      console.log('app收到 school name',name)
    },
    getStudentName(name){
      console.log('app_getStudentName触发')
      console.log('app_student学生名为:',name)
    }
  },
  mounted(){
    // console.log(this.$refs.student)
    // this.$refs.student.$on('getStudentName',this.getStudentName)
  }
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
