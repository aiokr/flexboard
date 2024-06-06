<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { supabase } from './libs/supabaseClient';
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

const user = ref(null);

</script>

<template>
  <el-header class="flex items-center justify-between gap-4">
    <h1 class="text-lg font-bold mr-auto">FlexBoard</h1>
    <el-dropdown>
      <el-avatar :icon="UserFilled" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<style scoped></style>