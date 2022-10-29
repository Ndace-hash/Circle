<template>
  <!-- <form
        @submit.prevent="signInWithUsername"
        class="flex flex-col items-center gap-3"
      >
        <div
          class="bg-[rgb(255,0,77)] text-light py-3 px-5 rounded-md font-bold"
          v-show="formError !== null"
        >
          {{ formError ? formError : null }}
        </div>
        <label for="username" class="sr-only">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          class="text-center border-dark border-2 rounded-md py-2 px-auto"
          v-model="username"
        />
        <input
          type="submit"
          value="Login"
          class="bg-brand py-2 px-8 rounded-md text-light text-xl"
        />
      </form> -->
  <div class="flex items-center justify-center h-screen bg-dark w-full">
    <form
      class="bg-white p-12 rounded-lg shadow-xl w-[90%] md:w-2/5"
      @submit.prevent="signIn"
    >
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
        value="login"
        class="bg-brand py-1 px-8 my-2 rounded-md text-white font-semibold capitalize focus:outline-none"
      />

      <p class="text-sm mt-3">
        New here?
        <router-link
          to="/register"
          class="underline font-semibold capitalize text-brand"
          >register</router-link
        >
      </p>
    </form>
  </div>

  <!-- <button
        class="bg-[rgba(0,150,255,40)] text-light font-semibold flex items-center gap-2 w-max"
        @click.prevent="signInWithGoogle"
      >
        <i class="fa-brands fa-google text-2xl"></i> Login with Google
      </button> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuthUser } from "../store/authUser";
import { useRouter } from "vue-router";
import { supabase } from "../config/supabase";

const email = ref("");
const password = ref("");

const router = useRouter();
const username = ref("");
const AuthUser = useAuthUser();
const formError = ref<Error | null>(null);
const signInWithUsername = () => {
  if (!username.value) {
    throw (formError.value = new Error("please enter your username or email"));

    return;
  }
  router.push({
    name: "messages",
  });
};
onMounted(() => {
  email.value = AuthUser.loginDetails.email;
  password.value = AuthUser.loginDetails.password;
});

const signInWithGoogle = async () => {
  const { error: authError, user } = await supabase.auth.signIn({
    provider: "google",
  });
  if (authError) throw authError;
  if (user) {
    router.push({ path: "/" });
  }
};

const signIn = async () => {
  const { error, user } = await supabase.auth.signIn({
    email: email.value,
    password: password.value,
  });
  if (error) {
    throw error;
    return;
  }
  AuthUser.currentUser = user;
  router.push({ name: "messages" });
  AuthUser.loginDetails.email = "";
  AuthUser.loginDetails.password = "";
};
</script>
