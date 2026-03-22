<template>
  <div class="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden">
    <!-- Decorations -->
    <span v-for="d in decos" :key="d.emoji"
          class="absolute text-3xl opacity-30"
          :style="`top:${d.top}; left:${d.left}; animation: floatRandom 10s ease-in-out ${d.delay} infinite;`">
      {{ d.emoji }}
    </span>

    <div class="text-center relative z-10 max-w-xl animate-fade-down">
      <div class="text-9xl mb-4 animate-bounce-slow" style="filter: drop-shadow(0 10px 20px rgba(255,105,180,0.5));">
        (｡•́︿•̀｡)
      </div>
      <div class="font-russo text-8xl gradient-text animate-glow mb-6">404</div>

      <div class="rounded-3xl p-8 mb-10 relative" style="background: white; color: #2D1B3D;">
        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0"
             style="border-left:18px solid transparent; border-right:18px solid transparent; border-top:18px solid white;"></div>
        <h1 class="font-russo text-2xl mb-2">Ой-ой! Страница потерялась!</h1>
        <p class="text-sm opacity-70 leading-relaxed">
          Кажется, эта страница отправилась в другое измерение…
          Давай вернёмся на главную и продолжим смотреть любимые тайтлы! (๑˃ᴗ˂)ﻭ
        </p>
      </div>

      <div class="flex gap-4 justify-center flex-wrap mb-10">
        <RouterLink to="/" class="btn-primary inline-flex items-center gap-2">
          <i class="fas fa-home"></i> На главную ✨
        </RouterLink>
        <RouterLink to="/contacts" class="btn-outline inline-flex items-center gap-2">
          <i class="fas fa-life-ring"></i> Помощь 💌
        </RouterLink>
      </div>

      <div class="glass-card rounded-2xl p-6">
        <p class="text-white/40 text-xs uppercase tracking-widest mb-4">☆ Быстрая навигация ☆</p>
        <div class="flex flex-wrap gap-3 justify-center">
          <RouterLink v-for="l in links" :key="l.to" :to="l.to"
                      class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-white/10"
                      style="color: #c4b5fd;">
            <i :class="l.icon"></i> {{ l.label }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const decos = [
  { emoji: '🌸', top: '10%', left: '10%', delay: '0s' },
  { emoji: '✨', top: '20%', left: '85%', delay: '2s' },
  { emoji: '💫', top: '75%', left: '15%', delay: '4s' },
  { emoji: '🎀', top: '80%', left: '80%', delay: '6s' },
]
const links = [
  { to: '/',         icon: 'fas fa-home',           label: 'Главная' },
  { to: '/#catalog', icon: 'fas fa-film',            label: 'Каталог' },
  { to: '/faq',      icon: 'fas fa-question-circle', label: 'FAQ' },
  { to: '/contacts', icon: 'fas fa-envelope',        label: 'Контакты' },
]
</script>

<style scoped>
@keyframes floatRandom {
  0%, 100% { transform: translate(0,0) rotate(0deg); }
  25%       { transform: translate(20px,-20px) rotate(10deg); }
  50%       { transform: translate(-15px,15px) rotate(-10deg); }
  75%       { transform: translate(15px,20px) rotate(5deg); }
}
</style>
