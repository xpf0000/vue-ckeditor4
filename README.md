## vue ckeditor4扩展

### 安装
```js
npm install @xpf0000/vue-ckeditor4
```

### 使用
```vue
// 引用
import Vue from 'vue'
import Base from '@xpf0000/vue-ckeditor4'
Vue.use(Base, {
    imageChoose: (ckeditor) => {
        ckeditor.insertHtml('<img src="' + img + '"/>')
    }, 
})

<template>
  <div id="app">
    <Ckeditor v-model="value"></Ckeditor>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        value: ''
      }
    },
    mounted() {},
    methods: {}
  }
</script>

```
