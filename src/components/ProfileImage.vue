<template>
  <div
    class="img-wrapper overflow-hidden rounded-full flex items-center justify-center"
  >
    <img :src="src" alt="Your Profile image" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string }>();
</script>

<style scoped></style>
