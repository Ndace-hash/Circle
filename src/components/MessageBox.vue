<template>
  <div
    class="w-5/6 md:w-3/6 py-1 px-3 flex gap-0 flex-col flex-wrap bg-slate-400 my-2 rounded-lg rounded-bl-none mx-2 text-white"
  >
    <div class="flex m-0 justify-between items-center w-full p-0">
      <span class="font-semibold my-2 text-xl">chika</span>
      <span class="font-light my-2 text-sm">{{ text.time }}</span>
    </div>
    <p class="text-lg my-2 whitespace-pre-line w-3/4">{{ text.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { Message } from "../composables/interface";
defineProps<{ text: Message }>();
</script>

<style scoped></style>
