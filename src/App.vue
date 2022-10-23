<template>
  <section
    class="sticky top-0 shadow-lg z-50 rounded-b-md overflow-hidden"
    v-if="$route.name === 'messages'"
  >
    <header
      class="flex items-center justify-between bg-light py-2 px-2 lg:px-8"
    >
      <h1 class="logo text-xl text-brand font-bold opacity-80">Circle</h1>
      <div class="flex items-center">
        <button class="rounded-full">
          <i class="fa-solid fa-search text-base font-semibold text-dark"></i>
        </button>
        <div
          v-if="loggedIn"
          class="md:cursor-pointer bg-transparent overflow-hidden w-12 h-12 rounded-full flex flex-col gap-1 border-4 shadow-lg border-mid"
          @click="viewMyProfile"
        >
          <img
            :src="user.currentUser?.user_metadata.picture"
            alt="Profile"
            class="w-full h-full"
          />
        </div>
      </div>
    </header>
    <!-- <div class="tabs flex justify-around bg-light py-2">
        <RouterLink
          class="text-dark text-center flex items-center justify-center capitalize font-medium text-xl pb-1 px-4 rounded-sm"
          to="/messages"
          >messages</RouterLink
        >
        <RouterLink
          class="text-dark text-center flex items-center justify-center capitalize font-medium text-xl pb-1 px-4 rounded-sm"
          to="/feeds"
          >feeds</RouterLink
        >
      </div> -->
  </section>
  <RouterView />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useAuthUser } from "./store/authUser";
import { onMounted, ref } from "vue";
import { supabase } from "./config/supabase";

const user = useAuthUser();
const router = useRouter();
const route = useRoute();
const loggedIn = ref(true);

onMounted(() => {
  user.currentUser = supabase.auth.user();
  console.log(user.currentUser);
});

const signIn = () => {
  router.push({
    name: "feeds",
  });
};

const viewMyProfile = () => {
  router.push({
    name: "profile",
  });
};
</script>

<style scoped>
.router-link-exact-active {
  @apply border-b-[3px] text-dark;
}
</style>
