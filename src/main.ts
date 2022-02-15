//vue3与vue2首先改变的就是vue这个实例创建不一样了，vue2使用new来实例化，而vue3则是通过creareApp这个方法来创建入口。
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";
import "./index.css";

//基本的入口文件
createApp(App).use(store).use(router).use(Vant).mount("#app");
