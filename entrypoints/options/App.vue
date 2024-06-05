<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Menu from './components/Menu.vue';
import Header from './components/Header.vue';
</script>

<template>
  <main class="w-screen h-screen overflow-auto">
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-container>
          <el-header>
            <Header />
          </el-header>
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
