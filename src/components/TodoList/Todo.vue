<template>
  <input type="text" @keyup.enter="keyHandle" />
  <hr />
  <ul>
    <li v-for="(item, index) in state" :key="index">{{ item }}</li>
  </ul>
</template>
<script setup lang="ts">
import { useState } from "../../hooks/state";
const { state, setState } = useState();
const keyHandle = (e: any) => {
  setState(e.target.value);
  e.target.value = "";
};
</script>
