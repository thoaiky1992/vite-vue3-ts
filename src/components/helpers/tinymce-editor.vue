<template>
  <div>
    <editor
      ref="refEditor"
      api-key="mk15h6mmxwvny28lj5kbmzgcb2rt9sm4v8mbvwgedsix1mbi"
      :init="config"
    />
  </div>
</template>

<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue';
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const refEditor = ref();
const handleUpload = async (blobInfo: any, progress: any) =>
  new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('image', blobInfo.blob(), blobInfo.filename());
    resolve('https://img.topthuthuat.net/wp-content/uploads/2019/11/30214859/31.jpg');
    // axios.post('http://localhost:4000/api/posts/upload', formData).then((res) => {
    //   resolve('https://img.topthuthuat.net/wp-content/uploads/2019/11/30214859/31.jpg');
    // });
  });
//
// onMounted(() => {
//   setTimeout(() => {
//     refEditor.value.rerender({ language: 'en' });
//   }, 2000);
// });

const config: Object = computed(() => {
  return {
    height: '580px',
    plugins: 'tinydrive image link media emoticons table lists',
    menubar: 'file edit insert format tools table tc help',
    toolbar:
      'language undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify lineheight | bullist numlist outdent indent | forecolor backcolor | removeformat emoticons | media image',
    // content_css: 'document',
    content_style: 'p, ol, ul { margin: 0; pading: 0 }',
    language: locale.value,
    images_upload_handler: handleUpload
  };
});
</script>
