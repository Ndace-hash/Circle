<template>
  <section class="flex flex-col items-center w-full pt pb-4 relative m-0">
    <div
      class="bg-slate-400 flex rounded-b-lg sticky top-0 left-0 w-full justify-between m-0 z-10 px-3 py-2 items-center shadow-xl"
    >
      <button
        class="bg-transparent text-white text-xl p-0"
        @click="$router.back()"
      >
        &LeftArrow;
      </button>
      <button class="bg-transparent flex flex-col gap-1 p-0">
        <span class="w-[5px] h-[5px] rounded-full border-2 border-white"></span>
        <span class="w-[5px] h-[5px] rounded-full border-2 border-white"></span>
        <span class="w-[5px] h-[5px] rounded-full border-2 border-white"></span>
      </button>
    </div>
    <div
      class="img-wrapper overflow-hidden w-24 h-24 rounded-full border-4 my-4"
    >
      <img
        src="../assets/profile.jpg"
        alt="Your Profile image"
        class="w-full h-full"
      />
    </div>
    <h3 class="lowercase font-semibold text-center text-base">@Filipe</h3>
    <div class="flex gap-4 mx-auto my-2">
      <h4 class="capitalize text-sm font-[500]">
        followers <span class="font-semibold uppercase text-base">3k</span>
      </h4>
      <h4 class="capitalize text-sm font-[500]">
        following <span class="font-semibold uppercase text-base">184</span>
      </h4>
    </div>
    <div class="flex gap-4 mx-auto my-2">
      <button class="bg-slate-400 py-1 text-white">Follow</button>
      <button class="bg-slate-300 py-1 text-white">Message</button>
    </div>

    <section>
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </section>
  </section>
</template>

<script setup lang="ts">
import FeedCard from "../components/FeedCard.vue";
</script>

<style scoped></style>
