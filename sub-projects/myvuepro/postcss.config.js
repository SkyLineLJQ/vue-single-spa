module.exports = {
  plugins: {
    // postcss-selector-namespace: 给所有css添加统一前缀，然后父项目添加命名空间
    'postcss-selector-namespace': {
      namespace(css) {
        // element-ui的样式不需要添加命名空间
        if (css.includes('element-variables.scss')) return '';
        return '.single-spa-vue'
      }
    },
  }
}
