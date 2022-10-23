<template>
  <div class="h-screen flex items-center justify-center">
    <div class="form-inner flex flex-col gap-6 items-center">
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
      <button
        class="bg-[rgba(0,150,255,40)] text-light font-semibold flex items-center gap-2 w-max"
        @click.prevent="signInWithGoogle"
      >
        <i class="fa-brands fa-google text-2xl"></i> Login with Google
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthUser } from "../store/authUser";
import { useRouter } from "vue-router";
import { supabase } from "../config/supabase";

const router = useRouter();
const username = ref("");
const AuthUser = useAuthUser();
const formError = ref<Error | null>(null);
const signInWithUsername = () => {
  if (!username.value) {
    throw (formError.value = new Error("please enter your username or email"));

    return;
  }
  // AuthUser.currentUser = username.value;
  router.push({
    name: "messages",
  });
};

const signInWithGoogle = async () => {
  const { error: authError, user } = await supabase.auth.signIn({
    provider: "google",
  });
  if (authError) throw authError;
  if (user) {
    router.push({ path: "/" });
  }

};
</script>
