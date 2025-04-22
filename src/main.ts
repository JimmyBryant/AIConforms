import { createApp, type App } from 'vue'
import { i18n } from '@/locales'
import AppComponent from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import AOS from 'aos'
import 'aos/dist/aos.css'
import type { AosOptions } from 'aos'
import '@/assets/styles/element-variables.scss'

// 定义全局属性类型扩展
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    AOS: typeof AOS
  }
}

const bootstrap = async (): Promise<void> => {
  try {
    const app: App = createApp(AppComponent)
    
    // 动态设置 Element Plus 的语言（更安全的类型判断）
    const locale = i18n.global.locale === 'zh' ? zhCn : en

    // 插件注册链（推荐换行保持可读性）
    app.use(i18n)
       .use(router)
       .use(ElementPlus, { locale })

    // 初始化 AOS（带完整类型提示）
    const aosOptions: AosOptions = {
      duration: 1000,
      once: true,
      easing: 'ease-in-out' // 建议添加的配置
    }
    AOS.init(aosOptions) // 直接调用
    
    // 通过 provide 传递 AOS 方法（更安全的替代方案）
    app.provide('aos', {
      refresh: AOS.refresh,
      refreshHard: AOS.refreshHard
    })

    app.mount('#app')
  } catch (error: unknown) {
    console.error('Application bootstrap failed:', error)
    // 生产环境错误处理（推荐使用类型守卫）
    if (error instanceof Error) {
      // 可接入 Sentry 等监控系统
      console.error(error.stack)
    }
  }
}

// 启动应用（添加 void 操作符明确忽略 Promise）
void bootstrap()