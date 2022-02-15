<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "../../store/user";

export default defineComponent({
  name: "User",
  props: {},
  setup() {
    const userStore = useUserStore();
    const saveHandle = (e: any) => {
      userStore.updateName(e.target.value);
      e.target.value = "";
    };
    return { userStore, saveHandle };
  },
});
</script>

<template>
  <div class="home">
    <div class="head">
      <h2>我的</h2>
    </div>
    <input type="text" placeholder="我的名字" @keyup.enter="saveHandle" />
    <p>{{ userStore.names }}</p>
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
