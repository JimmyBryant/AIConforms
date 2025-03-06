import { createI18n } from 'vue-i18n'
import en from './en.json'
import zh from './zh.json'
import elementEn from 'element-plus/es/locale/lang/en'
import elementZh from 'element-plus/es/locale/lang/zh-cn'

// 类型定义
type MessageSchema = typeof en

type Locale = 'en' | 'zh'

// 安全获取语言值
function getSavedLang(): Locale {
  const lang = localStorage.getItem('lang')
  return lang === 'zh' ? 'zh' : 'en'
}

export const i18n = createI18n<[MessageSchema], Locale>({
  legacy: false,
  locale: getSavedLang(),
  fallbackLocale: 'en',
  messages: { en, zh },
  globalInjection: true // 启用全局注入
})

// Element Plus 语言加载器
export const loadElementLocale = (lang: Locale) => {
  return lang === 'zh' ? elementZh : elementEn
}