<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { searchEngineStore } from '../stores/homeStore';
</script>

<template>
  <div class="home container mx-auto">
    <section class="time pt-24">
      <div class="time-box w-full">
        <span class="time-text block p-4 text-center text-6xl text-white">{{ new Date().getHours() + ' - ' + new
          Date().getMinutes() }}</span>
      </div>
    </section>
    <section class="search pt-24">
      <div class="w-[50%] mx-auto h-12 bg-white/80 backdrop-blur-xl rounded-full">
        <form action="http://www.google.com/search">
          <input class="searchbox w-full p-4 bg-transparent px-12" placeholder="Search" name="q"></input>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.searchbox:focus {
  outline: none;
}
</style>