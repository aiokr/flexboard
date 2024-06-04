<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useColorSchemeStore } from '../stores/colorScheme';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const colorSchemeStore = useColorSchemeStore();
onMounted(() => {
  colorSchemeStore.initializeMode();
});

function toggleColorScheme() {
  colorSchemeStore.toggleMode();
}
</script>

<template>
  <div
    class="w-full h-12 text-sm flex items-center justify-center gap-6 border shandow bg-white/80 backdrop-blur-2xl shadow-lg rounded-b-2xl">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<style scoped></style>