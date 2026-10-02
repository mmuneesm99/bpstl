<script setup lang="ts">
const { t } = useLocale()
const config = useRuntimeConfig()

const active = ref(0)
const section = ref<HTMLElement | null>(null)
let frame = 0

function updateActive() {
  frame = 0
  const cards = section.value?.querySelectorAll<HTMLElement>('[data-service]')
  if (!cards?.length) return
  const line = 120
  let current = 0
  cards.forEach((card) => {
    const index = Number(card.dataset.service)
    if (Number.isNaN(index)) return
    if (card.getBoundingClientRect().top <= line) current = index
  })
  if (active.value !== current) active.value = current
}

function onScroll() {
  if (frame) return
  frame = requestAnimationFrame(updateActive)
}

const serviceImages = [
  'services/service-post.jpg',
  'services/service-aed.jpg',
  'services/service-tent.jpg',
  'services/service-bag.jpg',
  'services/service-patrol.jpg',
  'services/service-training.jpg',
].map((file) => {
  const base = config.app.baseURL || '/'
  return `${base.endsWith('/') ? base : `${base}/`}${file}`
})

function showService(index: number) {
  active.value = index
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById(`service-item-${index}`)?.scrollIntoView({
    behavior: reduce ? 'auto' : 'smooth',
    block: 'start',
  })
}

onMounted(() => {
  updateActive()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <section id="services" ref="section" class="py-16 bg-white border-t border-ink/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold">{{ t.servicesTitle }}</h2>
        <p class="mt-4 text-lg leading-relaxed text-ink/80">{{ t.servicesLead }}</p>
      </div>

      <div class="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <ol class="lg:col-span-4 lg:sticky lg:top-24 self-start border-t border-ink/15">
          <li v-for="(service, index) in t.services" :key="service.title" class="border-b border-ink/15">
            <button
              type="button"
              class="flex w-full items-baseline gap-3 border-l-2 py-3 pl-3 text-left font-semibold"
              :class="active === index ? 'border-pulse text-pulse' : 'border-transparent hover:text-pulse'"
              :aria-current="active === index ? 'true' : undefined"
              @click="showService(index)"
            >
              <span class="w-6 shrink-0 text-sm text-ink/40">{{ index + 1 }}</span>
              <span>{{ service.title }}</span>
            </button>
          </li>
        </ol>

        <Reveal each class="lg:col-span-8 space-y-14">
          <article
            v-for="(service, index) in t.services"
            :id="`service-item-${index}`"
            :key="service.title"
            :data-service="index"
            class="scroll-item scroll-mt-28"
          >
            <img :src="serviceImages[index]" alt="" class="w-full h-72 sm:h-80 object-cover bg-paper">
            <h3 class="mt-4 text-2xl font-bold">{{ service.title }}</h3>
            <p class="mt-2 max-w-xl text-base leading-relaxed text-ink/80">{{ service.text }}</p>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
</template>
