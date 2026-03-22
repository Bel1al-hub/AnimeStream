<template>
  <footer style="background: rgba(5,5,16,0.95); border-top: 1px solid rgba(139,92,246,0.15);" class="mt-16">
    <div class="max-w-7xl mx-auto px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        <!-- Brand -->
        <div>
          <div class="font-russo text-2xl gradient-text mb-3">АнимеПоток</div>
          <p class="text-white/60 text-sm leading-relaxed mb-4">
            Лучший онлайн кинотеатр для просмотра аниме и азиатских сериалов.
            Смотри любимые тайтлы в высоком качестве.
          </p>
          <div class="flex gap-3">
            <a v-for="s in socials" :key="s.icon" href="#"
               class="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
               style="background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.3);"
               :aria-label="s.label">
              <i :class="s.icon" class="text-sm" style="color: #8B5CF6;"></i>
            </a>
          </div>
        </div>

        <!-- Nav -->
        <div>
          <h4 class="font-bold mb-4" style="color: #8B5CF6;">Навигация</h4>
          <ul class="space-y-2 text-white/60 text-sm">
            <li><RouterLink to="/" class="hover:text-white transition-colors">Главная</RouterLink></li>
            <li><RouterLink to="/#catalog" class="hover:text-white transition-colors">Каталог</RouterLink></li>
            <li><RouterLink to="/faq" class="hover:text-white transition-colors">FAQ</RouterLink></li>
            <li><RouterLink to="/contacts" class="hover:text-white transition-colors">Контакты</RouterLink></li>
          </ul>
        </div>

        <!-- Genres -->
        <div>
          <h4 class="font-bold mb-4" style="color: #8B5CF6;">Жанры</h4>
          <ul class="space-y-2 text-white/60 text-sm">
            <li v-for="g in genres" :key="g">
              <a href="#" class="hover:text-white transition-colors">{{ g }}</a>
            </li>
          </ul>
        </div>

        <!-- Info -->
        <div>
          <h4 class="font-bold mb-4" style="color: #8B5CF6;">Информация</h4>
          <ul class="space-y-2 text-white/60 text-sm">
            <li v-for="l in info" :key="l">
              <a href="#" class="hover:text-white transition-colors">{{ l }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t pt-6 text-center text-white/40 text-sm" style="border-color: rgba(139,92,246,0.15);">
        © 2026 АнимеПоток. Все права защищены.
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  { icon: 'fab fa-vk',          label: 'VK' },
  { icon: 'fab fa-telegram',    label: 'Telegram' },
  { icon: 'fab fa-discord',     label: 'Discord' },
  { icon: 'fas fa-comment-dots',label: 'Messages' },
]
const genres = ['Сёнен', 'Сэйнэн', 'Романтика', 'Фэнтези']
const info   = ['О проекте', 'Правила', 'Политика конфиденциальности', 'Партнёрам']
</script>
