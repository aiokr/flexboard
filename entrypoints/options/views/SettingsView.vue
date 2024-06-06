<script setup async lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { storage } from 'wxt/storage';
import { useAuthUser } from "../libs/supabaseClient";

type localSettingInfoType = {
  date: Date;
};

const settingInfo = ref<localSettingInfoType>({
  date: new Date(),
});








</script>

<template>
  <header class="pb-6">
    <h1 class="text-2xl font-bold">Settings</h1>
  </header>
</template>

<style scoped></style>