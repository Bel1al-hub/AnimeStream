<template>
  <section class="pt-32 pb-16 px-8 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16 animate-fade-down">
        <h1 class="font-russo text-5xl gradient-text-white mb-4">Частые вопросы</h1>
        <p class="text-white/60 text-lg">Ответы на самые популярные вопросы об АнимеПотоке</p>
      </div>

      <div class="space-y-4">
        <div v-for="(item, i) in faq" :key="i"
             class="glass-card rounded-2xl overflow-hidden transition-all duration-300 animate-fade-up"
             :class="{ 'border-violet-500/60': openIndex === i }"
             :style="`animation-delay:${i * 0.08}s`">
          <button
            class="w-full flex justify-between items-center gap-6 p-7 text-left transition-colors duration-200 hover:bg-white/5"
            @click="toggle(i)"
          >
            <h3 class="font-semibold text-base">{{ item.q }}</h3>
            <i class="fas fa-chevron-down text-sm transition-transform duration-300 flex-shrink-0"
               style="color: #8B5CF6;"
               :class="{ 'rotate-180': openIndex === i }"></i>
          </button>
          <div class="overflow-hidden transition-all duration-300"
               :style="openIndex === i ? `max-height: 300px; opacity: 1` : `max-height: 0; opacity: 0`">
            <p class="px-7 pb-7 text-white/70 leading-relaxed text-sm">{{ item.a }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center glass-card rounded-3xl p-12 animate-fade-up" style="animation-delay:0.5s">
        <h2 class="font-russo text-3xl gradient-text-white mb-4">Остались вопросы?</h2>
        <p class="text-white/60 mb-8">Не нашли ответ? Свяжитесь с нами — мы всегда поможем!</p>
        <RouterLink to="/contacts" class="btn-primary inline-flex items-center gap-2">
          <i class="fas fa-envelope"></i> Связаться с поддержкой
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(0)

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}

const faq = [
  {
    q: 'Как начать просмотр аниме?',
    a: 'Просто перейдите на главную страницу и выберете понравившейся тайтл. Если вы хотите смотреть без рекламы, то купите нашу подписку.',
  },
  {
    q: 'Сервис бесплатный?',
    a: 'Базовый доступ с рекламой абсолютно бесплатный. Премиум-подписка стоит 199₽/месяц или 1990₽/год. Она отключает рекламу, открывает 2K-качество, офлайн-просмотр и ранний доступ к новинкам.',
  },
  {
    q: 'Какие студии озвучки представлены?',
    a: 'Мы сотрудничаем с AniLibria, Animedia, AniDUB, StudioBand, Shachiburi, JAM, Kansai Studio и другими. Для большинства тайтлов доступно несколько вариантов озвучки на выбор.',
  },
  {
    q: 'Можно ли смотреть офлайн?',
    a: 'Да — в мобильном приложении Премиум-подписчики могут скачать сколько угодно серий для просмотра без интернета. Загруженные серии доступны пока действует подписка.',
  },
  {
    q: 'Какое качество видео доступно?',
    a: 'От 480p до 1080p Full HD — качество адаптируется под скорость соединения, но можно выбрать вручную. Премиум открывает Quad HD (2K).',
  },
  {
    q: 'Как часто выходят новые серии?',
    a: 'Онгоинги появляются в течение 24 часов после выхода в Японии. Озвучка добавляется за 1–3 дня. Подпишитесь на уведомления, чтобы не пропустить.',
  },
  {
    q: 'На скольких устройствах можно смотреть?',
    a: 'Один аккаунт — до 3 активных сессий одновременно. Всего можно зарегистрировать 5 устройств. Делитесь подпиской с семьёй или друзьями!',
  },
]
</script>
