<template>
    <div class="vendor-risk-container">
        <!-- 导航栏 -->
        <el-header class="security-header">
            <div class="header-content">
                <div class="brand-group">
                    <img src="@/assets/logo.svg" alt="VendorSecure" class="header-logo" />
                    <h1 class="brand-title">{{ $t('brand.name') }}</h1>
                </div>

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
    </div>

</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
import { ArrowDown,Monitor,CircleCheck,DataAnalysis } from '@element-plus/icons-vue'

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
const handleLanguageChange = (lang: 'en' | 'zh') => {
    locale.value = lang
    localStorage.setItem('risk-lang', lang)
}
</script>

<style lang="scss" scoped>
.vendor-risk-container {
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
        max-width: $project-container-max-width;
        margin: 0 auto;
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
</style>