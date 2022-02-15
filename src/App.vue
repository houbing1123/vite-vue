<script lang="ts">
//vue3的数据写法有目前两种比较好用的，一种是直接在script标签中写setup代表组件创建时执行，可理解为像vue2版本中，created钩子作用，第二种写法就是在export default中直接定义参数就可，具体写法看组件与页面
import { ref } from "vue";
import "./scss/index.scss";
export default {
  setup() {},
};
</script>

<template>
  <router-view></router-view>
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/list" icon="label-o">列表</van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="more-o">关于</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style>
/* @import "./scss/index.less"; */
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
