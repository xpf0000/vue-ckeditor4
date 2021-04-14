<template>
  <textarea :id="id"></textarea>
</template>
<script>
  /**
   * @author 徐鹏飞
   * @desc CKEditor富文本编辑器的vue组件
   */
  const uuid = () => {
    return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000)
  }
  const BaseConfig = {
    imageChoose: null
  }
  export default {
    config(c) {
      Object.assign(BaseConfig, c)
    },
    name: 'Ckeditor',
    props: {
      value: {
        type: [String, Number],
        default: 10
      }
    },
    data() {
      return {
        id: uuid()
      }
    },
    watch: {
      value: {
        handler() {
          if (!this.inited) {
            this.setCKData()
          }
          this.inited = false
        },
        immediate: false
      }
    },
    created() {},
    mounted: function () {
      this.init()
      this.setCKData()
    },
    destroyed() {
      this.hadDestoyed = true
    },
    // 销毁组件前，销毁编辑器
    beforeDestroy: function () {
      this.ckeditor.destroy(true)
    },
    methods: {
      setCKData(times = 0) {
        if (times > 50 || this.hadDestoyed) {
          return
        }
        let id = `cke_${this.id}`
        let ckdom = document.getElementById(id)
        if (!ckdom) {
          setTimeout((_) => {
            this.setCKData(times + 1)
          }, 50)
          return
        }
        let iframe = ckdom.getElementsByTagName('iframe')[0]
        if (!iframe) {
          setTimeout((_) => {
            this.setCKData(times + 1)
          }, 50)
          return
        }
        let content = iframe.contentDocument.getElementsByTagName('body')[0]
        if (!content) {
          setTimeout((_) => {
            this.setCKData(times + 1)
          }, 50)
          return
        }
        content.innerHTML = this.value
      },
      /**
       * 富文本编辑器的初始化方法 1.初始化 2.设置数据 3.添加监听事件
       */
      init() {
        let dom = document.getElementById(this.id)
        if (!dom) {
          return
        }
        dom.addImg = this.chooseImg
        this.ckeditor = window.CKEDITOR.replace(dom)
        // 设置初始内容
        this.ckeditor.setData(this.value)
        // 监听内容变更事件
        this.ckeditor.on('change', (_) => {
          this.inited = true
          this.$emit('input', this.ckeditor.getData())
        })
      },
      chooseImg() {
        BaseConfig.imageChoose &&
          BaseConfig.imageChoose.call(this, this.ckeditor)
      }
    }
  }
</script>
