<template>
<h1>{{msg}}</h1>
<h2>name:{{name}}</h2>
<h2>age:{{age*+1}}</h2>
<h2>sex:{{sex}}</h2>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Student",
    data() {
        return {
            msg:'i am a student',
        }
    },
    // props:['name','sex','age'] 第一种写法
    // 
    // props:{              第二种  接受同时对数据类型限制
    //     name:String,
    //     age:Number,
    //     sex:String
    // }
    // 第三种完整写法 ： 接受同时对数据进行类型限定+默认值的指定+必要性的限制
    props:{
        name:{
            type:String,  //name类型字符
            required:true // name是必要的
        },
        age:{
            type:Number,
            default:30 //默认值
        },
        sex:{
            type:String,
            required:true
        }
    }
}

</script>

<style>

</style>