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
                        <p class="section-subtitle">
                            Proactive defense with 10ms threat interception
                        </p>
                    </div>
                    <div class="card-content">
                        <ul class="capability-list">
                            <li v-for="(item, index) in securityItems" :key="index">
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
                <div class="solution-card alignment">
                    <div class="card-header">
                        <icon icon="ph:scales" class="icon" />
                        <h3>Ethical AI Alignment</h3>
                        <p class="section-subtitle">Bias and toxicity erode brand trust. We embed mitigation and
                            transparency at the core.</p>
                    </div>
                    <div class="card-content">
                        <ul class="capability-list">
                            <li v-for="(item, index) in alignItems" :key="index">
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

                <!-- 合规治理卡片 -->
                <div class="solution-card governance" data-aos="flip-right">
                    <div class="card-header">
                        <icon icon="carbon:document" class="icon" />
                        <h3>Governed AI Compliance</h3>
                        <p class="solution-subtitle">Audit-ready controls for global regulations</p>
                    </div>
                    <div class="card-content">
                        <ul class="capability-list">
                            <li v-for="(item, index) in governItems" :key="index">
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
            </div>
        </div>
    </section>

    <!-- Technology Section -->
    <section class="technology" id="technology">
        <div class="container">
            <h2 data-aos="fade-up">Trustworthy AI Architecture</h2>

            <!-- Architecture Pillars -->
            <div class="architecture-grid" data-aos="fade-up">
                <div class="arch-card" v-for="feature in architectureFeatures" :key="feature.title">
                    <div class="arch-icon" :class="feature.iconClass"></div>
                    <h3>{{ feature.title }}</h3>
                    <p class="pillar-description">{{ feature.description }}</p>
                    <ul class="spec-list">
                        <li v-for="(spec, idx) in feature.specs" :key="idx">
                            <el-icon>
                                <Right />
                            </el-icon>
                            <span class="spec-text">{{ spec }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Performance Metrics -->
            <div class="specs-grid" data-aos="fade-up">
                <div class="metric-card" v-for="metric in performanceMetrics" :key="metric.title">
                    <div class="metric-value">{{ metric.value }}</div>
                    <p class="metric-title">{{ metric.title }}</p>
                    <div class="metric-bar" :class="metric.barClass"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="clients" id="clients">
        <div class="container">
            <h2 class="section-title">Powering Innovation Across Industries</h2>

            <!-- Logo滚动容器 -->
            <div class="logo-scroller">
                <div class="scroller-track">
                    <div class="logo-group" v-for="group in 2" :key="group">
                        <div v-for="(client, index) in clients" :key="index" class="logo-item">
                            <img :src="client.logo" :alt="client.name + ' logo'" class="client-logo" loading="lazy">
                        </div>
                    </div>
                </div>
            </div>
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

const securityItems = ref([
    {
        icon: 'line-md:security',
        title: 'Autonomous Offensive Validation',
        desc: 'Launches thousands of LLM‑driven attacks with actionable dashboard findings'
    },
    {
        icon: 'carbon:scan',
        title: 'Safety & Robustness Scanner',
        desc: 'Agentic scanning plus rule‑based tests for edge case detection'
    },
    {
        icon: 'mdi:encryption-outline',
        title: 'Realtime Defense Layer',
        desc: 'Lightweight inline agent blocks malicious payloads in <10ms'
    }
])

const alignItems = ref([
    {
        icon: 'material-symbols:balance',
        title: 'Bias & Fairness Assurance',
        desc: 'Continuous parity tests with automatic re‑weighting'
    },
    {
        icon: 'ph:binoculars',
        title: 'Explainability & Interpretability',
        desc: 'Model cards & decision traces with multi-language support'
    },
    {
        icon: 'ph:shield-check',
        title: 'Harm Mitigation',
        desc: 'Context-aware toxic output rewriting'
    },
    {
        icon: 'ph:chart-line',
        title: 'Alignment Dashboard',
        desc: 'Real-time adherence monitoring with custom KPI thresholds'
    }
])

const governItems = ref([
    {
        icon: 'carbon:document',
        title: 'Lifecycle Audit Trails',
        desc: 'Immutable logs compliant with ISO 42001 and EU AI Act'
    },
    {
        icon: 'carbon:warning-alt',
        title: 'Drift & Performance Monitoring',
        desc: 'Real-time alerts for accuracy drops and concept drift'
    },
    {
        icon: 'carbon:policy',
        title: 'Regulatory Insight Engine',
        desc: 'Automated controls mapping for NIST AI RMF and other frameworks'
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

// Architecture Features
const architectureFeatures = [
    {
        title: 'Model Security',
        iconClass: 'security-icon',
        description: 'Multi-layered protection from training to inference',
        specs: [
            "Autonomous offensive testing (LLM-driven attacks)",
            "Runtime payload inspection <10ms",
            "Encrypted model weights storage",
            "Cryptographic data provenance"
        ]
    },
    {
        title: 'Ethical Alignment',
        iconClass: 'alignment-icon',
        description: 'Bias mitigation and explainability built-in',
        specs: [
            "Dynamic fairness scoring & re-weighting",
            "Counterfactual analysis engine",
            "Toxicity screening & rewriting",
            "Constitutional AI policy engine"
        ]
    },
    {
        title: 'Smart Governance',
        iconClass: 'governance-icon',
        description: 'Lifecycle compliance automation',
        specs: [
            "Automated regulatory mapping (120+ laws)",
            "Blockchain-backed audit trails",
            "Real-time concept drift detection",
            "SOC 2/ISO 42001 ready evidence packs"
        ]
    }
];

// Performance Metrics
const performanceMetrics = [
    {
        value: "<10ms",
        title: "Threat Detection Latency",
        barClass: "security-bar"
    },
    {
        value: "97%",
        title: "Regulatory Compliance Coverage",
        barClass: "compliance-bar"
    },
    {
        value: "24/7",
        title: "Model Monitoring Uptime",
        barClass: "monitoring-bar"
    }
]
const clients = [
    // 全球知名企业 
    {
        name: 'Microsoft',
        logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg'
    },
    {
        name: 'Google Cloud',
        logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg'
    },
    {
        name: 'Amazon Web Services',
        logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg'
    },

    // 技术领域领先者
    {
        name: 'Docker',
        logo: 'https://www.vectorlogo.zone/logos/docker/docker-ar21.svg'
    },
    {
        name: 'Kubernetes',
        logo: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg'
    },
    {
        name: 'GitHub',
        logo: 'https://www.vectorlogo.zone/logos/github/github-ar21.svg'
    },

    // 新兴技术公司
    {
        name: 'Vercel',
        logo: 'https://www.vectorlogo.zone/logos/vercel/vercel-ar21.svg'
    },
    {
        name: 'Supabase',
        logo: 'https://www.vectorlogo.zone/logos/supabase/supabase-ar21.svg'
    },
    {
        name: 'Fastly',
        logo: 'https://www.vectorlogo.zone/logos/fastly/fastly-ar21.svg'
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
    box-sizing: border-box;
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
    padding: 6rem 0;
    background: linear-gradient(175deg, #fff 50%, #f8fafc 100%);
}

.client-logo {
    height: 50px;
    width: auto;
    max-width: 160px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.75;
    transition: all 0.3s ease;

    &:hover {
        filter: grayscale(0);
        opacity: 1;
        transform: scale(1.05);
    }
}

.section-title {
    text-align: center;
    font-size: 2rem;
    color: #1e293b;
    margin-bottom: 3rem;
}

.logo-scroller {
    overflow: hidden;
    position: relative;
    padding: 2rem 0;

    // 渐变遮罩
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 15%;
        z-index: 2;
        pointer-events: none;
    }

    &::before {
        left: 0;
        background: linear-gradient(90deg, white, rgba(white, 0));
    }

    &::after {
        right: 0;
        background: linear-gradient(90deg, rgba(white, 0), white);
    }
}

.scroller-track {
    display: flex;
    animation: scroll 35s linear infinite;

    &:hover {
        animation-play-state: paused;
    }
}

.logo-group {
    display: flex;
    flex-shrink: 0;
    padding: 0;
}

.logo-item {
    margin: 0 2.5rem;
    padding: 1rem;
}

@media (max-width: 768px) {
    .client-logo {
        max-width: 120px;
        height: 40px;
    }

    .logo-item {
        margin: 0 1.2rem;
    }
}

.client-icon {
    width: 4.5rem;
    height: 4.5rem;
    color: #2A5EE6;
    margin-bottom: 1rem;
}

.client-name {
    color: #475569;
    font-size: 0.95rem;
    font-weight: 500;
    white-space: nowrap;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

@media (max-width: 768px) {
    .client-icon {
        width: 3.5rem;
        height: 3.5rem;
    }

    .logo-item {
        margin: 0 1.5rem;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-100%);
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
    padding: 6rem 0;
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
        margin: 0 0 .5rem;
    }

    .section-subtitle,
    .solution-subtitle {
        /* 固定行数 */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        /* 限制两行 */
        -webkit-box-orient: vertical;
        overflow: hidden;

        /* 精确高度控制 */
        line-height: 1.5;
        /* 根据设计调整 */
        max-height: calc(2em * 1.5);
        /* 行高 × 行数 */
        min-height: calc(2em * 1.5);
        /* 确保始终占两行高度 */

        /* 视觉优化 */
        text-overflow: ellipsis;
        margin: 0;
        /* 保持间距 */
        font-size: 1rem;
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
    .solutions{
        .cards-container {
            padding: 2rem 0;
        }
    }
    .icon {
        font-size: 1.8rem;
    }

    .capability-icon :deep(svg) {
        width: 2rem;
        height: 2rem;
    }
}

.alignment {
    background: linear-gradient(135deg, rgba(245, 243, 255, 0.8), rgba(237, 233, 254, 0.9));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(59, 130, 246, 0.15);
}

.alignment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2.5rem;
}

.feature-card {
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
}

.feature-icon {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;

    :deep(svg) {
        width: 28px;
        height: 28px;
        color: white;
    }
}

.feature-content {
    h4 {
        color: #1F2937;
        font-size: 1.25rem;
        margin-bottom: 0.75rem;
    }

    p {
        color: #6B7280;
        line-height: 1.6;
        margin-bottom: 1rem;
    }
}

.feature-details {
    list-style: none;
    padding: 0;
    margin-top: 1rem;

    li {
        display: flex;
        align-items: center;
        padding: 0.5rem 0;
        color: #374151;

        .detail-icon {
            color: #10B981;
            margin-right: 0.75rem;
            font-size: 1.2rem;
        }
    }
}

@media (max-width: 768px) {
    .alignment-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .feature-card {
        padding: 1.25rem;
    }
}

// 颜色变量系统
$colors: (
    blue-100: #f0f7ff,
    purple-100: #f5f3ff,
    teal-100: #f0fdfa,
    blue-gradient: linear-gradient(135deg, #3b82f6, #6366f1),
    border-light: #e2e8f0,
    text-secondary: #64748b,
    bg-light: #f8f9fa
);

.technology {
    padding: 6rem 0;

    @media (max-width: 768px) {
        padding: 3rem 0;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
    }

    h2 {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 3rem;
        color: #1a365d;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    .architecture-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;

        .arch-card {
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.05);
            transition: transform 0.3s ease;

            &:hover {
                transform: translateY(-5px);
            }

            .arch-icon {
                width: 3.5rem;
                height: 3.5rem;
                border-radius: 0.75rem;
                margin-bottom: 1.5rem;

                &.security-icon {
                    background-color: map-get($colors, blue-100);
                }

                &.alignment-icon {
                    background-color: map-get($colors, purple-100);
                }

                &.governance-icon {
                    background-color: map-get($colors, teal-100);
                }
            }

            h3 {
                font-size: 1.5rem;
                margin-bottom: 1rem;
                color: #1e293b;
            }

            .pillar-description {
                color: map-get($colors, text-secondary);
                margin: 1rem 0 1.5rem;
                min-height: 3.5rem;
                line-height: 1.6;
            }

            .spec-list {
                li {
                    display: flex;
                    align-items: start;
                    gap: 0.5rem;
                    padding: 0.7rem 0;
                    border-top: 1px solid map-get($colors, border-light);

                    .el-icon {
                        color: #4f46e5;
                        margin-top: 0.2rem;
                    }

                    .spec-text {
                        flex: 1;
                        color: #475569;
                    }
                }
            }
        }
    }

    .specs-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        .metric-card {
            background: white;
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

            .metric-value {
                font-size: 2.5rem;
                font-weight: 600;
                color: #1e3a8a;
                margin-bottom: 0.5rem;
            }

            .metric-title {
                color: map-get($colors, text-secondary);
                margin-bottom: 1rem;
            }

            .metric-bar {
                height: 6px;
                border-radius: 3px;

                &.security-bar {
                    background: map-get($colors, blue-gradient);
                }

                &.compliance-bar {
                    background: linear-gradient(135deg, #8b5cf6, #a855f7);
                }

                &.monitoring-bar {
                    background: linear-gradient(135deg, #059669, #10b981);
                }
            }
        }
    }
}
</style>