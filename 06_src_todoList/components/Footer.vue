<template>
  <div class="todo-footer">
    <label for="">
      <input type="checkbox" :checked='isAll' @change='checkAll'/>
    </label>
    <span> <span>{{doneTodos}}</span>/{{ todos.length }}</span>
    <button class="btn btn-danger" @click="clearDone">清除已完成</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  props:['todos','clearTodos'],
  methdos:{
  },
  computed:{
    doneTodos(){
      let count = 0
      this.todos.map((todo) => { 
        if(todo.done){
          count++
        }
    })
      return(
        count
      )
    },
    isAll(){
      if(this.todos.length ===0){
         return false
      }
      else{
        return this.doneTodos===this.todos.length
      }
      
    }
  },
  methods:{
    checkAll(e){
      const check = e.target.checked
      this.todos.forEach((item) => { 
        item.done =check
       })
    },
    clearDone(){
      this.clearTodos()
    }

  }
};
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 2px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>