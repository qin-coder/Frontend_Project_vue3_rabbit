import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
const router = useRouter()
// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 50000
})

// axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (e) => Promise.reject(e)
)

// axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    ElMessage({
      type: 'warning',
      message: e.response.data.message
    })
    if (e.response.status === 401) {
      // 1. 清除pinia中的用户信息
      const userStore = useUserStore()
      userStore.clearUserInfo()
      // 2. 跳转到登录页
      router.push('/login')
    }
    return Promise.reject(e)
  }
)

export default httpInstance
