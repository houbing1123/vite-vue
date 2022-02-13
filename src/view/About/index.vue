<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "About",
  props: {},
  setup() {},
});
</script>

<template>
  <div class="home">
    <div class="head">
      <h2>关于</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.head {
  background-color: red;
  h2 {
    color: white;
    text-align: center;
  }
}
</style>
