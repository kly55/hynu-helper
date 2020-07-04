const path = require('path')

const config = {
  projectName: 'hynuHelper',
  date: '2020-2-20',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      [
        'env',
        {
          modules: false
        }
      ]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread'
    ]
  },
  // 一些全局变量
  defineConstants: {
    PATH: JSON.stringify('/pages/treasure/treasure'),
    SLOGAN: '衡师精彩尽在我的衡师',
    CDN:
      'https://7869-xianghongweimini-glocv-1300442075.tcb.qcloud.la/hynu-helper',
    SHARE: `https://7869-xianghongweimini-glocv-1300442075.tcb.qcloud.la/hynu-helper/loogo_share.png`
  },
  sass: {
    resource: [
      path.resolve(__dirname, '..', 'src/styles/mixins.scss'),
      path.resolve(__dirname, '..', 'src/styles/color.scss')
    ]
  },
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8']
        }
      },
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8']
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  alias: {
    '@images': path.resolve(__dirname, '..', 'src/assets/images'),
    '@assets': path.resolve(__dirname, '..', 'src/assets'),
    '@components': path.resolve(__dirname, '..', 'src/components'),
    '@styles': path.resolve(__dirname, '..', 'src/styles'),
    '@utils': path.resolve(__dirname, '..', 'src/utils')
  },
  copy: {
    patterns: [
      { from: 'src/sitemap.json', to: 'dist/sitemap.json' },
      { from: 'src/theme.json', to: 'dist/theme.json' }
    ]
  }
}
module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
