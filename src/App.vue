<template>
  <div id="app">
    <ckeditor
      v-model="editorData"
      :editor="editor"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
  export default {
    name: 'App',
    data() {
      return {
        editor: ClassicEditor,
        editorData: '<p>Content of the editor.</p>',
        editorConfig: {
          // The configuration of the editor.
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
