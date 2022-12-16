<template>
  <div class="m-auto w-full max-w-xs">
    <button
      class="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
      type="button"
      @click="submit"
    >
      Sign In
    </button>
    <button
      class="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
      type="button"
      @click="fetchUser"
    >
      Fetch User
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onBeforeMount, onMounted, ref } from 'vue';
import { Form } from 'vee-validate';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default defineComponent({
  setup() {
    const schema = {
      password: 'required|min:6',
      email: 'required|email'
    };
    axios.defaults.withCredentials = true;
    const refForm = ref(null);
    const router = useRouter();
    const submit = async () => {
      // const validate = await refForm.value.validate();
      // if (!validate.valid) return;
      const payload = {
        email: 'ky@gmail.com',
        password: 'Ky@123456'
      };
      const response = await axios.post('/api/v1/auth/login', payload);
      console.log(response.data);

      // localStorage.setItem('access_token', token);
      // localStorage.setItem('refresh_token', token);
      // await router.push('/posts');
    };
    const fetchUser = async () => {
      const response = await axios.get('/api/v1/users');
      console.log(response);
    };

    return { schema, submit, refForm, fetchUser };
  }
});
</script>

<style></style>
