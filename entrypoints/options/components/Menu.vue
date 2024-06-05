<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useColorSchemeStore } from '../stores/colorScheme';

const colorSchemeStore = useColorSchemeStore();
onMounted(() => {
  colorSchemeStore.initializeMode();
});

function toggleColorScheme() {
  colorSchemeStore.toggleMode();
}
</script>

<template>
  <el-menu default-active="2" class="el-menu-vertical-demo">
    <RouterLink to="/"><el-menu-item index="1-1">Home</el-menu-item></RouterLink>
    <RouterLink to="/chart"><el-menu-item index="1-3">图表制作工具</el-menu-item></RouterLink>
    <RouterLink to="/about"><el-menu-item index="1-2">About</el-menu-item></RouterLink>
  </el-menu>
</template>

<style scoped></style>