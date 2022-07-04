<template>
  <ul class="todo-main">
    <Item
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todoObj="todoObj"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script>
import Item from "./Item.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  data() {
    return {};
  },
  props: ["todos", "checkTodo","deleteTodo"],
  components: {
    Item,
  },
};
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
</style>