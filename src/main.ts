import { createApp } from 'vue'
import { i18n } from '@/locales'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
const bootstrap = async () => {

  const app = createApp(App)
  // 插件注册链
  app.use(i18n)
  .use(router)
  .use(ElementPlus, {
    locale: i18n.global.locale.value === 'zh-CN' ? zhCn : en, // 修正 TS 类型报错
  });
  app.mount('#app')
}

bootstrap().catch((error) => {
  console.error('Application bootstrap failed:', error)
  // 生产环境接入 Sentry 等监控系统
})