<template>
  <div class="demo">
    <h2 class="title">{{ name }}</h2>
    <h2>{{ address }}</h2>
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
};
</script>
<style scoped lang='less'>
.demo {
  background-color: red;
  .title{
    background-color: aqua;
  }

}
</style>>

