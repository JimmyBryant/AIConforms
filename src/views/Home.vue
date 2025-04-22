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
                <el-button class="link-btn" link type="primary">Contact Sales</el-button>
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

    <section class="solutions" id="solutions">
        <div class="container">

            <div class="cards-container">
                <!-- 安全卡片 -->
                <div class="solution-card security" data-aos="flip-left">
                    <div class="card-header">
                        <icon icon="carbon:security" class="icon" />
                        <h3>Secure AI Infrastructure</h3>
                    </div>
                    <div class="card-content">
                        <p class="card-desc">
                            Proactive defense with 10ms threat interception
                        </p>
                        <ul class="capability-list">
                            <li v-for="(item, index) in securityFeatures" :key="index">
                                <div class="capability-icon">
                                    <icon :icon="item.icon" />
                                </div>
                                <div>
                                    <h4>
                                        {{ item.title }}
                                    </h4>
                                    <p>
                                        {{ item.desc }}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- 伦理对齐卡片 -->
                <div class="solution-card alignment" data-aos="flip-up">
                    <div class="card-header">
                        <icon icon="mingcute:ai-line" class="icon" />
                        <h3>Ethical AI Alignment</h3>
                    </div>
                    <div class="card-content">
                        <p class="card-desc">
                            Bias mitigation and decision transparency
                        </p>
                        <div class="stats-grid">
                            <div class="stat-item" v-for="stat in alignmentStats" :key="stat.value">
                                <icon :icon="stat.icon" />
                                <div class="stat-value">{{ stat.value }}</div>
                                <div class="stat-label">{{ stat.label }}</div>
                            </div>
                        </div>
                        <ul class="feature-tags">
                            <li v-for="(tag, i) in alignmentTags" :key="i">
                                <icon :icon="tag.icon" class="mr-2" />
                                {{ tag.text }}
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- 合规治理卡片 -->
                <div class="solution-card governance" data-aos="flip-right">
                    <div class="card-header">
                        <icon icon="carbon:document" class="icon" />
                        <h3>Automated Compliance</h3>
                    </div>
                    <div class="card-content">
                        <p class="card-desc">
                            Audit-ready controls for global regulations
                        </p>
                        <div class="compliance-progress">
                            <div class="progress-item" v-for="item in complianceStandards" :key="item.name">
                                <div class="progress-label">
                                    <icon :icon="item.icon" class="mr-2" />
                                    {{ item.name }}
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill"
                                        :style="{ width: item.coverage, backgroundColor: item.color }">
                                        <icon icon="carbon:checkmark" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="regulation-list">
                            <div class="regulation-item" v-for="reg in regulations" :key="reg">
                                <icon icon="carbon:checkmark-filled" />
                                <span>{{ reg }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Technology Section -->
    <section class="technology" id="technology">
        <div class="container">
            <h2 data-aos="fade-up">Core Architecture</h2>

            <!-- Architecture Overview -->
            <div class="architecture-grid" data-aos="fade-up">
                <div class="arch-card" v-for="feature in architectureFeatures" :key="feature.title">
                    <div class="arch-icon" :style="{ backgroundColor: feature.color }"></div>
                    <h3>{{ feature.title }}</h3>
                    <p>{{ feature.description }}</p>
                    <ul class="spec-list">
                        <li v-for="(spec, idx) in feature.specs" :key="idx">
                            <el-icon>
                                <Right />
                            </el-icon>
                            {{ spec }}
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Technical Specifications -->
            <div class="specs-grid" data-aos="fade-up">
                <div class="metric-card" v-for="metric in performanceMetrics" :key="metric.title">
                    <h3>{{ metric.value }}</h3>
                    <p>{{ metric.title }}</p>
                    <div class="metric-bar" :style="{ backgroundColor: metric.color }"></div>
                </div>
            </div>
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
import { Right } from '@element-plus/icons-vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'

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

interface SecurityCapability {
    capability: string
    technology: string
    impact: string
    statusType: 'success' | 'warning'
}

interface AlignmentProcess {
    stage: string
    title: string
    description: string
    type: 'primary' | 'success'
    metric?: string
}

interface ComplianceStandard {
    name: string
    description: string
    coverage: string
    color: string
}
// 安全特性数据
const securityFeatures = ref([
    {
        icon: 'carbon:security',
        subIcon: 'carbon:target',
        title: 'Adversarial Testing',
        desc: 'Simulate 1000+ attack vectors'
    },
    {
        icon: 'carbon:scan',
        subIcon: 'carbon:chart-line',
        title: 'Runtime Scanner',
        desc: 'Real-time threat detection'
    },
    {
        icon: 'carbon:encryption',
        subIcon: 'carbon:data-check',
        title: 'Data Protection',
        desc: 'End-to-end encryption for all model interactions'
    }
])

// 对齐统计数据
const alignmentStats = ref([
    {
        icon: 'carbon:list-boxes',
        value: '107+',
        label: 'Fairness Metrics'
    },
    {
        icon: 'carbon:filter',
        value: '99.7%',
        label: 'Toxicity Filtering'
    }
])

// 对齐标签
const alignmentTags = ref([
    { icon: 'carbon:scalability', text: 'Dynamic Re-weighting' },
    { icon: 'carbon:map', text: 'Explainability Maps' },
    { icon: 'carbon:settings', text: 'Policy Engine' }
])

// 合规标准
const complianceStandards = ref([
    {
        name: 'NIST AI RMF',
        coverage: '98%',
        color: '#3B82F6',
        icon: 'carbon:lock'
    },
    {
        name: 'GDPR',
        coverage: '100%',
        color: '#10B981',
        icon: 'carbon:data-check'
    }
])
// Security Capabilities
const securityCapabilities = ref<SecurityCapability[]>([
    {
        capability: 'Adversarial Testing',
        technology: '1000+ attack vectors simulation',
        impact: '93% Faster Vulnerability Discovery',
        statusType: 'success'
    },
    {
        capability: 'Runtime Protection',
        technology: 'Reinforcement Learning-based detection',
        impact: '99.99% Threat Block Rate',
        statusType: 'success'
    }
])

// Alignment Process
const alignmentProcess = ref<AlignmentProcess[]>([
    {
        stage: 'Phase 1',
        title: 'Bias Detection',
        description: 'Continuous monitoring of 107 fairness metrics',
        type: 'primary',
        metric: '0.5ppb Discrimination Rate'
    },
    {
        stage: 'Phase 2',
        title: 'Value Alignment',
        description: 'Dynamic parameter balancing with HVE technology',
        type: 'success',
        metric: '99.7% Toxicity Filtering'
    }
])

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

// Technology Features
const architectureFeatures = [
    {
        title: 'Multi-Layer Defense',
        description: 'Three-tier protection architecture',
        color: '#2A5EE6',
        specs: [
            '99.2% threat detection rate',
            '0.008% false positive rate',
            'Automated attack simulation'
        ]
    },
    {
        title: 'Ethical Engine',
        description: 'Dynamic value alignment system',
        color: '#34D399',
        specs: [
            '150+ customizable ethics dimensions',
            'Real-time toxicity filtering',
            'Decision transparency reports'
        ]
    }
]

// Performance Metrics
const performanceMetrics = [
    {
        title: 'Threat Response Time',
        value: '<20ms',
        color: '#FF6B6B'
    },
    {
        title: 'Compliance Coverage',
        value: '98.5%',
        color: '#4ECDC4'
    }
]
</script>

<style lang="scss" scoped>
// 主题色系统
$primary: #1A3A6B; // 深海蓝 - 象征信任与安全
$accent: #34D399; // 智能绿 - 代表成长与透明
$alert: #FF6B6B; // 珊瑚红 - 用于安全警示
$dark: #0D1F2D; // 深空蓝 - 替代纯黑
$light: #F8FAFC; // 冰川白 - 主背景色
$neutral: #E5E9F0; // 北极灰 - 辅助背景
// 在样式变量中定义颜色方案
$text-dark: #1A1A1A; // 主文本色
$primary: #2A5EE6; // 品牌主色
$accent: #34D399; // 强调色
$hover-bg: rgba($accent, 0.05); // Hover背景



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
        background-color: transparent;

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

        .link-btn {
            color: #1a1a1a;

            &:hover {
                color: #2A5EE6;
            }
        }

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
    color: white;
    padding: 3rem 0;

    .pillar {
        background: rgba($primary, 0.15);
        border: 1px solid rgba($accent, 0.2);
    }

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
    margin: 80px 0;

    h2 {
        font-size: 2.2rem;
        margin-bottom: 40px;
    }
}

.tech-stats {
    display: flex;
    gap: 30px;
    margin: 30px 0;

    .stat {
        flex: 1;
        background: rgba($primary, 0.05);
        border-radius: 12px;
        padding: 20px;
        text-align: center;

        &-value {
            font-size: 2.4rem;
            font-weight: 700;
            color: $primary;
        }

        &-label {
            color: $text-dark;
            opacity: 0.8;
        }
    }
}

.metric-badge {
    display: inline-block;
    padding: 4px 12px;
    background: rgba($accent, 0.1);
    color: $accent;
    border-radius: 6px;
    margin-top: 10px;
}

.coverage-progress {
    height: 8px;
    background: #eee;
    border-radius: 4px;
    margin-top: 15px;

    .progress-bar {
        height: 100%;
        border-radius: 4px;
        transition: width 0.5s ease;
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
    padding-top: 60px; // 补偿固定头部的间距
    padding-bottom: 60px;
}

/* 响应式覆盖 */
@media (max-width: 768px) {
    .hero .container {
        padding-top: 40px;
        padding-bottom: 40px;
    }
}

.clients {
    padding: 60px 0;
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
    background: linear-gradient(135deg, $dark 0%, lighten($dark, 8%) 100%);
}

.solutions {
    background: $light;

    .solution-section {
        padding: 60px 0;

        &:nth-child(even) {
            background: white;
            box-shadow: 0 8px 24px rgba($dark, 0.04);
        }
    }

    .solution-tag {
        &.security {
            background: rgba($alert, 0.15);
            color: $alert;
        }

        &.alignment {
            background: rgba($accent, 0.15);
            color: $accent;
        }

        &.governance {
            background: rgba($primary, 0.15);
            color: $primary;
        }
    }
}

// Technology Section
.technology {
    background: linear-gradient(45deg, $neutral 0%, $light 100%);

    .arch-card {
        background: rgba(white, 0.9);
        backdrop-filter: blur(8px);
        border: 1px solid rgba($primary, 0.1);
    }
}

// Clients Section
.clients {
    background: white;
    border-top: 1px solid rgba($primary, 0.1);

    .logo-wall img {
        filter: grayscale(1);
        transition: filter 0.3s;

        &:hover {
            filter: none;
        }
    }
}

// Footer
.global-footer {
    background: $dark;
    color: rgba(white, 0.8);

    a {
        color: rgba(white, 0.7);

        &:hover {
            color: $accent;
        }
    }
}

// 响应式调整
@media (max-width: 768px) {
    .solution-section {
        margin: 40px 0 !important;

        h2 {
            font-size: 1.6rem !important;
        }
    }
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

.technology {
    padding: 60px 0;

    .architecture-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
        margin: 2rem 0;
    }

    .arch-card {
        background: white;
        padding: 30px;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }
}

@media (max-width: 768px) {
    .architecture-grid {
        grid-template-columns: 1fr !important;
    }

    .solution-section h2 {
        font-size: 1.8rem !important;
    }
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

.cards-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 2rem 0;
}

.solution-card {
    border-radius: 1.5rem;
    padding: 2rem;
    transition: transform 0.3s ease;

    &.security {
        background: linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%);
    }

    &.alignment {
        background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%);
    }

    &.governance {
        background: linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%);
    }
}

.card-header {
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
        font-size: 3rem;
        margin-bottom: 1rem;

        .security & {
            color: #2563EB;
        }

        .alignment & {
            color: #059669;
        }

        .governance & {
            color: #6D28D9;
        }
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
    }

}

.card-desc {
    font-size: 1.1rem;
    margin: 0 0 1rem;
}

.capability-list {
    li {
        display: flex;
        gap: 1rem;
        padding: 1rem 0;
        align-items: center;

        i {
            font-size: 1.2rem;
            margin-top: 0.3rem;
        }

        h4 {
            font-weight: 500;
            margin: 0 0 0.3rem;
        }

        p {
            color: #64748B;
            font-size: 0.9rem;
            margin: 0;
        }
    }
}

.metric-badge {
    background: white;
    border-radius: 0.75rem;
    padding: 1rem;
    text-align: center;
    margin-top: 1.5rem;

    .value {
        display: block;
        font-size: 1.8rem;
        font-weight: 700;
    }

    .label {
        color: #64748B;
        font-size: 0.9rem;
    }

    .icon {
        font-size: 2rem;
    }
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1.5rem 0;

    .stat-item {
        background: rgba(255, 255, 255, 0.9);
        border-radius: 0.75rem;
        padding: 1rem;
        text-align: center;

        .stat-value {
            font-size: 1.5rem;
            font-weight: 700;
        }

        .stat-label {
            color: #64748B;
            font-size: 0.85rem;
        }
    }
}

.compliance-progress {
    .progress-item {
        margin: 1.2rem 0;

        .progress-bar {
            background: #E2E8F0;
            border-radius: 0.5rem;
            height: 8px;
            margin-top: 0.5rem;
            overflow: hidden;
        }

        .progress-fill {
            border-radius: 0.5rem;
            height: 100%;
            transition: width 0.8s ease;
        }
    }
}

.flex {
    display: flex;
}

.justify-center {
    justify-content: center;
}



.icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.capability-icon {
    :deep(svg) {
        width: 2.5rem;
        height: 2.5rem;
        color: currentColor;
    }
}

/* 保持原有卡片样式 */
.solution-card {
    /* 原有卡片样式不变 */

    &.security {

        .icon,
        .capability-icon {
            color: #2563EB;
        }
    }

    &.alignment {

        .icon,
        .capability-icon {
            color: #059669;
        }
    }

    &.governance {

        .icon,
        .capability-icon {
            color: #6D28D9;
        }
    }
}

/* 响应式调整 */
@media (max-width: 768px) {
    .icon {
        font-size: 1.8rem;
    }

    .capability-icon :deep(svg) {
        width: 2rem;
        height: 2rem;
    }
}
</style>