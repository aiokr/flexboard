<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="background">
    <header>
      <nav class="w-screen h-12 rounded-br-3xl rounded-bl-3xl backdrop-blur-3xl bg-white/80 shadow-2xl border">
        <div class="h-full w-full flex items-center justify-center gap-6">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </div>
      </nav>
    </header>
    <RouterView />
  </main>
</template>

<style scoped>
.background {
  background-image: url('https://source.unsplash.com/random/1920x1080?city,sky');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>