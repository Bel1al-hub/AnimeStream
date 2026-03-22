<template>
  <header
    class="animate-slide-down fixed w-full top-0 z-50 backdrop-blur-md"
    style="background: rgba(15,15,35,0.9); border-bottom: 1px solid rgba(139,92,246,0.2);"
  >
    <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
      <RouterLink to="/" class="font-russo text-2xl gradient-text hover:scale-105 transition-transform">
        АнимеПоток
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex gap-8 items-center">
        <RouterLink to="/"         class="nav-link" :class="{ active: $route.path === '/' }">Главная</RouterLink>
        <RouterLink to="/#catalog" class="nav-link">Каталог</RouterLink>
        <RouterLink to="/faq"      class="nav-link" :class="{ active: $route.path === '/faq' }">FAQ</RouterLink>
        <RouterLink to="/contacts" class="nav-link" :class="{ active: $route.path === '/contacts' }">Контакты</RouterLink>
      </nav>

      <!-- Mobile burger -->
      <button class="md:hidden text-white text-xl" @click="menuOpen = !menuOpen">
        <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden px-8 pb-4 flex flex-col gap-4" style="background: rgba(15,15,35,0.95);">
      <RouterLink to="/"         class="nav-link" @click="menuOpen = false">Главная</RouterLink>
      <RouterLink to="/#catalog" class="nav-link" @click="menuOpen = false">Каталог</RouterLink>
      <RouterLink to="/faq"      class="nav-link" @click="menuOpen = false">FAQ</RouterLink>
      <RouterLink to="/contacts" class="nav-link" @click="menuOpen = false">Контакты</RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>
