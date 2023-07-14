import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  ssr: false,
  vite: {
    plugins: [
      Components({
        dts: true,
        resolvers: [
          ArcoResolver({ resolveIcons: true }),
        ],
      }),
    ],
  },
});
