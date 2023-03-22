<script lang="ts" setup>
  const router = useRouter();
  definePageMeta({
    layout: false,
  });
  function callLogin() {
    router.push("/");
  }
</script>

<template>
  <div class="p-8 flex flex-col items-center h-screen mx-auto">
    <nuxt-link to="/" class="justify-self-start">
      <img src="/images/logo.png" alt="logo" width="200" />
    </nuxt-link>
    <section class="justify-self-center flex flex-wrap items-center">
      <figure class="col-12 col-md-6">
        <img src="/images/tech-recruiting.jpg" alt="tech recruiting" />
      </figure>
      <form @submit.prevent="callLogin" class="col-12 col-md-6 text-center">
        <fieldset>
          <h3 class="text-2xl">Welcome Back</h3>
          <input
            placeholder="email e.g example@example.com"
            type="email"
            class="form-input block rounded mx-auto mb-3"
            id=""
          />
          <input
            placeholder="password"
            type="password"
            class="form-input block rounded mx-auto mb-3"
            id=""
          />
        </fieldset>
        <button
          type="submit"
          class="px-3 py-2 bg-blue-500 hover:bg-blue-700 hover:text-white btn"
        >
          Login
        </button>
      </form>
    </section>
  </div>
</template>

<style scoped></style>
