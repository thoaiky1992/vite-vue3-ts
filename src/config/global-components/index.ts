import { App } from 'vue';
import { ErrorMessage, Field, Form } from 'vee-validate';
import TinymceEditor from '@/components/helpers/tinymce-editor.vue';

export default function BootstrapGlobalComponents(app: App) {
  app.component('VForm', Form);
  app.component('VField', Field);
  app.component('VErrorMessage', ErrorMessage);
  app.component('TinymceEditor', TinymceEditor);
}
