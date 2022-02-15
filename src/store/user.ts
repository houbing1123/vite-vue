import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user", // id必填，且需要唯一
  state: () => {
    return {
      names: "张三",
    };
  },
  //通过acitions去改变参数，同时也可以在actions中使用异步操作
  actions: {
    updateName(names: string) {
      this.names = names;
    },
  },
});
