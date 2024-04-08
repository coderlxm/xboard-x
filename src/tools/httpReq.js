import axios from "axios";
import { isProd } from "./env";
const instance = axios.create({
  baseURL: '',
  timeout: 10000,
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
})

instance.interceptors.request.use((config) => {
  /* 
    jwt: json web token 无状态的管理机制，更适合跨平台及移动端应用，但要注意xss攻击
    前端需要在请求头携带这个token将请求发出，不需要维护cookie
    session+cookie方案 对于前端来说需要为浏览器设置cookie，这个cookie需要设置http only和secure属性
    且需要准备防csrf的方案 更适合传统应用 但要处理跨域问题 不需要在请求头设置token，因为cookie会被浏览器自己携带
    
  */
})