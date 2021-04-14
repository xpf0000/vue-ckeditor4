import Ckeditor from './components'

function install(Vue, config = { imageChoose: null }) {
  if (install.installed) return
  install.installed = true
  Ckeditor.config(config)
  Vue.component('Ckeditor', Ckeditor)
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(install)
}
export default install
export { Ckeditor }
