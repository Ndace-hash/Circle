<template>
  <div
    v-if="conversation.conversations.length == 0"
    class="h-[750px] flex flex-col items-center justify-center"
  >
    <div class="overflow-hidden w-48 h-52 flex items-center justify-center">
      <img src="../assets/no-conversations.svg" />
    </div>
    <h3 class="text-center text-xl font-semibold capitalize">
      sorry you have no conversations
    </h3>
  </div>
  <div v-else>
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
    <Chat />
  </div>
</template>

<script setup lang="ts">
import Chat from "../components/Chat.vue";
import { useAuthUser } from "../store/authUser";

const conversation = useAuthUser();
</script>
