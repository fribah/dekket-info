import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        forsikringer: resolve(__dirname, 'forsikringer.html'),
        om: resolve(__dirname, 'om.html'),
        innboforsikring: resolve(__dirname, 'forsikringer/innboforsikring.html'),
        husforsikring: resolve(__dirname, 'forsikringer/husforsikring.html'),
        bilforsikring: resolve(__dirname, 'forsikringer/bilforsikring.html'),
        reiseforsikring: resolve(__dirname, 'forsikringer/reiseforsikring.html'),
        barneforsikring: resolve(__dirname, 'forsikringer/barneforsikring.html'),
        livsforsikring: resolve(__dirname, 'forsikringer/livsforsikring.html'),
        uforeforsikring: resolve(__dirname, 'forsikringer/uforeforsikring.html'),
        ulykkesforsikring: resolve(__dirname, 'forsikringer/ulykkesforsikring.html'),
        kritisksykdom: resolve(__dirname, 'forsikringer/kritisk-sykdom.html'),
        behandlingsforsikring: resolve(__dirname, 'forsikringer/behandlingsforsikring.html'),
        dyreforsikring: resolve(__dirname, 'forsikringer/dyreforsikring.html'),
        sykkelforsikring: resolve(__dirname, 'forsikringer/sykkelforsikring.html'),
      },
    },
  },
})
