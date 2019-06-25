module.exports = {
    entry: {
      analytics: './assets/js/analytics.js'
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/dist'
    }
  };

const ImageSpritePlugin = require('image-sprite-webpack-plugin');
 
new ImageSpritePlugin({
    commentOrigin: false,
    compress: true,
    extensions: ['gif', 'png'],
    indent: '',
    log: true,
    //outputPath: './public',
    outputFilename: 'teste/css/sprite-[hash].png',
    padding: 10,
    suffix: '' + Date.now() // do not need to use it with a outputFilename's [hash].
})