## vue elementu-ui form扩展

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
  labelWidth: '200px',   // 标题宽度
  labelPosition: 'left', // 标题位置  left|right|top
  maxLabelFont: 10       // 标题最大字符 超出会自动变为top上下结构
})

<template>
  <div id="app">
    <BaseForm ref="baseForm" :list="list" :form="form" :rules="rules">
      <template #自定义>
        <el-input v-model="form.xxx" style="width: 300px"></el-input>
        <el-button>选择</el-button>
      </template>
    </BaseForm>
    <el-button @click="doSubmit">确定</el-button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        list: [
          {
            type: 'input',
            label: '输入框',
            prop: 'name',
            placeholder: '请输入姓名'
          },
          {
            type: 'password',
            label: '密码框',
            prop: 'password',
            placeholder: '请输入密码'
          },
          {
            type: 'textarea',
            label: '文本框',
            prop: 'text',
            placeholder: '请输入'
          },
          {
            type: 'image',
            label: '用户头像',
            prop: 'image',
            choose: this.chooseImg
          },
          {
            type: 'images',
            label: '商品轮播图123',
            prop: 'images',
            max: 6,
            choose: this.chooseImg
          },
          {
            type: 'select',
            label: '下拉框',
            prop: 'select',
            options: [
              {
                label: '选项1',
                value: '1'
              },
              {
                label: '选项2',
                value: '2'
              },
              {
                label: '选项3',
                value: '3'
              }
            ]
          },
          {
            type: 'checkbox',
            label: '复选框',
            prop: 'checkbox',
            options: [
              {
                label: '选项1',
                value: '1'
              },
              {
                label: '选项2',
                value: '2'
              },
              {
                label: '选项3',
                value: '3'
              }
            ]
          },
          {
            type: 'radio',
            label: '单选框',
            prop: 'radio',
            options: [
              {
                label: '选项1',
                value: '1'
              },
              {
                label: '选项2',
                value: '2'
              },
              {
                label: '选项3',
                value: '3'
              }
            ]
          },
          {
            type: 'date',
            label: '日期选择',
            prop: 'date'
          },
          {
            type: 'datetime',
            label: '日期时间选择',
            prop: 'datetime'
          },
          {
            type: 'daterange',
            label: '日期时间范围',
            prop: 'daterange'
          },
          {
            label: '自定义',
            prop: 'xxx'
          }
        ],
        form: {
          name: '张三',
          image: { id: 0, image: '' },
          images: [],
          checkbox: [],
          radio: '',
          date: null,
          datetime: null,
          daterange: [],
          xxx: ''
        },
        rules: {
          name: [
            {
              required: true, //是否必填
              message: '姓名不能为空', //规则提示
              trigger: 'blur' //何事件触发
            }
          ]
        }
      }
    },
    mounted() {},
    methods: {
      chooseImg(vm) {
        vm.value = {
          id: vm.index,
          image:
            'https://1.s131i.faiusr.com/4/AIMBCAAQBBgAIKzfhvsFKLX-j9oFMKYDONgE.png?t=' +
            vm.index
        }
      },
      doSubmit() {
        this.$refs.baseForm.$refs.form.validate(async (valid) => {
          //如果验证通过
          if (valid) {
            console.log('验证通过 !!!', this.form)
          } else {
            return false
          }
        })
      }
    }
  }
</script>

```
