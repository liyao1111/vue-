<template>
  <div class="school">
    <h2 >{{ name }}</h2>
    <h2>{{ address }}</h2>
    <button @click="sendSchoolName(this.name)">发送学校名</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
      name: "SchoolAAA",
      address: "beijing",
    };
  },
  props:['getSchoolName'],
  methods:{
    sendSchoolName(name){
      this.getSchoolName(name)
      console.log('school已发送学校名',name)
    }
  }

};
</script>
<style scoped lang='less'>
.school {
  background-color: skyblue;

}
</style>>

