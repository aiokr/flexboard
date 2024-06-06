<script setup async lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useAuthUser } from "../libs/supabaseClient";

const router = useRouter();
const { register } = useAuthUser();

type Props = {
  purpose?: string;
};

const props = defineProps<Props>();
const pagePurpose = ref(props.purpose);

// Form reactive ref to keep up with the form data
const form = ref({
  name: "",
  email: "",
  password: "",
});

// function to hand the form submit
const handleSubmit = async () => {
  try {

    // use the register method from the AuthUser composable
    await register(form.value);

    // and redirect to a EmailConfirmation page the will instruct
    // the user to confirm they're email address
    router.push({
      name: "EmailConfirmation",
      query: { email: form.value.email },
    });
  } catch (error: any) {
    alert(error.message);
  }
};

var pageTitle: string;
if (pagePurpose.value === "register") {
  pageTitle = "Register";
} else if (pagePurpose.value === "login") {
  pageTitle = "Login";
} else if (pagePurpose.value === "verify-email") {
  pageTitle = "Verify Email";
} else {
  pageTitle = "User Actions";
};

</script>

<template>
  <main class="container max-w-[600px] mx-auto border rounded-xl py-12 px-8">
    <h1 class="text-2xl font-bold pb-6">{{ pageTitle }}</h1>
    <section v-if="pagePurpose === 'register'" class="container mx-auto">
      <form class=" flex flex-col" @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-4">
          <div>
            <label>Name <input v-model="form.name" type="text" /></label>
          </div>
          <label>Email <input v-model="form.email" type="email" /></label>
          <label>Password <input v-model="form.password" type="password" /></label>
        </div>
        <button class="btn">Register</button>
      </form>
    </section>
    <section v-else-if="pagePurpose === 'login'">
      <p>Some other content</p>
    </section>
    <section v-else-if="pagePurpose === 'verify-email'">
      <p>Some other content</p>
    </section>
  </main>
</template>

<style scoped>
label {
  @apply block text-sm text-slate-400 dark:text-slate-300
}

input {
  @apply hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700
}

.btn {
  @apply bg-blue-500 text-white rounded-md py-2 px-4 mt-12 text-sm
}
</style>