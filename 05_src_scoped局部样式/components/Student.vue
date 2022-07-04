<template>
  <div class="demo">
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
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
};
</script>

<style scoped>
.demo{
    background-color: #bfa;
}
</style>>
