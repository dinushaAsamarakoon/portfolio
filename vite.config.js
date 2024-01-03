const path = require('path')
import minify from 'vite-plugin-minify'

module.exports = {
  root: 'src',

  plugins: [
    minify({
      removeComments: true,
    }),
  ],

  build: {
    outDir: '../dist',
  },

  base:"/portfolio/",

  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
}
