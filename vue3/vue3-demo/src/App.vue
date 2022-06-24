<template>
  <p>当前鼠标x:{{mouse.x}}</p>
  <p>当前鼠标x:{{mouse.y}}</p>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="msg"/>
  <button @click="saySetup">Click me</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {onMounted, onUnmounted, reactive, ref} from "vue";

export default {
  name: 'App',
  props: {
    testProp: String
  },
  // 1.setup组合API的起点
  // 2.可以理解为beforeCreate钩子函数前执行
  // 3.setup中不能使用this , 因为组件还没有实例化
  // 4. 模板中需要使用的数据和函数, 需要在setup中返回
  // 5. props 为父组件传递的属性
  setup(props) {
    console.log('setup start');
    console.log(props);
    const msg = 'setup vue3';
    // 挂载生命周期钩子函数
    onMounted(() => {
      console.log('mounted');
    });

    // 鼠标移动逻辑组件
    // 定义响应式数据1
    const mouse = reactive({
      x: 0,
      y: 0
    });
    // 定义响应式数据-单个数据 Ref.value
    const refValue = ref(2);
    console.log(refValue.value);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    };
    onMounted(() => {
      document.addEventListener('mousemove', handleMouseMove)
    });
    onUnmounted(() => {
      document.removeEventListener('mousemove', handleMouseMove)
    });
    let saySetup = function () {
      console.log('setup');
      mouse.x = 0;
      mouse.y = 0;
    };

    // 模板中需要使用的数据和函数 需要在setup中返回
    return {msg, saySetup,mouse};
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  components: {
    HelloWorld
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
