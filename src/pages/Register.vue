<template>
  <div class="flex items-center justify-center h-screen bg-dark w-full">
    <form
      class="bg-white p-12 rounded-lg shadow-xl w-[90%] md:w-2/5"
      @submit.prevent="signUp"
    >
      <div class="form-group mb-2">
        <label
          for="display-name"
          class="block font-semibold text-lg capitalize my-1 text-dark"
          >Display name</label
        >
        <input
          type="text"
          placeholder="what do you wnat to be called?"
          class="border-2 border-dark py-1 px-2 rounded-md shadow-md w-full block focus:outline-none"
          required
          v-model="username"
        />
      </div>
      <div class="form-group mb-2">
        <label
          for="email"
          class="block font-semibold text-lg capitalize my-1 text-dark"
          >Email</label
        >
        <input
          type="email"
          placeholder="email address"
          class="border-2 border-dark py-1 px-2 rounded-md shadow-md w-full block focus:outline-none"
          required
          v-model="email"
        />
      </div>
      <div class="form-group mb-2">
        <label
          for="password"
          class="block font-semibold text-lg capitalize my-1 text-dark"
          >Password</label
        >
        <input
          type="password"
          placeholder="enter a strong password"
          class="border-2 border-dark py-1 px-2 rounded-md shadow-md w-full block focus:outline-none"
          required
          v-model="password"
        />
      </div>
      <input
        type="submit"
        value="register"
        class="bg-brand py-1 px-8 my-2 rounded-md text-white font-semibold capitalize"
      />

      <p class="text-sm mt-3">
        Already have an account?
        <router-link
          to="/login"
          class="underline font-semibold capitalize text-brand"
          >login</router-link
        >
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "../config/supabase";
import { useRouter } from "vue-router";
import { useAuthUser } from "../store/authUser";

const router = useRouter();
const user = useAuthUser();
const username = ref("");
const email = ref("");
const password = ref("");

const signUp = async () => {
  const { error } = await supabase.auth.signUp(
    {
      email: email.value,
      password: password.value,
    },
    {
      data: {
        display_name: username.value,
      },
    }
  );

  if (error) {
    throw error;
    return;
  }

  user.loginDetails.email = email.value;
  user.loginDetails.password = password.value;

  router.push({ name: "login" });
  email.value = "";
  username.value = "";
  password.value = "";
};
</script>
