<script setup>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <NavbarComponent />
  <div class="p-10">
    <RouterView />
  </div>
  <FooterComponent />
</template>
