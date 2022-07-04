<template>
  <div class="todo-container">
    <Header :receive="receive" />
    <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
    <Footer :todos="todos" :clearTodos="clearTodos" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: "001", title: "吃饭", done: false },
        { id: "002", title: "喝酒", done: true },
        { id: "003", title: "抽烟", done: false },
        { id: "004", title: "开车", done: true },
      ],
    };
  },
  components: {
    Header,
    List,
    Footer,
  },
  methods: {
    // 添加todo
    receive(todo) {
      this.todos.unshift(todo);
    },
    // 勾选/取消勾选todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除
    deleteTodo(id) {
      console.log("delete调用:", id);
      this.todos.forEach((todo, index) => {
        if (todo.id === id) {
          if (confirm("确认删除？")) {
            this.todos.splice(index, 1);
          }
        }
      });
    },
    // 清除已完成
    clearTodos(){
      this.todos.forEach((todo,index) => { 
        if(todo.done){
          this.todos.splice(index,1)
        }
       })
    }
  },
};
</script>

<style>
body {
  background-color: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: insert 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.5);
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-daner:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
</style>
