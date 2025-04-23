<!-- components/AppIcon.vue -->
<template>
    <span class="app-icon-wrapper" :style="wrapperStyle">
      <Icon
        :icon="icon"
        :width="computedSize"
        :height="computedSize"
        :style="{ color: color }"
        :class="[customClass, { 'inline-icon': inline }]"
      />
    </span>
  </template>
  
  <script setup>
  import { Icon } from '@iconify/vue'
  import { computed } from 'vue'
  
  const props = defineProps({
    icon: {
      type: String,
      required: true,
      validator: (v) => v.includes(':')
    },
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    inline: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    }
  })
  
  const computedSize = computed(() => 
    typeof props.size === 'string' ? props.size : `${props.size}px`
  )
  
  const wrapperStyle = computed(() => ({
    display: 'inline-flex',
    verticalAlign: 'middle'
  }))
  </script>
  
  <style>
  .app-icon-wrapper {
    display: inline-flex;
  }
  
  .inline-icon {
    vertical-align: -0.125em;
  }
  </style>