<template>
  <div class="h-screen grid grid-rows-chat">
    <div
      class="bg-slate-400 flex rounded-b-lg sticky top-0 left-0 w-full gap-2 m-0 z-10 px-3 py-1 items-center shadow-xl"
    >
      <button
        class="bg-transparent text-brand text-xl p-0"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left"></i>
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
          <h3 class="text-brand lowercase font-semibold text-xl">Trevor</h3>
        </div>
      </div>
      <button class="bg-transparent flex flex-col gap-1 p-0 absolute right-5">
        <span class="w-[5px] h-[5px] rounded-full border-2 border-brand"></span>
        <span class="w-[5px] h-[5px] rounded-full border-2 border-brand"></span>
        <span class="w-[5px] h-[5px] rounded-full border-2 border-brand"></span>
      </button>
    </div>
    <section
      class="block overflow-x-hidden overflow-y-auto h-full"
      ref="chatDisplay"
    >
      <MessageBox v-for="text in messagesArray" :text="text" />
    </section>
    <div
      class="w-full sticky left-0 py-2 bottom-0 flex bg-mid rounded-t-md items-center px-1 gap-1 justify-self-end"
    >
      <textarea
        type="text"
        placeholder="Type message"
        class="w-11/12 bg-gray-300 text-dark rounded-xl py-2 px-3 overflow-y-auto overflow-x-hidden focus:outline-none"
        v-model="message"
        autofocus
      />
      <button
        class="bg-brand text-mid p-4 rounded-lg h-full text-center"
        @click.prevent="sendMessage"
      >
        <i class="fa-solid fa-paper-plane text-2xl"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import MessageBox from "../components/MessageBox.vue";
import { Message } from "../composables/interface";
const chatDisplay = ref<HTMLDivElement | null>(null);
const message = ref("");
const messagesArray = ref<Message[]>([]);
const sendMessage = () => {
  if (!message.value) return;
  messagesArray.value.push({
    // time: new Date().toLocaleTimeString(),
    time: new Date().toLocaleTimeString(),
    content: message.value,
  });
  message.value = "";
};

onMounted(() => {
  if (chatDisplay.value)
    chatDisplay.value.scroll({ top: chatDisplay.value.scrollHeight });
});
</script>

<style scoped></style>
