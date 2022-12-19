import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.16.5.169:3333/",
});