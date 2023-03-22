<script lang="ts" setup>
  const router = useRouter();
  definePageMeta({
    layout: "guest",
  });
  function callSignup() {
    router.push("/");
  }
</script>

<template>
  <form @submit.prevent="callSignup">
    <div class="text-center">
      <nuxt-link to="/">
        <span>Hire well</span>
        <img
          src="/images/logo.png"
          alt="logo"
          class="block mx-auto -mt-6"
          width="100"
        />
      </nuxt-link>
      <h2 class="text-xl mb-4">Register with</h2>
      <button class="btn mx-2 mb-2 bg-emerald-500">Google</button
      ><button class="btn mx-2 mb-2 bg-emerald-500">Facebook</button>
    </div>
    <div class="text-center mt-4">
      <span>or</span>
      <fieldset class="text-left mt-4 text-sm">
        <label class="block">
          Email
          <input
            placeholder="email e.g example@example.com"
            type="email"
            class="form-input block mb-3 w-full text-sm !bg-emerald-900"
            id=""
          />
        </label>
        <label class="block">
          Password
          <input
            placeholder="password"
            type="password"
            class="form-input block mb-3 w-full text-sm !bg-emerald-900"
            id=""
          />
        </label>
        <label class="block">
          Confirm Password
          <input
            placeholder="password"
            type="password"
            class="form-input block mb-3 w-full text-sm !bg-emerald-900"
            id=""
          />
        </label>
      </fieldset>
    </div>
    <button
      type="submit"
      class="w-full px-3 py-2 btn bg-green-700 hover:bg-green-900 text-white"
    >
      Login
    </button>
  </form>
</template>

<style scoped></style>
