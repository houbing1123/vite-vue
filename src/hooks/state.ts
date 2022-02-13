import { ref } from "vue";

export const useState = () => {
  const state = ref<string[]>([]);
  const setState = (v: string) => state.value.push(v);
  return {
    state,
    setState,
  };
};
