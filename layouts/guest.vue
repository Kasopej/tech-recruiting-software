<script lang="ts" setup></script>

<template>
  <div class="guest-background h-screen">
    <div class="bg-emerald-800 opacity-90 h-full">
      <main class="px-4 py-8 text-white">
        <section
          class="mx-auto mt-4 p-8 bg-black opacity-70 border-white border border-solid w-fit md:w-1/3 rounded-lg"
        >
          <slot />
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
  .guest-background {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url("/images/tech-recruiting1.jpg");
  }
</style>
