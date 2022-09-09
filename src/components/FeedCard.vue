<template>
  <article class="py-4 px-2 border-y border-mid">
    <div class="description flex gap-4 items-center my-2">
      <div class="img-wrapper overflow-hidden rounded-full w-10 h-10">
        <img src="../assets/profile.jpg" alt="profile" class="w-full h-full" />
      </div>

      <div class="flex gap-2 items-center justify-between w-3/4">
        <h3 class="font-[700] text-base">Flex savi</h3>
        <span class="text-sm opacity-80 font-light">1 min ago</span>
      </div>
    </div>
    <div class="post-content p-1">
      <p class="text-base whitespace-pre-line">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero expedita
        voluptatum, autem at voluptates facilis voluptas vel omnis voluptate
        corporis qui architecto delectus blanditiis porro ducimus similique?
        Veritatis hic dignissimos quia maiores nam qui est accusantium cum odio
        dolore modi, numquam quod aspernatur beatae blanditiis minima. Tenetur
        odit, est blanditiis minus nesciunt inventore ad, numquam error
        accusantium nostrum temporibus? In aut saepe veritatis delectus beatae,
        nulla odio quisquam natus dolores omnis ut, asperiores, vero voluptatum.
      </p>
    </div>
    <div class="flex justify-around items-center">
      <button
        class="capitalize font-semibold border-2 text-dark bg-transparent"
      >
        <i class="fa-solid fa-heart"></i> 2.4k
      </button>
      <button
        class="capitalize font-semibold border-2 text-dark bg-transparent"
      >
        <i class="fa-solid fa-comment"></i> 305
      </button>
    </div>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped></style>
