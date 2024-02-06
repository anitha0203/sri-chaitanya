const path = require('path');
const webpack = require('webpack');

module.exports = {
  // ... other webpack configuration ...
  mode: 'production',

  resolve: {
    alias: {
      // Set GSAP alias to the correct version
      gsap: path.resolve('node_modules', 'gsap'),
    },
  },

  plugins: [
    // ProvidePlugin to automatically load GSAP
    new webpack.ProvidePlugin({
      gsap: 'gsap',
    }),
  ],
};