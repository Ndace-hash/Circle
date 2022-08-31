<template>
  <div class="flex gap-3 items-center px-2 py-4 border-b-2">
    <div
      class="img-wrapper overflow-hidden w-12 h-12 rounded-full flex items-center justify-center"
    >
      <img src="../assets/profile.jpg" alt="" class="w-full h-full" />
    </div>
    <div class="name-container flex relative flex-col w-full">
      <h3 class="font-[700] text-lg">Flex Savi</h3>
      <p class="text-sm">hey what's up</p>
      <span
        class="absolute right-4 top-[50%] -translate-y-[50%] bg-slate-400 font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md"
        >2</span
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>
