<template>
  <div>{{ bb }}</div>
  <button @click="bb++">++</button>
</template>
<script setup lang="ts">
import { ref } from "vue";
let bb = ref(0);
</script>
<script lang="ts">
export default {
  name: "Ss",
};
</script>
