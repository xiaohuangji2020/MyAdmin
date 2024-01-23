module.exports = {
  plugins: {
    // 启动deep选择器
    'postcss-preset-env': {
      // The stage can be 0 (experimental) through 4 (stable), or false
      stage: 4,
      features: {
        'nesting-rules': true,
      },
    },
  },
};
