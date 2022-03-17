<template>
  <v-form
    :validation-schema="schema"
    class="
      shadow
      appearance-none
      border
      rounded
      py-5
      px-3
      mt-3
      text-gray-700
      leading-tight
      focus:outline-none focus:shadow-outline
      m-auto
      w-1/2
    "
    @submit="submit"
  >
    <div>
      <v-field
        class="
          shadow
          appearance-none
          border
          rounded
          py-2
          px-3
          text-gray-700
          leading-tight
          focus:outline-none focus:shadow-outline
          w-44
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
          shadow
          appearance-none
          border
          rounded
          py-2
          px-3
          text-gray-700
          leading-tight
          focus:outline-none focus:shadow-outline
          w-44
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
          mt-3
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded
          focus:outline-none focus:shadow-outline
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
