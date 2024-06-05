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
</template>

<style scoped></style>