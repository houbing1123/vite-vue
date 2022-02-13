import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user", // id必填，且需要唯一
  state: () => {
    return {
      names: "张三",
    };
  },
  actions: {
    updateName(names: string) {
      this.names = names;
    },
  },
});
