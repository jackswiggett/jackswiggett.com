const path = require('path')

const resolveModulePath = modulePath => path.resolve('node_modules', modulePath)

// See https://github.com/janpaepke/ScrollMagic/issues/665#issuecomment-299663544
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        TweenLite: resolveModulePath('gsap/src/uncompressed/TweenLite.js'),
        TweenMax: resolveModulePath('gsap/src/uncompressed/TweenMax.js'),
        TimelineLite: resolveModulePath('gsap/src/uncompressed/TimelineLite.js'),
        TimelineMax: resolveModulePath('gsap/src/uncompressed/TimelineMax.js'),
        ScrollMagic: resolveModulePath('scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
        'animation.gsap': resolveModulePath('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        'debug.addIndicators': resolveModulePath('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
      },
    },
  })
}
