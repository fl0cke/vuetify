import application from './mixins/application'
import theme from './mixins/theme'
import icons from './mixins/icons'
import options from './mixins/options'
import { consoleWarn } from '../../util/console'
import goTo from './util/goTo'

const Vuetify = {
  install (Vue, opts = {}) {
    if (this.installed) return

    this.installed = true

    Vue.prototype.$vuetify = new Vue({
      data: {
        application,
        breakpoint: {},
        dark: false,
        options: options(opts.options),
        theme: theme(opts.theme),
        icons: icons(opts.iconfont, opts.icons)
      },
      methods: {
        goTo
      }
    })

    if (opts.transitions) {
      Object.values(opts.transitions).forEach(transition => {
        if (transition.name !== undefined && transition.name.startsWith('v-')) {
          Vue.component(transition.name, transition)
        }
      })
    }

    if (opts.directives) {
      Object.values(opts.directives).forEach(directive => {
        Vue.directive(directive.name, directive)
      })
    }

    if (opts.components) {
      Object.values(opts.components).forEach(component => {
        Vue.use(component)
      })
    }
  }
}

export default Vuetify
