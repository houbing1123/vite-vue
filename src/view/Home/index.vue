<script lang="ts">
import { defineComponent } from "vue";
import "./home.scss";
import TodoList from "../../components/TodoList/index.vue";
export default defineComponent({
  name: "Home",
  props: {},
  setup() {},
  components: { TodoList },
});
</script>

<template>
  <div class="home">
    <div class="head">
      <h2>首页</h2>
    </div>
    <TodoList />
  </div>
</template>

<style scoped lang="scss">
.head {
  background-color: red;
  h2 {
    color: white;
  }
}
</style>
