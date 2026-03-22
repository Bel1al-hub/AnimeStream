<template>
  <!-- Hero -->
  <section class="pt-32 pb-16 px-8 min-h-screen flex items-center"
    style="background: radial-gradient(circle at 20% 50%, rgba(139,92,246,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 50%, rgba(236,72,153,0.1) 0%, transparent 50%);">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
      <div class="animate-fade-left">
        <h1 class="font-russo text-5xl md:text-6xl leading-tight mb-6 gradient-text-white">
          Твой мир аниме и сериалов
        </h1>
        <p class="text-white/80 text-xl mb-8 leading-relaxed">
          Тысячи аниме, дорам и сериалов в HD качестве. Озвучка от профессиональных студий.
          Смотри без рекламы и в любое время.
        </p>
        <div class="flex gap-4 flex-wrap">
          <a href="#catalog" class="btn-primary"><i class="fas fa-play mr-2"></i>Начать просмотр</a>
          <a href="#features" class="btn-outline">Узнать больше</a>
        </div>
      </div>
      <div class="animate-fade-right animate-float">
        <div class="rounded-3xl overflow-hidden shadow-2xl" style="box-shadow: 0 20px 60px rgba(139,92,246,0.3);">
          <img src="https://i.playground.ru/e/PvlwjcpQ3eNZeEjJEEjbaQ.jpeg"
               alt="Anime streaming"
               class="w-full h-full object-cover" style="aspect-ratio:16/10;">
        </div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section id="features" class="py-20 px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-14 animate-fade-down">
        <h2 class="font-russo text-4xl gradient-text-white mb-3">Почему выбирают нас</h2>
        <p class="text-white/60 text-lg">Лучший сервис для просмотра аниме и сериалов в России</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(f, i) in features" :key="i"
             class="glass-card glass-card-hover rounded-2xl p-8 text-center transition-all duration-300 animate-fade-up"
             :style="`animation-delay:${i * 0.15}s`">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
               style="background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.2)); border: 1px solid rgba(139,92,246,0.3);">
            <i :class="f.icon" class="text-2xl" style="color: #8B5CF6;"></i>
          </div>
          <h3 class="font-bold text-lg mb-3">{{ f.title }}</h3>
          <p class="text-white/60 text-sm leading-relaxed">{{ f.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Catalog -->
  <section id="catalog" class="py-20 px-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-10">
        <h2 class="font-russo text-4xl gradient-text-white">Каталог аниме</h2>

        <!-- Controls -->
        <div class="flex flex-wrap gap-3 items-center">
          <!-- Search -->
          <input
            v-model="search"
            type="text"
            placeholder="Поиск..."
            class="form-input w-48 text-sm"
          />

          <!-- Sort -->
          <select v-model="sortBy" class="form-input w-44 text-sm">
            <option value="default">По умолчанию</option>
            <option value="title_asc">Название А–Я</option>
            <option value="title_desc">Название Я–А</option>
            <option value="rating_desc">Рейтинг ↓</option>
            <option value="year_desc">Год ↓</option>
          </select>

          <!-- Genre filter -->
          <select v-model="filterGenre" class="form-input w-40 text-sm">
            <option value="">Все жанры</option>
            <option v-for="g in allGenres" :key="g" :value="g">{{ g }}</option>
          </select>
        </div>
      </div>

      <!-- Cards -->
      <div v-if="filteredAnime.length" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="(anime, i) in filteredAnime" :key="anime.id"
             class="glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group animate-fade-up"
             :style="`animation-delay:${i * 0.08}s`"
             @click="openModal(anime)">
          <div class="relative overflow-hidden" style="aspect-ratio: 2/3;">
            <img :src="anime.image" :alt="anime.title"
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style="background: linear-gradient(to top, rgba(15,15,35,0.95) 0%, transparent 60%);">
              <p class="text-white/80 text-xs line-clamp-3 mb-2">{{ anime.description }}</p>
              <span class="text-xs px-2 py-1 rounded-full self-start"
                    style="background: rgba(139,92,246,0.4); border: 1px solid rgba(139,92,246,0.6);">
                Подробнее
              </span>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-bold text-sm mb-1 line-clamp-2">{{ anime.title }}</h3>
            <div class="flex items-center justify-between text-xs text-white/50">
              <span>{{ anime.season }} • {{ anime.episodes }}</span>
              <span class="flex items-center gap-1">
                <i class="fas fa-star" style="color: #F59E0B;"></i>
                {{ anime.rating }}
              </span>
            </div>
            <div class="flex flex-wrap gap-1 mt-2">
              <span v-for="g in anime.genres" :key="g"
                    class="text-xs px-2 py-0.5 rounded-full"
                    style="background: rgba(236,72,153,0.15); color: #EC4899; border: 1px solid rgba(236,72,153,0.3);">
                {{ g }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center text-white/50 py-20 text-lg">
        Ничего не найдено 😢
      </div>
    </div>
  </section>

  <!-- Modal -->
  <Teleport to="body">
    <div v-if="selected" class="fixed inset-0 z-50 flex items-center justify-center p-4"
         style="background: rgba(0,0,0,0.8); backdrop-filter: blur(4px);"
         @click.self="selected = null">
      <div class="glass-card rounded-3xl max-w-2xl w-full overflow-hidden animate-fade-down">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <img :src="selected.image" :alt="selected.title" class="w-full object-cover" style="max-height: 380px;">
          <div class="p-8 flex flex-col justify-between">
            <div>
              <h2 class="font-russo text-2xl gradient-text-white mb-3">{{ selected.title }}</h2>
              <p class="text-white/70 text-sm leading-relaxed mb-4">{{ selected.description }}</p>
              <div class="space-y-2 text-sm text-white/60">
                <div><span class="text-white/40">Сезон:</span> {{ selected.season }}</div>
                <div><span class="text-white/40">Серии:</span> {{ selected.episodes }}</div>
                <div><span class="text-white/40">Год:</span> {{ selected.year }}</div>
                <div class="flex items-center gap-2">
                  <span class="text-white/40">Рейтинг:</span>
                  <span class="flex items-center gap-1">
                    <i class="fas fa-star" style="color: #F59E0B;"></i>
                    {{ selected.rating }}
                  </span>
                </div>
              </div>
              <div class="flex flex-wrap gap-2 mt-4">
                <span v-for="g in selected.genres" :key="g"
                      class="text-xs px-3 py-1 rounded-full"
                      style="background: rgba(139,92,246,0.2); color: #a78bfa; border: 1px solid rgba(139,92,246,0.4);">
                  {{ g }}
                </span>
              </div>
            </div>
            <button @click="selected = null"
                    class="mt-6 btn-primary text-sm text-center">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'

const search      = ref('')
const sortBy      = ref('default')
const filterGenre = ref('')
const selected    = ref(null)

const anime = [
  {
    id: 1,
    title: 'Магическая битва',
    season: '2 сезон',
    episodes: '24 серии',
    year: 2024,
    rating: 9.1,
    genres: ['Сёнен', 'Экшен', 'Мистика'],
    image: 'https://static.yani.tv/posters/full/1636691934.jpg',
    description: 'Юдзи Итадори вступает в организацию экзорцистов и сражается с проклятиями — злыми духами, рождёнными из человеческих эмоций. Второй сезон раскрывает тайны прошлого учителя.',
  },
  {
    id: 2,
    title: 'Адский рай',
    season: '2 сезон',
    episodes: 'Онгоинг (9 серий)',
    year: 2024,
    rating: 8.7,
    genres: ['Сэйнэн', 'Экшен', 'Фэнтези'],
    image: 'https://media.kg-portal.ru/anime/j/jigokuraku/posters/jigokuraku_2s_2x.jpg',
    description: 'Приговорённый к смерти ниндзя Кабиру отправляется на таинственный остров в поисках эликсира бессмертия. Смесь жестокого экшена с мифологией даосизма',
  },
  {
    id: 3,
    title: 'Клинок рассекающий демонов',
    season: '4 сезон',
    episodes: '12 серий',
    year: 2024,
    rating: 9.0,
    genres: ['Сёнен', 'Экшен', 'История'],
    image: 'https://static.yani.tv/posters/full/1636692030.jpg',
    description: 'Демоны убили его семью, но превратили сестру в монстра. Танджиро не остановится ни перед чем, чтобы вернуть её человечность!',
  },
  {
    id: 4,
    title: 'Провожающая в последний путь Фрирен',
    season: '2 сезон',
    episodes: 'Онгоинг (8 серий)',
    year: 2024,
    rating: 9.3,
    genres: ['Сэйнэн', 'Фэнтези', 'Приключения'],
    image: 'https://static.yani.tv/posters/full/1636668991.jpg',
    description: 'Эльфийская волшебница Фрирен переосмысляет жизнь после гибели спутников. Медитативное путешествие о памяти, потере и смысле долгого существования',
  },
  {
    id: 5,
    title: 'One punch man',
    season: '3 сезон',
    episodes: '12 серий',
    year: 2023,
    rating: 8.9,
    genres: ['Сёнен', 'Комедия', 'Экшен'],
    image: 'https://lh6.googleusercontent.com/proxy/efSMRf5SFfg7nomz5GLWpqoCiXq9-9NSiBa7sDdkYvxZRWRGy9uVQ9CYa5L_9UdWtVeJKPWYyJ0Z3XBzbbAZ8vRL97E',
    description: 'Сайтама стал героем ради хобби и может победить любого противника одним ударом. Сатира на жанр супергероики с неожиданно глубоким посланием об одиночестве',
  },
  {
    id: 6,
    title: 'Атака титанов',
    season: 'Финал',
    episodes: '87 серий',
    year: 2023,
    rating: 9.0,
    genres: ['Сэйнэн', 'Экшен', 'Драма'],
    image: 'https://static.kinoafisha.info/k/series_posters/480/upload/series/seasons/768771341601311872.jpg',
    description: 'Эпическая постапокалиптическая сага о борьбе человечества за выживание против огромных гуманоидных существ, пожирающих людей',
  },
  {
    id: 7,
    title: 'Стальной алхимик',
    season: '1 сезон',
    episodes: '64 серии',
    year: 2009,
    rating: 9.1,
    genres: ['Сёнен', 'Экшен', 'Приключения'],
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/fdb8bbff-f986-463d-bd27-bdba39c9c6c0/600x900',
    description: 'Братья Элрик ищут Философский камень, чтобы вернуть утраченные тела. Один из лучших примеров шонена с цельной историей и глубокой философией',
  },
  {
    id: 8,
    title: 'Тетрадь смерти',
    season: '1 сезон',
    episodes: '37 серий',
    year: 2006,
    rating: 8.6,
    genres: ['Сэйнэн', 'Триллер', 'Психология'],
    image: 'https://cdn.idaprikol.ru/images/929b9ce8c9c93c13bae5f9e3372e7296cf2c419058616f331873bad22aee1770_1.jpg',
    description: 'Студент Лайт Ягами находит тетрадь, убивающую любого, чьё имя в ней написано. Психологическая дуэль с детективом Л о природе справедливости и власти',
  },
]

const allGenres = computed(() => {
  const s = new Set()
  anime.forEach(a => a.genres.forEach(g => s.add(g)))
  return [...s].sort()
})

const filteredAnime = computed(() => {
  let list = [...anime]

  if (search.value.trim()) {
    const q = search.value.toLowerCase()
    list = list.filter(a => a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q))
  }

  if (filterGenre.value) {
    list = list.filter(a => a.genres.includes(filterGenre.value))
  }

  switch (sortBy.value) {
    case 'title_asc':   list.sort((a, b) => a.title.localeCompare(b.title, 'ru')); break
    case 'title_desc':  list.sort((a, b) => b.title.localeCompare(a.title, 'ru')); break
    case 'rating_desc': list.sort((a, b) => b.rating - a.rating);                  break
    case 'year_desc':   list.sort((a, b) => b.year - a.year);                      break
  }

  return list
})

const features = [
  { icon: 'fas fa-film',       title: 'Full HD качество',           text: 'Смотрите все сериалы и аниме в высоком качестве Full HD 1080p с плавной загрузкой.' },
  { icon: 'fas fa-microphone', title: 'Профессиональная озвучка',   text: 'Озвучка от лучших русских студий: AniLibria, Animedia, AniDUB и многих других.' },
  { icon: 'fas fa-infinity',   title: 'Без рекламы',                text: 'Наслаждайтесь просмотром без навязчивой рекламы и ограничений по времени.' },
]

function openModal(a) {
  selected.value = a
}
</script>
