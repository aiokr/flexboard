<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="home container mx-auto">
    <section class="time pt-24">
      <div class="time-box w-full">
        <span class="time-text block p-4 text-center text-6xl text-white">{{ new Date().getHours() + ' - ' + new Date().getMinutes() }}</span>
      </div>
    </section>
    <section class="search pt-24">
      <div class="w-[50%] mx-auto h-12 bg-white/80 backdrop-blur-xl rounded-full">
        <input class="searchbox w-full p-4 bg-transparent px-12" placeholder="Search"></input>
      </div>
    </section>
  </div>
</template>

<style scoped>
.searchbox:focus {
  outline: none;
}
</style>