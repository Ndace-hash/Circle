<template>
  <section
    class="sticky top-0 shadow-lg z-50 rounded-b-md overflow-hidden"
    v-if="$route.name === 'messages'"
  >
    <header
      class="flex items-center justify-between bg-light py-2 px-2 lg:px-8"
    >
      <h1 class="logo text-xl text-brand font-bold opacity-80">Chatter</h1>

      <div
        v-if="loggedIn"
        class="md:cursor-pointer bg-transparent overflow-hidden w-12 h-12 rounded-full flex flex-col gap-1 border-4 shadow-lg border-mid"
        @click="viewMyProfile"
      >
        <img src="./assets/profile.jpg" alt="Profile" class="w-full h-full" />
      </div>

      <button class="bg-slate-300 font-medium" v-else @click="signIn">
        Login
      </button>
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
import { ref, watch } from "vue";
const router = useRouter();
const route = useRoute();
const loggedIn = ref(true);

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
