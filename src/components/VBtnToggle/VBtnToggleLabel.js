import '../../stylus/components/_button-toggle-label.styl'

export default {
  name: 'v-btn-toggle-label',
  functional: true,
  render (h, { data, children}) {
    data.staticClass = (`v-btn-toggle-label ${data.staticClass || ''}`).trim()
    return h('div', data, children)
  }
}
