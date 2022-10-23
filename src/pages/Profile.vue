<template>
  <section
    class="bg-light text-dark flex flex-col items-center w-full pt pb-4 relative m-0"
  >
    <div
      class="bg-light flex rounded-b-lg sticky top-0 left-0 w-full justify-between m-0 z-10 px-3 py-2 items-center shadow-xl"
    >
      <div class="flex gap-3 items-center">
        <button
          class="bg-transparent text-brand text-xl p-0"
          @click="$router.back()"
        >
          <i class="fa-solid fa-chevron-left font-bold"></i>
        </button>
        <h2 class="text-xl capitalize font-semibold">{{ $route.name }}</h2>
      </div>
      <button class="bg-transparent flex flex-col gap-1 p-0">
        <span class="w-[5px] h-[5px] rounded-full border-2 border-brand"></span>
        <span class="w-[5px] h-[5px] rounded-full border-2 border-brand"></span>
        <span class="w-[5px] h-[5px] rounded-full border-2 border-brand"></span>
      </button>
    </div>
    <div
      class="img-wrapper overflow-hidden w-24 h-24 rounded-full border-4 my-4"
    >
      <img
        :src="user.currentUser?.user_metadata.picture"
        alt="Your Profile image"
        class="w-full h-full"
      />
    </div>
    <h3 class="lowercase font-semibold text-center text-base">
      @{{ (user.currentUser?.user_metadata.name).replace(" ", "") }}
    </h3>
    <div class="flex gap-4 mx-auto my-2">
      <h4 class="capitalize text-sm font-[500]">
        followers <span class="font-semibold uppercase text-base">3k</span>
      </h4>
      <h4 class="capitalize text-sm font-[500]">
        following <span class="font-semibold uppercase text-base">300</span>
      </h4>
    </div>
    <div class="flex gap-4 mx-auto my-2">
      <button class="bg-brand py-1 text-white">Follow</button>
      <button class="bg-brand py-1 text-white">Message</button>
    </div>

    <!-- <section class="mt-4">
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </section> -->
  </section>
</template>

<script setup lang="ts">
import FeedCard from "../components/FeedCard.vue";
import { useAuthUser } from "../store/authUser";
const user = useAuthUser();
</script>

<style scoped></style>
