import axios from "axios";

const instance = axios.create({
  baseURL: "https://static.adbrix.io/front/coding-test",
});

export default instance;
