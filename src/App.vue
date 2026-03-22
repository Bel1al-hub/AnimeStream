<template>
  <div class="bg-page min-h-screen">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>
