<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router';
import { storage } from 'wxt/storage';
import { supabase } from './libs/supabaseClient';
import Menu from './components/Menu.vue';

</script>

<template>
  <main class="w-screen h-screen overflow-auto">
    <div class="common-layout">
      <el-header class="flex items-center justify-between">
      <h1 class="text-lg font-bold">FlexBoard</h1>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-container>
          <el-main>
            <RouterView />
          </el-main>
          <el-footer>
            <div class="bg-zinc-500 text-white text-sm py-4 px-4">
              Current route path: {{ $route.fullPath }}
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </main>
</template>

<style scoped>
.bg {
  background-image: url('https://source.unsplash.com/random/1920x1080?sky');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
