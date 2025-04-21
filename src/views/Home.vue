<template>
    <div class="vendor-risk-container">
        <!-- 导航栏 -->
        <el-header class="security-header">
            <div class="header-content">
                <div class="brand-group">
                    <img src="@/assets/logo.svg" alt="VendorSecure" class="header-logo" />
                    <h1 class="brand-title">{{ $t('brand.name') }}</h1>
                </div>
                <div>
                    <!-- 语言切换 -->
                    <el-dropdown trigger="click" @command="handleLanguageChange" class="lang-selector">
                        <el-button type="text">
                            {{ currentLang.toUpperCase() }}
                            <el-icon>
                                <ArrowDown />
                            </el-icon>
                        </el-button>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="en">English</el-dropdown-item>
                                <el-dropdown-item command="zh">中文</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <el-button>{{ $t('nav.freeTrial') }}</el-button>
                    <el-button type="primary">{{$t('nav.getDemo')}}</el-button>
                </div>
            </div>
        </el-header>

        <!-- 主内容区 -->
        <main class="risk-main">
            <!-- 核心价值展示 -->
            <section class="hero-section">
                <div class="hero-content">
                    <h2 class="hero-title">{{ $t('hero.title') }}</h2>
                    <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>

                    <div class="cta-group">
                        <el-button type="primary" size="large" class="cta-button">
                            {{ $t('hero.ctaPrimary') }}
                        </el-button>
                        <el-button size="large" class="cta-button secondary">
                            {{ $t('hero.ctaSecondary') }}
                        </el-button>
                    </div>
                </div>
            </section>

            <!-- 核心功能卡片 -->
            <section class="features-section">
                <el-row :gutter="32">
                    <el-col v-for="(feature, index) in features" :key="index" :md="8" :sm="24">
                        <el-card class="feature-card" shadow="hover">
                            <div class="card-icon-wrapper">
                                <component :is="feature.icon" class="feature-icon" />
                            </div>
                            <h3 class="card-title">{{ $t(feature.titleKey) }}</h3>
                            <p class="card-description">{{ $t(feature.descKey) }}</p>
                        </el-card>
                    </el-col>
                </el-row>
            </section>

            <!-- 数据统计展示 -->
            <section class="stats-section">
                <el-row :gutter="48">
                    <el-col v-for="(stat, index) in stats" :key="index" :md="6" :sm="12">
                        <div class="stat-item">
                            <div class="stat-value">{{ stat.value }}</div>
                            <div class="stat-label">{{ $t(stat.labelKey) }}</div>
                        </div>
                    </el-col>
                </el-row>
            </section>
        </main>

        <!-- 新增页脚 -->
        <el-footer class="security-footer">
            <div class="footer-content">
                <el-row :gutter="40">
                    <!-- 公司简介 -->
                    <el-col :md="6" :sm="12">
                        <div class="footer-section">
                            <img src="@/assets/logo.svg" alt="VendorSecure" class="footer-logo" />
                            <p class="footer-description">{{ $t('footer.companyDesc') }}</p>
                            <div class="social-links">
                                <a v-for="(social, index) in socialLinks" :key="index" :href="social.link"
                                    target="_blank" :title="social.name" class="social-item">
                                    <el-icon :size="22">
                                        <component :is="`icon:${social.icon}`" :style="{ color: social.color }" />
                                    </el-icon>
                                </a>
                            </div>
                        </div>
                    </el-col>

                    <!-- 产品链接 -->
                    <el-col :md="6" :sm="12">
                        <div class="footer-section">
                            <h4 class="footer-title">{{ $t('footer.productTitle') }}</h4>
                            <ul class="footer-links">
                                <li v-for="(link, index) in productLinks" :key="index">
                                    <el-link type="info" :href="link.url">
                                        {{ $t(link.labelKey) }}
                                    </el-link>
                                </li>
                            </ul>
                        </div>
                    </el-col>

                    <!-- 资源链接 -->
                    <el-col :md="6" :sm="12">
                        <div class="footer-section">
                            <h4 class="footer-title">{{ $t('footer.resourcesTitle') }}</h4>
                            <ul class="footer-links">
                                <li v-for="(link, index) in resourceLinks" :key="index">
                                    <el-link type="info" :href="link.url">
                                        {{ $t(link.labelKey) }}
                                    </el-link>
                                </li>
                            </ul>
                        </div>
                    </el-col>

                    <!-- 联系方式 -->
                    <el-col :md="6" :sm="12">
                        <div class="footer-section">
                            <h4 class="footer-title">{{ $t('footer.contactTitle') }}</h4>
                            <div class="contact-info">
                                <p><el-icon>
                                        <ChatLineRound />
                                    </el-icon> {{ $t('footer.support') }}</p>
                                <p><el-icon>
                                        <Document />
                                    </el-icon> {{ $t('footer.docs') }}</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>

                <!-- 版权信息 -->
                <div class="copyright-section">
                    <el-divider />
                    <p class="copyright-text">
                        © 2023 VendorSecure. {{ $t('footer.allRightsReserved') }}
                    </p>
                </div>
            </div>
        </el-footer>
    </div>

</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
import { ArrowDown, Monitor, CircleCheck, DataAnalysis } from '@element-plus/icons-vue'
// 新增图标导入 
import { Link, ChatLineRound, Document } from '@element-plus/icons-vue'

const { t, locale } = useI18n()
// 当前语言处理
const currentLang = computed(() => locale.value as 'en' | 'zh')
// 功能列表数据
const features = ref([
    {
        icon: Monitor,
        titleKey: 'features.realTime.title',
        descKey: 'features.realTime.desc'
    },
    {
        icon: CircleCheck,
        titleKey: 'features.compliance.title',
        descKey: 'features.compliance.desc'
    },
    {
        icon: DataAnalysis,
        titleKey: 'features.analytics.title',
        descKey: 'features.analytics.desc'
    }
])

// 统计数字
const stats = ref([
    { value: '5000+', labelKey: 'stats.vendors' },
    { value: '99.9%', labelKey: 'stats.accuracy' },
    { value: '24/7', labelKey: 'stats.support' },
    { value: '50+', labelKey: 'stats.frameworks' }
])

// 社交媒体链接数据
const socialLinks = ref([
    {
        icon: 'ri-linkedin-fill',
        link: 'https://linkedin.com/company/aiconforms',
        name: 'LinkedIn',
        color: '#0A66C2' // 品牌蓝色
    },
    {
        icon: 'ri-twitter-x-line',
        link: 'https://x.com/aiconforms',
        name: 'X (Twitter)',
        color: '#000000' // 黑色
    },
    {
        icon: 'ri-facebook-fill',
        link: 'https://facebook.com/aiconforms',
        name: 'Facebook',
        color: '#1877F2' // 脸书蓝
    },
    {
        icon: 'ri-github-fill',
        link: 'https://github.com/aiconforms',
        name: 'GitHub',
        color: '#181717' // GitHub黑
    },
    {
        icon: 'ri-youtube-fill',
        link: 'https://youtube.com/@aiconforms',
        name: 'YouTube',
        color: '#FF0000' // 油管红
    },
    {
        icon: 'ri-wechat-fill',
        link: '#wechat-qrcode',
        name: '微信公众号',
        color: '#07C160' // 微信绿
    }
])

// 产品链接数据
const productLinks = ref([
    { labelKey: 'footer.features', url: '#' },
    { labelKey: 'footer.pricing', url: '#' },
    { labelKey: 'footer.integrations', url: '#' }
])

// 资源链接数据 
const resourceLinks = ref([
    { labelKey: 'footer.blog', url: '#' },
    { labelKey: 'footer.caseStudies', url: '#' },
    { labelKey: 'footer.webinars', url: '#' }
])
const handleLanguageChange = (lang: 'en' | 'zh') => {
    locale.value = lang
    localStorage.setItem('risk-lang', lang)
}
</script>

<style lang="scss" scoped>
.vendor-risk-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: $project-background-color-base;

    .security-header {
        background: $project-color-white;
        box-shadow: $project-box-shadow-light;
        height: $project-header-height;

        .header-content {
            @include flex-space-between;
            max-width: $project-container-max-width;
            height: 100%;
            margin: 0 auto;
            padding: 0 $project-spacing-3;

            .brand-group {
                @include flex-center;
                gap: $project-spacing-2;

                .header-logo {
                    height: 32px;
                    width: auto;
                }

                .brand-title {
                    font-size: $project-font-size-large;
                    color: $project-color-text-primary;
                    font-weight: $project-font-weight-bold;
                }
            }

            .lang-selector {
                :deep(.el-button) {
                    padding: $project-spacing-1 $project-spacing-2;
                    color: $project-color-text-regular;

                    &:hover {
                        color: $project-color-primary;
                    }
                }
            }
        }
    }

    .risk-main {
        flex: 1;
        margin: 0 auto;
        margin-bottom: $project-spacing-4 * 3; // 增加底部间距
        max-width: $project-container-max-width;
        padding: $project-spacing-4;

        .hero-section {
            text-align: center;
            padding: $project-section-spacing 0;

            .hero-title {
                font-size: $project-font-size-hero-title;
                color: $project-color-text-primary;
                margin-bottom: $project-spacing-3;
                line-height: $project-line-height-heading;
            }

            .hero-subtitle {
                font-size: $project-font-size-hero-subtitle;
                color: $project-color-text-regular;
                margin-bottom: $project-spacing-4;
                max-width: 800px;
                margin-left: auto;
                margin-right: auto;
            }

            .cta-group {
                @include flex-center;
                gap: $project-spacing-3;
                margin-bottom: $project-spacing-4 * 2;

                .cta-button {
                    padding: $project-spacing-2 $project-spacing-4;
                    font-weight: $project-font-weight-bold;

                    &.secondary {
                        background: rgba($project-color-primary, 0.1);
                        color: $project-color-primary;

                        &:hover {
                            background: rgba($project-color-primary, 0.2);
                        }
                    }
                }
            }
        }

        .features-section {
            margin: $project-section-spacing 0;

            .feature-card {
                height: 100%;
                border: none;
                border-radius: $project-border-radius-card;
                transition: $project-transition-all;

                :deep(.el-card__body) {
                    padding: $project-spacing-4;
                }

                .card-icon-wrapper {
                    @include flex-center;
                    background: rgba($project-color-primary, 0.1);
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    margin-bottom: $project-spacing-3;
                }

                .feature-icon {
                    color: $project-color-primary;
                    width: 32px;
                    height: 32px;
                }

                .card-title {
                    font-size: $project-font-size-medium;
                    color: $project-color-text-primary;
                    margin-bottom: $project-spacing-2;
                }

                .card-description {
                    color: $project-color-text-regular;
                    line-height: $project-line-height-base;
                }
            }
        }

        .stats-section {
            padding: $project-section-spacing 0;

            .stat-item {
                text-align: center;
                padding: $project-spacing-4;
                background: $project-color-white;
                border-radius: $project-border-radius-card;
                box-shadow: $project-box-shadow-light;

                .stat-value {
                    font-size: 48px;
                    font-weight: $project-font-weight-bold;
                    color: $project-stat-number-color;
                    margin-bottom: $project-spacing-2;
                }

                .stat-label {
                    color: $project-color-text-secondary;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
            }
        }
    }
}

@media (max-width: $project-breakpoint-md) {
    .vendor-risk-container {
        .risk-main {
            padding: $project-spacing-3;

            .hero-section {
                .hero-title {
                    font-size: $project-font-size-extra-large;
                }

                .hero-subtitle {
                    font-size: $project-font-size-medium;
                }
            }

            .features-section {
                .el-col {
                    margin-bottom: $project-spacing-3;
                }
            }

            .stats-section {
                .el-col {
                    margin-bottom: $project-spacing-3;
                }
            }
        }
    }
}

// 新增页脚样式
.security-footer {
    background: $project-background-color-dark;
    color: $project-color-text-secondary;
    padding: $project-spacing-4 0;
    margin-top: auto;
    height: auto;

    .footer-content {
        max-width: $project-container-max-width;
        margin: 0 auto;
        padding: 0 $project-spacing-3;
    }

    .footer-section {
        margin-bottom: $project-spacing-4;

        .footer-logo {
            height: 40px;
            margin-bottom: $project-spacing-3;
        }

        .footer-title {
            color: $project-color-white;
            font-size: $project-font-size-medium;
            margin-bottom: $project-spacing-2;
        }

        .footer-links {
            list-style: none;
            padding: 0;

            li {
                margin-bottom: $project-spacing-2;
            }
        }

        .social-links {
            @include flex-center;
            gap: $project-spacing-4;

            .social-item {
                transition: transform 0.3s $project-transition-timing;

                &:hover {
                    transform: translateY(-2px);

                    // 保留品牌色或使用主色
                    .el-icon {
                        color: $project-color-primary !important;
                    }
                }
            }
        }

        .contact-info {
            p {
                @include flex-center-vertical;
                gap: $project-spacing-2;
                margin-bottom: $project-spacing-2;
            }
        }
    }

    .copyright-section {
        text-align: center;
        padding-top: $project-spacing-4;

        .el-divider {
            margin: $project-spacing-3 0;
            background-color: rgba($project-color-white, 0.1);
        }

        .copyright-text {
            font-size: $project-font-size-small;
        }
    }
}

// 响应式调整
@media (max-width: $project-breakpoint-md) {
    .security-footer {
        text-align: center;

        .footer-section {
            margin-bottom: $project-spacing-4 * 2;
        }

        .social-links {
            justify-content: center !important;
        }

        .contact-info p {
            justify-content: center;
        }
    }
}
</style>