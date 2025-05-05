import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { lazyPlugin } from '@/directives'
const app = createApp(App)
// 引入全局组件插件
import { componentPlugin } from '@/components'
const pinia = createPinia()
app.use(componentPlugin)
app.use(pinia)
app.use(router)
pinia.use(piniaPluginPersistedstate)
app.mount('#app')
// 全局指令注册
app.use(lazyPlugin)
