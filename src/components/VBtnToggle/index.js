import VBtnToggle from './VBtnToggle'
import VBtnToggleLabel from "./VBtnToggleLabel";

export { VBtnToggle, VBtnToggleLabel }

/* istanbul ignore next */
VBtnToggle.install = function install (Vue) {
  Vue.component(VBtnToggle.name, VBtnToggle)
  Vue.component(VBtnToggleLabel.name, VBtnToggleLabel)
}

export default VBtnToggle
