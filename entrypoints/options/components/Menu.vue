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
    <RouterLink to="/"><el-menu-item index="1-1">
        <el-icon>
          <document />
        </el-icon>
        Dashboard
      </el-menu-item>
    </RouterLink>
    <RouterLink to="/settings"><el-menu-item index="1-2">Settings</el-menu-item></RouterLink>
  </el-menu>
</template>

<style scoped></style>