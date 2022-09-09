<template>
  <div
    class="w-5/6 md:w-3/6 py-1 px-3 flex gap-0 flex-col flex-wrap my-2 rounded-lg mx-2"
    :class="
      user.currentUser === text.sender_id
        ? 'bg-mid rounded-br-none text-dark self-end'
        : 'bg-dark rounded-bl-none text-white'
    "
  >
    <div class="flex m-0 justify-between items-center w-full p-0">
      <span class="font-semibold my-2 text-xl">{{ text.sender_id }}</span>
      <span class="font-light my-2 text-sm">{{ text.time }}</span>
    </div>
    <p class="text-lg my-2 whitespace-pre-line w-3/4">{{ text.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { Message } from "../composables/interface";
import { useAuthUser } from "../store/authUser";

const user = useAuthUser();
defineProps<{ text: Message }>();
</script>

<style scoped></style>
