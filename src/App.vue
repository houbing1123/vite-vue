<script lang="ts">
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
