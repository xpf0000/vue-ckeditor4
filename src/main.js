import Vue from 'vue'
import App from './App'
import CKEditor from '@ckeditor/ckeditor5-vue2'
Vue.use(CKEditor)
new Vue({
  el: '#app',
  render: (h) => h(App)
})
