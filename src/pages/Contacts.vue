<template>
  <section class="pt-32 pb-16 px-8 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 animate-fade-down">
        <h1 class="font-russo text-5xl gradient-text-white mb-4">Свяжитесь с нами</h1>
        <p class="text-white/60 text-lg">Мы всегда рады вашим предложениям и готовы помочь</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <!-- Form -->
        <div class="glass-card rounded-3xl p-10 animate-fade-left">
          <h2 class="font-bold text-2xl mb-8">Оставьте сообщение</h2>

          <!-- Success -->
          <div v-if="sent"
               class="rounded-2xl p-6 mb-6 text-center"
               style="background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.4);">
            <i class="fas fa-check-circle text-3xl mb-3" style="color: #8B5CF6;"></i>
            <p class="font-semibold text-lg">Сообщение отправлено!</p>
            <p class="text-white/60 text-sm mt-1">Мы ответим в течение 24 часов.</p>
          </div>

          <div v-else>
            <div class="mb-5">
              <label class="block font-semibold mb-2 text-sm text-white/90">Имя и фамилия</label>
              <input v-model="form.name" type="text" class="form-input" placeholder="Ваше имя и фамилия" required>
              <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
            </div>

            <div class="mb-5">
              <label class="block font-semibold mb-2 text-sm text-white/90">Email</label>
              <input v-model="form.email" type="email" class="form-input" placeholder="example@email.com" required>
              <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
            </div>

            <div class="mb-5">
              <label class="block font-semibold mb-2 text-sm text-white/90">Тема</label>
              <select v-model="form.subject" class="form-input">
                <option value="" disabled>Выберите тему</option>
                <option value="suggestion">Предложение</option>
                <option value="complaint">Жалоба</option>
                <option value="question">Вопрос</option>
                <option value="thanks">Благодарность</option>
                <option value="technical">Техническая проблема</option>
                <option value="partnership">Сотрудничество</option>
              </select>
              <p v-if="errors.subject" class="text-red-400 text-xs mt-1">{{ errors.subject }}</p>
            </div>

            <div class="mb-5">
              <label class="block font-semibold mb-2 text-sm text-white/90">Сообщение</label>
              <textarea v-model="form.message" rows="5" class="form-input resize-none"
                        placeholder="Опишите ваш вопрос или предложение..."></textarea>
              <p v-if="errors.message" class="text-red-400 text-xs mt-1">{{ errors.message }}</p>
            </div>

            <div class="flex items-start gap-3 mb-6">
              <input id="agree" v-model="form.agree" type="checkbox"
                     class="mt-1 w-4 h-4 cursor-pointer" style="accent-color: #8B5CF6;">
              <label for="agree" class="text-sm text-white/60 cursor-pointer">
                Соглашаюсь на обработку персональных данных и принимаю
                <a href="#" style="color: #8B5CF6;" class="hover:underline">политику конфиденциальности</a>
              </label>
            </div>
            <p v-if="errors.agree" class="text-red-400 text-xs -mt-4 mb-4">{{ errors.agree }}</p>

            <button @click="submit" class="btn-primary w-full flex items-center justify-center gap-2">
              <i class="fas fa-paper-plane"></i> Отправить сообщение
            </button>
          </div>
        </div>

        <!-- Contact info -->
        <div class="space-y-6 animate-fade-right">
          <div class="glass-card rounded-3xl p-8">
            <h2 class="font-bold text-2xl mb-6">Контактная информация</h2>
            <div v-for="c in contacts" :key="c.label" class="flex items-start gap-4 mb-6 last:mb-0">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                   style="background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.2)); border: 1px solid rgba(139,92,246,0.3);">
                <i :class="c.icon" style="color: #8B5CF6;"></i>
              </div>
              <div>
                <div class="text-white/40 text-xs mb-1">{{ c.label }}</div>
                <div class="font-semibold text-sm">{{ c.value }}</div>
              </div>
            </div>
          </div>

          <div class="glass-card rounded-3xl p-8">
            <h3 class="font-bold text-lg mb-5">Мы в соцсетях</h3>
            <div class="grid grid-cols-2 gap-3">
              <a v-for="s in socials" :key="s.name" href="#"
                 class="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105"
                 style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.2);">
                <i :class="s.icon" style="color: #8B5CF6;"></i>
                <span class="text-sm font-semibold">{{ s.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const sent = ref(false)
const form = reactive({ name: '', email: '', subject: '', message: '', agree: false })
const errors = reactive({})

const contacts = [
  { icon: 'fas fa-envelope', label: 'Email',                  value: 'support@animepotok.ru' },
  { icon: 'fas fa-clock',    label: 'Время работы поддержки', value: 'Ежедневно с 10:00 до 19:00' },
]
const socials = [
  { icon: 'fab fa-vk',          name: 'ВКонтакте' },
  { icon: 'fab fa-telegram',    name: 'Telegram' },
  { icon: 'fab fa-discord',     name: 'Discord' },
  { icon: 'fas fa-comment-dots',name: 'MAX' },
]

function submit() {
  Object.keys(errors).forEach(k => delete errors[k])
  let ok = true

  if (!form.name.trim())    { errors.name    = 'Введите имя и фамили.';           ok = false }
  if (!form.email.includes('@')) { errors.email = 'Введите корректный email'; ok = false }
  if (!form.subject)        { errors.subject = 'Выберите тему';         ok = false }
  if (!form.message.trim()) { errors.message = 'Введите сообщение';     ok = false }
  if (!form.agree)          { errors.agree   = 'Необходимо согласие';   ok = false }

  if (ok) sent.value = true
}
</script>
