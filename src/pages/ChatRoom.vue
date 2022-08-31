<template>
  <div class="h-screen flex flex-col">
    <div
      class="bg-slate-400 flex rounded-b-lg sticky top-0 left-0 w-full gap-2 m-0 z-10 px-3 py-1 items-center shadow-xl"
    >
      <button class="bg-transparent text-white text-xl p-0" @click="goBack">
        &LeftArrow;
      </button>
      <div class="flex items-center gap-2">
        <div
          class="img-wrapper overflow-hidden w-12 h-12 rounded-full border-4 my-2"
        >
          <img
            src="../assets/profile.jpg"
            alt="Your Profile image"
            class="w-full h-full"
          />
        </div>
        <div>
          <h3 class="text-white lowercase font-semibold text-xl">Trevor</h3>
        </div>
      </div>
      <button class="bg-transparent flex flex-col gap-1 p-0 absolute right-5">
        <span class="w-[5px] h-[5px] rounded-full border-2 border-white"></span>
        <span class="w-[5px] h-[5px] rounded-full border-2 border-white"></span>
        <span class="w-[5px] h-[5px] rounded-full border-2 border-white"></span>
      </button>
    </div>
    <section class="flex flex-col justify-end flex-auto">hello</section>
    <div
      class="w-full sticky left-0 py-2 bottom-0 flex bg-slate-400 rounded-t-md items-center px-1 gap-1 justify-self-end"
    >
      <textarea
        type="text"
        placeholder="Type message"
        class="w-11/12 bg-gray-300 rounded-xl py-2 px-3 overflow-y-auto overflow-x-hidden focus:outline-none"
      />
      <button
        class="bg-slate-500 text-white p-0 w-8 h-8 rounded-full flex items-center justify-center"
      >
        &RightArrow;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { goBack } from "../composables/useRoute";
</script>

<style scoped></style>
