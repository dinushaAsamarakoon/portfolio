const path = require('path')
import minify from 'vite-plugin-minify'

module.exports = {
  root: './',

  plugins: [
    minify({
      removeComments: true,
    }),
  ],

  build: {
    outDir: '../dist',
  },


  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
}
