import axios from "axios";
import Nprogress from "nprogress";
const request = axios.create({
  baseURL: "",
  timeout: 5000,
});

request.interceptors.request.use(
  function (config) {
    Nprogress.start();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
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

export const get = (url: string, params: any) => request.get(url, { params });

export const post = (url: string, data: object) => request.post(url, data);

export const put = (url: string, data: object) => request.put(url, data);

export const del = (url: string) => request.delete(url);
