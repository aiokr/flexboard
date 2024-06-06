<script setup lang="ts">
</script>

<template>
  <header class="pb-6">
    <h1 class="text-2xl font-bold">Flex Dashboard</h1>
  </header>
  <section class="container mx-auto grid grid-cols-4 gap-4">
    <el-card style="width: 100%;">
      <template #header>
        <div class="card-header text-lg font-bold">
          <span>Card name</span>
        </div>
      </template>
    </el-card>

  </section>
</template>

<style scoped>
.searchbox:focus {
  outline: none;
}
</style>