<template>
    <!-- Professional Header -->
    <nav class="global-header">
        <div class="container">
            <!-- 独立 Logo -->
            <router-link to="/" class="brand-logo">
                <img src="@/assets/logo.svg" alt="SecureAI">
            </router-link>
            <!-- 主导航菜单 -->
            <el-menu mode="horizontal" :ellipsis="isMobile" class="main-nav" @select="handleNavSelect">
                <el-menu-item index="solutions">Solutions</el-menu-item>
                <el-menu-item index="technology">Technology</el-menu-item>
                <el-sub-menu index="resources">
                    <template #title>Resources</template>
                    <el-menu-item index="docs">Documentation</el-menu-item>
                    <el-menu-item index="casestudies">Case Studies</el-menu-item>
                </el-sub-menu>
            </el-menu>
            <!-- 独立操作项 -->
            <div class="nav-actions">
                <el-button link type="primary">Contact Sales</el-button>
                <el-button type="primary" class="demo-btn">Get Demo</el-button>
            </div>
        </div>
    </nav>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="content">
                <h1 data-aos="fade-up">Trustworthy AI—
                    Without Compromise</h1>
                <h2 data-aos="fade-up" data-aos-delay="100">Secure, Aligned, Audit‑Ready AI in One Platform</h2>
                <p class="hero-text" data-aos="fade-up" data-aos-delay="200">
                    Ship world‑class AI experiences that outperform expectations while outclassing risk. Our platform
                    pairs state‑of‑the‑art model security with built‑in ethical alignment and continuous governance.
                </p>
                <div class="cta-group" data-aos="fade-up" data-aos-delay="300">
                    <el-button type="primary" size="large">Request Demo</el-button>
                    <el-button size="large">See Compliance Report</el-button>
                </div>
            </div>
            <div class="arch-diagram" data-aos="zoom-in">
                <div class="pillar" v-for="pillar in architecturePillars" :key="pillar.name">
                    <div class="pillar-icon" :style="{ backgroundColor: pillar.color }"></div>
                    <h3>{{ pillar.name }}</h3>
                    <p>{{ pillar.description }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Solutions -->
    <section class="solutions" id="solutions">
        <div class="container">
            <!-- Secure Solution -->
            <div class="solution-section" data-aos="fade-up">
                <h2><span class="solution-tag security">Secure</span>AI Security That Outsmarts Threats</h2>
                <div class="capability-grid">
                    <div class="capability-card" v-for="cap in securityCapabilities" :key="cap.title">
                        <h3>{{ cap.title }}</h3>
                        <p class="capability-desc">{{ cap.description }}</p>
                        <div class="benefits">
                            <div class="benefit-item" v-for="(benefit, bi) in cap.benefits" :key="bi">
                                <el-icon><Select /></el-icon>
                                <span>{{ benefit }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Align Solution -->
            <div class="solution-section" data-aos="fade-up">
                <h2><span class="solution-tag alignment">Align</span>Ethical AI That Earns Trust</h2>
                <el-timeline>
                    <el-timeline-item v-for="(item, index) in alignmentProcess" :key="index" :type="item.type"
                        :timestamp="item.step">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.content }}</p>
                    </el-timeline-item>
                </el-timeline>
            </div>

            <!-- Govern Solution -->
            <div class="solution-section" data-aos="fade-up">
                <h2><span class="solution-tag governance">Govern</span>Audit-Ready Compliance Accelerator</h2>
                <el-table :data="complianceStandards" style="width: 100%">
                    <el-table-column prop="standard" label="Standard" width="180" />
                    <el-table-column prop="requirement" label="Requirement" />
                    <el-table-column prop="coverage" label="Coverage" width="120">
                        <template #default="scope">
                            <el-tag :type="scope.row.status">{{ scope.row.coverage }}</el-tag>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </section>

    <!-- Technical Specifications -->
    <section class="tech-specs">
        <div class="container">
            <h2 data-aos="fade-up">Enterprise-Grade AI Infrastructure</h2>
            <el-row :gutter="30">
                <el-col :md="8" v-for="spec in techSpecs" :key="spec.title" data-aos="zoom-in">
                    <div class="spec-card">
                        <h3>{{ spec.title }}</h3>
                        <ul class="spec-list">
                            <li v-for="(item, idx) in spec.items" :key="idx">
                                <el-icon>
                                    <Right />
                                </el-icon>
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
    <!-- 新增客户案例板块 -->
    <section class="clients" id="clients">
        <div class="container">
            <h2 data-aos="fade-up">Trusted by Global Leaders</h2>
            <div class="logo-wall" data-aos="fade-up">
                <img v-for="logo in clientLogos" :key="logo" :src="logo" alt="Client logo">
            </div>
            <el-row :gutter="30" class="testimonials">
                <el-col :md="8" v-for="testimonial in testimonials" :key="testimonial.author" data-aos="fade-up">
                    <el-card class="quote-card">
                        <p>"{{ testimonial.text }}"</p>
                        <div class="author">
                            <img :src="testimonial.avatar" class="avatar">
                            <div>
                                <h4>{{ testimonial.author }}</h4>
                                <p>{{ testimonial.position }}</p>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </section>

    <!-- 新增数据指标板块 -->
    <section class="metrics">
        <div class="container">
            <el-row :gutter="30">
                <el-col :md="6" v-for="metric in metrics" :key="metric.title" data-aos="zoom-in">
                    <div class="metric-card">
                        <h3>{{ metric.value }}</h3>
                        <p>{{ metric.title }}</p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>

    <!-- 新增页脚 -->
    <footer class="global-footer">
        <div class="container">
            <el-row :gutter="30">
                <el-col :md="6">
                    <div class="footer-brand">
                        <img src="@/assets/logo.svg" class="footer-logo">
                        <p>Building Trustworthy AI Since 2020</p>
                    </div>
                </el-col>
                <el-col :md="6">
                    <h4>Product</h4>
                    <ul class="footer-links">
                        <li><a href="#solutions">Solutions</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#clients">Customers</a></li>
                    </ul>
                </el-col>
                <el-col :md="6">
                    <h4>Resources</h4>
                    <ul class="footer-links">
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#docs">Documentation</a></li>
                        <li><a href="#compliance">Compliance</a></li>
                    </ul>
                </el-col>
                <el-col :md="6">
                    <h4>Contact</h4>
                    <p>sales@secureai.com
                        +1 (800) 123-4567</p>
                    <div class="social-links">
                        <el-button circle><el-icon>
                                <Link />
                            </el-icon></el-button>
                        <el-button circle><el-icon>
                                <Chat />
                            </el-icon></el-button>
                        <el-button circle><el-icon>
                                <Star />
                            </el-icon></el-button>
                    </div>
                </el-col>
            </el-row>
            <div class="copyright">
                © 2024 SecureAI. All rights reserved.
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { Select, Right } from '@element-plus/icons-vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(false)

// 响应式检测
const checkViewport = () => {
    isMobile.value = window.innerWidth < 992
}

onMounted(() => {
    checkViewport()
    window.addEventListener('resize', checkViewport)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkViewport)
})

const handleNavSelect = (key: string) => {
    // 导航逻辑
    const section = document.getElementById(key)
    section?.scrollIntoView({ behavior: 'smooth' })
}
// Architecture Pillars
interface Pillar {
    name: string
    description: string
    color: string
}
// 新增数据部分
const clientLogos = [
    '/images/LogosNvidia.svg',
    '/images/LogosAws.svg',
    '/images/LogosMicrosoft.svg'
]

const testimonials = [
    {
        text: 'SecureAI transformed our compliance workflow...',
        author: 'John Smith',
        position: 'CTO at TechCorp',
        avatar: '/images/avatars/avatar1.jpg'
    }
]

const metrics = [
    { value: '99.99%', title: 'Platform Uptime' },
    { value: '4.9/5', title: 'Customer Satisfaction' },
    { value: '10ms', title: 'Latency Guarantee' },
    { value: '200+', title: 'Enterprise Clients' }
]

const pricingPlans = [
    {
        name: 'Starter',
        price: '999',
        features: ['Basic Security', 'Team Support', '50K API Calls'],
        featured: false
    }
]

const blogPosts = [
    {
        title: 'Navigating the EU AI Act',
        excerpt: 'Learn how to prepare for new regulations...',
        image: '/images/blog/regulations.jpg'
    }
]
const architecturePillars: Pillar[] = [
    {
        name: 'Model Security',
        description: 'Military-grade protection for generative AI',
        color: '#FF6B6B'
    },
    {
        name: 'Responsible & Aligned',
        description: 'Ethical AI by design',
        color: '#4ECDC4'
    },
    {
        name: 'Continuous Governance',
        description: 'Lifecycle audit trails',
        color: '#45B7D1'
    }
]

// Security Capabilities
interface Capability {
    title: string
    description: string
    benefits: string[]
}

const securityCapabilities: Capability[] = [
    {
        title: 'Autonomous Offensive Validation',
        description: 'Proactive threat detection system',
        benefits: [
            '1000+ LLM-driven attacks simulated',
            'Real-time vulnerability dashboard',
            'Actionable mitigation steps'
        ]
    },
    {
        title: 'Real-time Defense Layer',
        description: 'Inline request inspection',
        benefits: [
            '<10ms latency overhead',
            'Context-aware filtering',
            'Dynamic policy enforcement'
        ]
    }
]

// Compliance Standards
interface Compliance {
    standard: string
    requirement: string
    coverage: string
    status: 'success' | 'warning'
}

const complianceStandards: Compliance[] = [
    {
        standard: 'EU AI Act',
        requirement: 'High-risk system compliance',
        coverage: '100%',
        status: 'success'
    },
    {
        standard: 'NIST AI RMF',
        requirement: 'Risk management framework',
        coverage: '95%',
        status: 'success'
    }
]

// Technical Specifications
interface TechSpec {
    title: string
    items: string[]
}

const techSpecs: TechSpec[] = [
    {
        title: 'Performance',
        items: [
            'P99 latency <200ms',
            '99.99% uptime SLA',
            'Horizontal scaling'
        ]
    },
    {
        title: 'Security',
        items: [
            'FIPS 140-2 cryptography',
            'SOC 2 Type II certified',
            'Zero-trust architecture'
        ]
    }
]
</script>

<style lang="scss" scoped>
// 在样式变量中定义颜色方案
$text-dark: #1A1A1A; // 主文本色
$primary: #2A5EE6; // 品牌主色
$accent: #34D399; // 强调色
$hover-bg: rgba($accent, 0.05); // Hover背景

// .global-header {

//     // 覆盖菜单项基础样式
//     :deep(.el-menu) {
//         --el-menu-text-color: #{$text-dark};
//         --el-menu-hover-text-color: #{$text-dark};
//         --el-menu-active-color: #{$accent};
//         --el-menu-bg-color: transparent;
//     }

//     // 菜单项状态管理
//     :deep(.el-menu-item),
//     :deep(.el-sub-menu__title) {
//         color: $text-dark;
//         font-weight: 500;
//         transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

//         // Hover状态
//         &:hover {
//             color: darken($text-dark, 10%) !important;
//             background: $hover-bg !important;
//         }

//         // 激活状态
//         &.is-active {
//             color: $accent !important;

//             &::after {
//                 background: $accent;
//             }
//         }

//         // 焦点状态
//         &:focus {
//             background: rgba($accent, 0.08) !important;
//         }
//     }

//     // 下拉菜单样式
//     :deep(.el-menu--horizontal) {
//         &.is-opened {
//             .el-sub-menu__title {
//                 color: $accent !important;
//             }
//         }

//         .el-menu--popup {
//             background: rgba(255, 255, 255, 0.98) !important;
//             border: 1px solid rgba($text-dark, 0.1);
//             box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

//             .el-menu-item {
//                 color: $text-dark !important;

//                 &:hover {
//                     color: $accent !important;
//                     background: $hover-bg !important;
//                 }
//             }
//         }
//     }

//     // 移动端菜单颜色调整
//     @media (max-width: 992px) {
//         :deep(.el-menu--collapse) {
//             .el-sub-menu__title {
//                 color: $text-dark !important;
//             }
//         }
//     }
// }

.global-header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .brand-logo {
        img {
            height: 36px;
            width: auto;
        }
    }

    .main-nav {
        flex: 1;
        margin: 0 40px;
        border-bottom: none;
        align-items: center;

        :deep(.el-menu-item),
        :deep(.el-sub-menu__title) {
            color: #1a1a1a;
            font-weight: 500;
            transition: all 0.3s;

            &:hover {
                color: #2A5EE6;
                background: rgba(#2A5EE6, 0.05);
            }
        }
    }

    .nav-actions {
        display: flex;
        gap: 20px;

        .demo-btn {
            padding: 12px 24px;
        }
    }
}

@media (max-width: 992px) {
    .global-header {
        .container {
            height: 60px;
            padding: 0 24px;
        }

        .brand-logo img {
            height: 28px;
        }

        .main-nav {
            margin: 0 20px;

            :deep(.el-menu-item),
            :deep(.el-sub-menu) {
                display: none;
            }

            :deep(.el-menu--collapse) {
                display: block;
            }
        }

        .nav-actions {
            .el-button:not(.demo-btn) {
                display: none;
            }
        }
    }
}

.hero {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    color: white;
    padding: 3rem 0;

    h1 {
        font-size: 4rem;
        line-height: 1.1;
    }

    .arch-diagram {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
        margin-top: 80px;

        .pillar {
            background: rgba(white, 0.05);
            padding: 30px;
            border-radius: 16px;

            &-icon {
                width: 60px;
                height: 60px;
                border-radius: 12px;
                margin-bottom: 20px;
            }
        }
    }
}

.solution-section {
    margin: 120px 0;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 40px;

        .solution-tag {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 4px;
            margin-right: 15px;
            font-size: 1.2rem;
            text-transform: uppercase;

            &.security {
                background: #FF6B6B;
            }

            &.alignment {
                background: #4ECDC4;
            }

            &.governance {
                background: #45B7D1;
            }
        }
    }

    .capability-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;

        .capability-card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }
    }
}

.tech-specs {
    padding: 80px 0;
    background: #f9f9f9;

    .spec-card {
        background: white;
        padding: 30px;
        border-radius: 12px;

        .spec-list {
            li {
                margin: 12px 0;
                color: #666;
            }
        }
    }
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }

    .arch-diagram {
        grid-template-columns: 1fr !important;
    }

    .capability-grid {
        grid-template-columns: 1fr !important;
    }
}

/* 容器系统 - 核心 */
.container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
    position: relative;

    @media (max-width: 1440px) {
        padding: 0 40px;
    }

    @media (max-width: 1024px) {
        padding: 0 32px;
    }

    @media (max-width: 768px) {
        padding: 0 24px;
    }
}

/* Hero 容器特例 */
.hero .container {
    padding-top: 120px; // 补偿固定头部的间距
    padding-bottom: 120px;
}

/* 响应式覆盖 */
@media (max-width: 768px) {
    .hero .container {
        padding-top: 80px;
        padding-bottom: 80px;
    }
}

.clients {
    padding: 120px 0;
    background: #f8f9fa;

    .logo-wall {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
        margin: 60px 0;

        img {
            height: 60px;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
                opacity: 1;
            }
        }
    }
}

.global-footer {
    background: #1a1a1a;
    color: white;
    padding: 80px 0;

    .footer-logo {
        height: 40px;
        margin-bottom: 20px;
    }

    .footer-links {
        list-style: none;
        padding: 0;

        li {
            margin: 10px 0;

            a {
                color: rgba(white, 0.7);
                text-decoration: none;

                &:hover {
                    color: white;
                }
            }
        }
    }

    .social-links {
        margin-top: 20px;

        .el-button {
            margin-right: 10px;
        }
    }

    .copyright {
        margin-top: 60px;
        text-align: center;
        opacity: 0.6;
    }
}

// 响应式调整
@media (max-width: 768px) {
    .logo-wall {
        grid-template-columns: repeat(2, 1fr) !important;
    }

    .price-cards .el-col {
        margin-bottom: 30px;
    }
}

// 新增背景色变量
$bg-light: #F8FAFC;
$bg-dark: #1A1A1A;
$bg-gray: #F0F4F8;
$bg-accent: rgba(#34D399, 0.05);

// 板块背景色调整
.hero {
    background: linear-gradient(135deg, $bg-dark 0%, lighten($bg-dark, 5%) 100%);
}

.solutions {
    background: white;
}

.tech-specs {
    background: $bg-gray;
}

.clients {
    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.metrics {
    background: $bg-dark;
    color: white;
}

.pricing {
    background: $bg-gray;
}

.blog {
    background: white;
}

// 图片资源替换为色块
.logo-wall {
    div {
        background: rgba(0, 0, 0, 0.1);
        height: 60px;
        border-radius: 8px;
    }
}

.avatar {
    background: $primary;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.post-image {
    background: linear-gradient(45deg, $primary, $accent);
    height: 200px;
    border-radius: 12px 12px 0 0;
}

// 下拉菜单样式优化
:deep(.el-menu--popup-container) {
    .el-menu--popup {
        --el-menu-text-color: #{$text-dark} !important;
        --el-menu-hover-text-color: #{$text-dark} !important;
        --el-menu-active-color: #{$accent} !important;

        .el-menu-item {
            &:hover {
                background: $hover-bg !important;
                color: $text-dark !important;
            }

            &.is-active {
                color: $accent !important;
            }
        }
    }
}

// 移动端适配增强
@media (max-width: 992px) {
    :deep(.el-menu--popup) {
        width: 200px !important;

        .el-menu-item {
            height: 48px !important;
            line-height: 48px !important;
        }
    }
}
</style>