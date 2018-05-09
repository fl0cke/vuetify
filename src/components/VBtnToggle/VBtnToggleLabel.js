import '../../stylus/components/_button-toggle-label.styl'

export default {
  name: 'v-btn-toggle-label',
  functional: true,
  props: {
    small: Boolean,
    large: Boolean
  },
  render(h, {data, children, props}) {
    data.staticClass = data.staticClass ? `${data.staticClass} v-btn-toggle-label` : 'v-btn-toggle-label'

    if (props.small) data.staticClass += ' v-btn-toggle-label--small'
    if (props.large) data.staticClass += ' v-btn-toggle-label--large'

    return h('div', data, children)
  }
}
