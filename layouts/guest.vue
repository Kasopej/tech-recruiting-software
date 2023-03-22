<script lang="ts" setup></script>

<template>
  <div class="guest-background h-screen">
    <div class="bg-emerald-500 h-full opacity-90">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .guest-background {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url("public/images/tech-recruiting1.jpg");
  }
</style>
