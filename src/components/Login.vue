<template>
  <div class="m-auto w-full max-w-xs">
    <v-form
      v-slot="{ errors }"
      ref="refForm"
      class="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
      :validation-schema="schema"
      @submit="submit"
    >
      <div class="mb-4">
        <label
          class="mb-2 inline-block w-full text-left text-sm font-bold text-gray-700"
          for="username"
        >
          Email
        </label>
        <v-field
          id="email"
          :class="`
            focus:shadow-outline
            w-full
            appearance-none
            rounded
            border ${errors.email ? 'border-red-500 placeholder-red-500' : ''}
            py-2
            px-3
            leading-tight
            text-gray-700
            shadow
            focus:outline-none
          `"
          name="email"
          type="text"
          placeholder="Email"
        />
        <v-error-message
          name="email"
          class="inline-block w-full text-left text-xs italic text-red-500"
        />
      </div>
      <div class="mb-6">
        <label
          class="mb-2 inline-block w-full text-left text-sm font-bold text-gray-700"
          for="password"
          >Password</label
        >
        <v-field
          id="password"
          name="password"
          :class="`
            focus:shadow-outline
            w-full
            appearance-none
            rounded
            border ${errors.password ? 'border-red-500 placeholder-red-500' : ''}
            py-2
            px-3
            leading-tight
            text-gray-700
            shadow
            focus:outline-none
          `"
          type="password"
          placeholder="******************"
        />
        <v-error-message
          name="password"
          class="inline-block w-full text-left text-xs italic text-red-500"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="
            focus:shadow-outline
            rounded
            bg-blue-500
            py-2
            px-4
            font-bold
            text-white
            hover:bg-blue-700
            focus:outline-none
          "
          type="submit"
        >
          Sign In
        </button>
        <a
          class="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </v-form>
    <p class="text-center text-xs text-gray-500">&copy;2020 Acme Corp. All rights reserved.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onBeforeMount, onMounted, ref } from 'vue';
import { Form } from 'vee-validate';
import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const axios = inject('axios');
    const schema = {
      password: 'required|min:6',
      email: 'required|email'
    };
    const refForm = ref(null);
    const router = useRouter();
    const submit = async (values) => {
      const validate = await refForm.value.validate();
      if (!validate.valid) return;
      const response = await axios.post('/auth/login', values);
      const { access_token, refresh_token } = response.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      await router.push('/posts');
    };

    return { schema, submit, refForm };
  }
});
</script>

<style></style>
