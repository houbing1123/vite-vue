//引入axios模块
import axios from "axios";
//引入nprogress模块及样式
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

//创建一个axios对象，定义baseURL作为请求固定前缀，timeout请求时间
const request = axios.create({
  baseURL: "",
  timeout: 5000,
});
//请求与响应拦截器，主要做请求时，请求头配置,
request.interceptors.request.use(
  function (config) {
    // if (xx) {
    //   config.headers["token"] = getToken();
    // }
    Nprogress.start();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
//全局响应拦截
request.interceptors.response.use(
  function (response) {
    Nprogress.done();
    return response.data;
  },
  function (error) {
    // if (error.response?.status === 301) {
    //   window.location.href = "/#/login";
    // }
    Nprogress.done();
    return Promise.reject(error);
  }
);

//封装四个方法暴露，调用增删改查四个接口
export const get = (url: string, params: any) => request.get(url, { params });

export const post = (url: string, data: object) => request.post(url, data);

export const put = (url: string, data: object) => request.put(url, data);

export const del = (url: string) => request.delete(url);
