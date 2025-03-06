<script setup lang="ts">
const navItems = [
  { name: '产品', link: '#product' },
  { name: '解决方案', link: '#solutions' },
  { name: '资源', link: '#resources' }
]
</script>

<template>
  <header class="main-header">
    <div class="brand">
      <img src="/logo.svg" alt="SecurityCheck">
      <h1>VendorSecure</h1>
    </div>
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.name">
          <a :href="item.link">{{ item.name }}</a>
        </li>
        <button class="cta-button">免费试用</button>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 5%;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    
    h1 {
      color: $primary-blue;
      font-size: 1.5rem;
    }
  }

  nav ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    
    a {
      color: $text-primary;
      &:hover {
        color: $security-green;
      }
    }
  }
}

.cta-button {
  background: $security-green;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }
}
</style>
