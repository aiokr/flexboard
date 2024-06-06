<script setup async lang="ts">
import { ref, onMounted } from 'vue';
import { storage } from 'wxt/storage';

type localSettingInfoType = {
  date: Date;
};

const settingInfo = ref<localSettingInfoType>({
  date: new Date(),
});

const setSettingInfo = await storage.defineItem<localSettingInfoType>(
  'local:info',
  {
    settingInfo,
  },
)

</script>

<template>
  <header class="pb-6">
    <h1 class="text-2xl font-bold">Settings</h1>
  </header>
  <section class="container mx-auto grid grid-cols-4 gap-4">
    <Suspense>
      {{ settingInfo }}
    </Suspense>
  </section>
</template>

<style scoped></style>