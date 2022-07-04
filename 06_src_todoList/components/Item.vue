<template>
  <li>
    <label for="">
      <!-- 第一种写法，层层传递 -->
      <input type="checkbox" :checked='todoObj.done' @change="handleCheck(todoObj.id)" />
      <!-- 第二种写法 -->
      <!-- 为什么修改props不报错？
            因为未修改todoObj的结构只修改了内部一属性 
      -->
      <!-- <input type="checkbox"  v-model="todoObj.done"> -->
      <span>{{todoObj.title}}</span>
    </label>
    <button class="btn  btn-danger" @click="handleDelete(todoObj.id)" >删除</button>
  </li>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Item",
  props: ['todoObj','checkTodo','deleteTodo'],
  data() {
    return {
      // todos:this.todoObj
    };
  },
  components: {},
  methods: {
    handleCheck(id){
      this.checkTodo(id)
    },
    handleDelete(id){
      console.log('id:',id)
      this.deleteTodo(id)
    }
  },
};
</script>

<style scoped>
.btn{
  display: none;
}
li {
  list-style: none;
  height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
</style>