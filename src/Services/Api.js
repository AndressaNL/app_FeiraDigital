import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-apprural-v1.herokuapp.com",
});