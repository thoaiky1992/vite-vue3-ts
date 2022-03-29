<template>
  <v-form
    :validation-schema="schema"
    class="
      focus:shadow-outline
      m-auto
      mt-3
      w-1/2
      appearance-none
      rounded
      border
      py-5
      px-3
      leading-tight
      text-gray-700
      shadow
      focus:outline-none
    "
    @submit="submit"
  >
    <div>
      <v-field
        class="
          focus:shadow-outline
          w-44
          appearance-none
          rounded
          border
          py-2
          px-3
          leading-tight
          text-gray-700
          shadow
          focus:outline-none
        "
        type="text"
        placeholder="Username"
        name="name"
        rules="required|min:8"
      ></v-field>
    </div>
    <div>
      <v-error-message name="name"></v-error-message>
    </div>
    <div>
      <v-field
        class="
          focus:shadow-outline
          w-44
          appearance-none
          rounded
          border
          py-2
          px-3
          leading-tight
          text-gray-700
          shadow
          focus:outline-none
        "
        type="text"
        placeholder="Email"
        name="email"
        rules="required"
      ></v-field>
    </div>
    <div>
      <v-error-message name="email"></v-error-message>
    </div>
    <div>
      <button
        class="
          focus:shadow-outline
          mt-3
          rounded
          bg-blue-500
          py-2
          px-4
          font-bold
          text-white
          hover:bg-blue-700
          focus:outline-none
        "
      >
        sumit
      </button>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      schema: {
        name: 'required|min:8',
        email: 'required|email'
      }
    };
  },
  methods: {
    submit(values) {
      // console.log(values);
    }
  }
};
</script>

<style></style>
