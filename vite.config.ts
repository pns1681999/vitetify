import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Layouts from 'vite-plugin-vue-layouts'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify(),
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dts: './src/@types/typed-router.d.ts',
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        'pinia',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: './src/@types/auto-imports.d.ts',
      dirs: [
        './src/hooks',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dirs: ['./src/components'],
      extensions: ['vue', 'ts'],
      dts: './src/@types/components.d.ts',
      directoryAsNamespace: true,
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
    Layouts(),
    VueI18nPlugin({
      include: [resolve(__dirname, './src/locales/**')],
    }),
  ],
})
