<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <main class="w-screen h-screen bg overflow-auto">
    <Header />
    <main>
      <RouterView />
      <!--Current route path: {{ $route.fullPath }}-->
    </main>
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
