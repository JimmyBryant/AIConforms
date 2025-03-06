<template>
  <el-config-provider :locale="elementLocale">
    <!-- 全局路由容器 -->
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { loadElementLocale } from '@/locales' // 你需要自己定义这个方法
const { locale } = useI18n()

// 根据 Vue I18n 语言切换 Element Plus 语言
const elementLocale = computed(() => loadElementLocale(locale.value as 'en' | 'zh'))
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>