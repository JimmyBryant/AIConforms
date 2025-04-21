<template>
  <!-- Fixed Header -->
  <nav class="fixed-header">
    <div class="header-container">
      <div class="logo"></div>
      
      <!-- 桌面端完整菜单 -->
      <el-menu 
        v-if="!isMobile"
        mode="horizontal"
        :default-active="activeMenu"
        @select="handleMenuSelect"
        class="desktop-menu"
      >
        <el-sub-menu index="products">
          <template #title>Products</template>
          <el-menu-item index="ai-compliance">AI Compliance</el-menu-item>
          <el-menu-item index="ai-form">AI Form Filling</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="solutions">Solutions</el-menu-item>
        <el-menu-item index="technology">Technology</el-menu-item>
        <el-menu-item index="customers">Customers</el-menu-item>
      </el-menu>

      <!-- 移动端折叠菜单 -->
      <div v-else class="mobile-menu">
        <el-dropdown @visible-change="handleMenuToggle">
          <el-button class="menu-trigger">
            <el-icon><Menu /></el-icon>
          </el-button>
          <template #dropdown>
            <el-menu @select="handleMenuSelect">
              <el-sub-menu index="products">
                <template #title>Products</template>
                <el-menu-item index="ai-compliance">AI Compliance</el-menu-item>
                <el-menu-item index="ai-form">AI Form Filling</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="solutions">Solutions</el-menu-item>
              <el-menu-item index="technology">Technology</el-menu-item>
              <el-menu-item index="customers">Customers</el-menu-item>
            </el-menu>
          </template>
        </el-dropdown>
      </div>

      <el-button type="primary" class="demo-btn">Get Demo</el-button>
    </div>
  </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="content" data-aos="fade-up">
                <h1>AI-Powered Compliance Automation for Smart Business</h1>
                <p class="subtitle">Transform document workflows and risk management with intelligent automation</p>
                <el-button type="primary" size="large">Start Free Trial</el-button>
            </div>
            <div class="hero-illustration" data-aos="zoom-in"></div>
        </div>
    </section>

    <!-- Product Features -->
    <section class="features" id="solutions">
        <div class="container">
            <h2 data-aos="fade-up">Core Product Features</h2>
            <el-row :gutter="30">
                <el-col :xs="24" :sm="12" :md="8" v-for="(feature, index) in features" :key="index" data-aos="fade-up">
                    <el-card class="feature-card">
                        <div class="feature-icon"></div>
                        <h3>{{ feature.title }}</h3>
                        <p>{{ feature.description }}</p>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </section>

    <!-- Technology Stack -->
    <section class="technology" id="technology">
        <div class="container">
            <h2 data-aos="fade-up">Our Technology Advantage</h2>
            <div class="architecture" data-aos="zoom-in">
                <div class="layer">
                    <div class="tech-node" v-for="n in 3" :key="n"></div>
                </div>
                <div class="divider"></div>
                <div class="layer">
                    <div class="tech-node" v-for="n in 4" :key="n"></div>
                </div>
            </div>
            <el-row :gutter="30" class="tech-features">
                <el-col :xs="24" :md="8" v-for="(tech, index) in techStack" :key="index" data-aos="fade-up">
                    <div class="tech-item">
                        <h4>{{ tech.title }}</h4>
                        <p>{{ tech.description }}</p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>

    <!-- Customer Cases -->
    <section class="customers" id="customers">
        <div class="container">
            <h2 data-aos="fade-up">Trusted by Industry Leaders</h2>
            <div class="logo-wall" data-aos="fade-up">
                <div class="logo-item" v-for="n in 6" :key="n"></div>
            </div>
            <el-row :gutter="30" class="case-studies">
                <el-col :xs="24" :md="12" v-for="(item, index) in caseStudies" :key="index" data-aos="fade-up">
                    <el-card class="case-card">
                        <div class="case-content">
                            <div class="case-icon"></div>
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.description }}</p>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </section>

    <!-- Footer -->
    <footer class="main-footer">
        <div class="container">
            <div class="footer-columns">
                <div class="contact-info">
                    <h4>Contact Us</h4>
                    <p>Email: contact@aicoforms.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <div class="social-links">
                        <div class="social-icon"></div>
                        <div class="social-icon"></div>
                        <div class="social-icon"></div>
                    </div>
                </div>
                <div class="footer-menu">
                    <h4>Resources</h4>
                    <p>Documentation</p>
                    <p>Compliance Guides</p>
                    <p>API Reference</p>
                </div>
            </div>
            <div class="copyright">
                © 2024 AICoforms. All rights reserved.
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Menu } from '@element-plus/icons-vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface Feature {
    title: string
    description: string
}

interface TechItem {
    title: string
    description: string
}

interface CaseStudy {
    title: string
    description: string
}

// Product Features
const features = ref<Feature[]>([
    {
        title: 'AI Form Filling',
        description: 'Automatically complete complex forms with NLP-powered accuracy'
    },
    {
        title: 'Compliance Engine',
        description: 'Real-time regulatory checks and audit trail generation'
    },
    {
        title: 'Risk Analytics',
        description: 'Predictive risk assessment with machine learning models'
    }
])

// Technology Stack
const techStack = ref<TechItem[]>([
    {
        title: 'Natural Language Processing',
        description: 'Advanced NLP models for document understanding'
    },
    {
        title: 'Machine Learning',
        description: 'Predictive analytics and pattern recognition'
    },
    {
        title: 'Blockchain Audit',
        description: 'Immutable compliance record keeping'
    }
])

// Case Studies
const caseStudies = ref<CaseStudy[]>([
    {
        title: 'Global Bank Compliance',
        description: 'Reduced compliance processing time by 70%'
    },
    {
        title: 'Healthcare Provider',
        description: 'Automated 90% of HIPAA compliance workflows'
    }
])

// 响应式状态
const isMobile = ref(false)
const activeMenu = ref<string>('')
const menuOpen = ref(false)

// 屏幕尺寸检测
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

// 菜单切换处理
const handleMenuToggle = (visible: boolean) => {
  menuOpen.value = visible
}
const handleMenuSelect = (index: string) => {
    activeMenu.value = index
    const sectionMap: { [key: string]: string } = {
        'ai-compliance': 'compliance-features',
        'ai-form': 'form-features',
        solutions: 'solutions',
        technology: 'technology',
        industries: 'industries',
        customers: 'customers'
    }

    const sectionId = sectionMap[index]
    if (sectionId) {
        const section = document.getElementById(sectionId)
        section?.scrollIntoView({ behavior: 'smooth' })
    }
    if (isMobile.value) menuOpen.value = false
}
// 生命周期钩子
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
  AOS.init({ duration: 800, once: true, offset: 120 })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<style lang="scss" scoped>
$primary: #2A5EE6;
$secondary: #34D399;
$dark: #1A1A1A;
$light: #F5F7FA;

.container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
}

.fixed-header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    z-index: 1000;

    .header-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0 2rem;
        border-bottom: solid 1px var(--el-menu-border-color);

        .logo {
            width: 180px;
            height: 40px;
            background: $primary;
            border-radius: 6px;
        }

        .el-menu--horizontal {
            justify-content: flex-end;
            flex-grow: 1;
            border: none;
        }

        .el-menu--horizontal>.el-menu-item:nth-child(1) {
            margin-right: auto;
        }
        .mobile-menu{
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }
    }
}

.hero {
    padding: 160px 0 100px;

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
    }

    h1 {
        font-size: 3.5rem;
        line-height: 1.1;
        color: $dark;
    }

    .hero-illustration {
        height: 500px;
        background: linear-gradient(45deg, $primary, lighten($primary, 15%));
        border-radius: 24px;
    }
}

.features {
    padding: 120px 0;
    background: $light;

    .feature-card {
        padding: 40px;
        height: 100%;

        .feature-icon {
            width: 60px;
            height: 60px;
            background: $primary;
            border-radius: 12px;
            margin-bottom: 20px;
        }
    }
}

.technology {
    padding: 120px 0;

    .architecture {
        height: 400px;
        background: $light;
        border-radius: 24px;
        margin: 60px 0;
        position: relative;

        .layer {
            display: flex;
            justify-content: center;
            gap: 40px;
            padding: 40px;
        }

        .tech-node {
            width: 100px;
            height: 100px;
            background: white;
            border: 2px solid $primary;
            border-radius: 16px;
        }

        .divider {
            width: 80%;
            height: 2px;
            background: $primary;
            margin: 0 auto;
        }
    }

    .tech-features {
        margin-top: 60px;
    }
}

.customers {
    padding: 120px 0;
    background: $light;

    .logo-wall {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
        margin: 60px 0;

        .logo-item {
            height: 100px;
            background: rgba($dark, 0.1);
            border-radius: 12px;
        }
    }
}

.main-footer {
    background: $dark;
    color: white;
    padding: 80px 0 40px;

    .footer-columns {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 60px;
        padding-bottom: 60px;
        border-bottom: 1px solid rgba(white, 0.1);
    }

    .social-links {
        display: flex;
        gap: 20px;
        margin-top: 20px;

        .social-icon {
            width: 40px;
            height: 40px;
            background: rgba(white, 0.1);
            border-radius: 50%;
        }
    }

    .copyright {
        text-align: center;
        margin-top: 40px;
        opacity: 0.8;
    }
}

@media (max-width: 1024px) {
    .container {
        padding: 0 40px;
    }

    .hero {
        .container {
            grid-template-columns: 1fr;
            text-align: center;
        }

        .hero-illustration {
            height: 400px;
        }
    }

    .technology .architecture {
        height: auto;
        padding: 40px 0;

        .layer {
            flex-wrap: wrap;
        }

        .tech-node {
            width: 80px;
            height: 80px;
            margin: 10px;
        }
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 24px;
    }

    .fixed-header {
        .header-container {
            height: 60px;
            padding: 0 1rem;
            .logo {
                width: 120px;
                height: 30px;
            }
            .demo-btn{
                display: none;
            }
        }
    }

    .responsive-menu {

        :deep(.el-menu--horizontal > .el-menu-item),
        :deep(.el-menu--horizontal > .el-sub-menu) {
            display: none;
        }

        :deep(.el-menu--horizontal > .el-sub-menu:last-child) {
            display: flex;
        }
    }

    .hero {
        padding-top: 120px;

        h1 {
            font-size: 2.5rem;
        }

        .hero-illustration {
            height: 300px;
        }
    }
}
</style>