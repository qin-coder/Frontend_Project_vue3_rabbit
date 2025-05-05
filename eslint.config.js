import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

import prettierConfig from 'eslint-config-prettier'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  // 基础文件匹配配置
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'], // 注意检查通配符是否正确（去除了隐藏字符）
  },

  // 全局忽略目录
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  // 全局语言选项
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ElMessage: 'readonly',
        ElMessageBox: 'readonly',
        ElLoading: 'readonly',
      },
    },
  },

  // ESLint 推荐规则
  js.configs.recommended,

  // Vue 基础规则集
  ...pluginVue.configs['flat/essential'],

  // 自定义规则覆盖（新增部分）
  {
    rules: {
      'vue/multi-word-component-names': [
        'warn',
        { ignores: ['index'] }, // 允许 index.vue 使用单单词名
      ],
      'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构校验
      'no-undef': 'error', // 强制检查未定义变量
    },
  },

  // 关闭与 Prettier 冲突的规则
  prettierConfig,

  // 集成 Prettier 插件
  {
    plugins: {
      prettier: {
        version: 'latest',
      },
    },
  },

  // 跳过格式校验
  skipFormatting,
])
