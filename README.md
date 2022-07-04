## ref属性
  1.被用来给元素或子组件注册引用信息（id替代者）
  2.应用在html标签上获取的是真实DOM元素，应用在组件标签上的是组件实例对象（VC）
  3.使用方式：
    打标签 `<h1 ref="xxx"></h1>  <School ref='xxx'/>`
    获取 this.$refs.xxx
   
## props
  1.第一种写法：
  ``` props:['name','sex','age'] ```
  2.第二种写法：接受同时对数据类型限制
  ```
  props:{                
        name:String,
         age:Number,
         sex:String
         }
  ```
  3.接受同时对数据进行类型限定+默认值的指定+必要性的限制
  ```
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
  ```
备注：props是只读的，vue底层会监控，若修改props会触发报警，若有需求修改props则将props复制到data中

## mixin

## plugins

## scoped
作用:让样式在局部生效，防止冲突
写法 `<style scoped lang='less/css'>`

## 总结todoList
1.组件化编程流程：
  （1）拆分静态组件，组件按功能拆分，命名不要与html元素冲突。
  （2）实现动态组件：考虑数据的存放位置，数据是在一个组件用还是多个组件复用：
  &emsp;&emsp;1).一个组价用，放在组件自身
   &emsp;&emsp;2).多个组件复用，放在共同父组件(状态提升)
  （3）实现交互：绑定事件

2.props适用
  （1）父组件==>子组件通信
  （2）子组件==>父组件通信（父给子一个函数）

3.使用v-model切记：v-model绑定的值不能是props传来的值，因为props只读

4.props传来的若是对象，修改对象属性不会报错，但不推荐如此使用

## webStorage
1.存储内容大小一般支持5MB左右
2.浏览器通过window.localStorage和window.sessionStorage实现本地存储机制
3.相关api
&emsp;1.`xxxStorage.setItem('key','value')`
&emsp;&emsp;&emsp;    接收一个键值对，会把键值对添加到存储中，若键名存在则更新其对应的值
&emsp;2.`xxxStorage.getItem('key')`
&emsp;&emsp;&emsp;    接受一个键名，返回键名对应的值
&emsp;3.`xxxStorage.removeItem('key')`
&emsp;&emsp;&emsp;    接受一个键名，将键名从存储中删除
&emsp;4.`xxxStorage.clear()`
&emsp;&emsp;&emsp;    清空存储所有数据
4.备注：
&emsp;    1.sessionStorage存储内容会随着浏览器窗口关闭而消失
&emsp;    2.localStorage存储内容需要手动清除才消失
&emsp;    3.xxxStorage.getItem(xxx)若xxx对应的value获取不到则返回null
&emsp;    4.JSON.parse(null)结果依然为null







  