<template>
  <section>
    <header class="flex items-center justify-between bg-slate-400 py-2 px-2">
      <h1 class="logo text-xl text-white font-bold opacity-80">Chatter</h1>

      <button
        class="md:cursor-pointer bg-transparent rounded-full flex flex-col gap-1"
        v-if="loggedIn"
      >
        <span
          class="rounded-full border-[2px] border-black w-[5px] h-[5px]"
        ></span>
        <span
          class="rounded-full border-[2px] border-black w-[5px] h-[5px]"
        ></span>
        <span
          class="rounded-full border-[2px] border-black w-[5px] h-[5px]"
        ></span>
      </button>
      <button class="bg-slate-300 font-medium" v-else>Login</button>
    </header>
    <div class="tabs flex justify-around bg-slate-400 py-2">
      <RouterLink
        class="text-white text-center flex items-center justify-center capitalize font-medium text-xl pb-1 px-4 rounded-sm"
        to="/messages"
        >messages</RouterLink
      >
      <RouterLink
        class="text-white text-center flex items-center justify-center capitalize font-medium text-xl pb-1 px-4 rounded-sm"
        to="/feeds"
        >feeds</RouterLink
      >
    </div>
  </section>

  <RouterView />
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const loggedIn = ref(true);
</script>

<style scoped>
.router-link-exact-active {
  @apply border-b-[3px] text-white;
}
</style>
