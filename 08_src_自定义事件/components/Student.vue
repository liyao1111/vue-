<template>
  <div class="student">
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <button @click="sendStudentName(this.name)">发送学生名</button>
    <button @click="unbind">解绑事件</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      name: "tom",
      age: 18,
    };
  },
  methods: {
    sendStudentName(name){
      // 触发student组件实例上的getStudentName事件
      this.$emit('getStudentName',name)
      console.log('student发送了name:',name)
    },
    unbind(){
      // eslint-disable-next-line vue/no-deprecated-events-api
      this.$off('getStudentName')
    }
  },
};
</script>

<style scoped>
.student{
    background-color: #bfa;
}
</style>>
