<template>
<div class="todo-header">
    <input placeholder="输入任务名称，回车键确认" @keyup.enter="addTodo">
</div>
  
</template>

<script>
import { nanoid} from 'nanoid'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Header",
    methods:{
        addTodo(e){
            if(!e.target.value.trim()){
                alert('输入不可为空')
                return 
            }
           const todo ={id:nanoid(),title:e.target.value,done:false}
        //    console.log(todo)
           this.receive(todo)
           e.target.value= ' '
        }
    },
    props:['receive']
}
</script>

<style scoped>
.todo-header input{
    width: 585px;
    height: 28px;
    font-size:14px;
    border:1px solid #ccc;
    border-radius: 4px;
    padding:4px 7px;
}
.todo-header input:focus{
    outline:none;
    border-color: rgba(82,168,236,0.8);
    box-shadow: insert 0 1px 1px rgba(0,0,0,0.875),0 0 8px rgba(82,168,236,0.6);
}
</style>