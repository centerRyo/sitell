<template>
  <ckeditor tag-name="textarea" name="abstract" :editor="editor" v-model="val" :config="editorConfig"></ckeditor>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  props: ['content'],
  name: 'ckeditor-component',
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        language: 'ja',
      },
      val: this.content
    };
  }  
}
</script>