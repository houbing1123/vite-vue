<script lang="ts">
import { defineComponent } from "vue";
import Ss from "../../components/liu/ss.vue";
export default defineComponent({
  name: "About",
  props: {},
  setup() {},
  components: { Ss },
});
</script>

<template>
  <div class="home">
    <div class="head">
      <h2>关于</h2>
    </div>
    <Ss></Ss>
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
