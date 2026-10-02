<script setup lang="ts">
const { t } = useLocale()
const config = useRuntimeConfig()

const active = ref(0)

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

const current = computed(() => t.value.services[active.value] ?? t.value.services[0])

watch(() => t.value.services.length, () => {
  if (active.value >= t.value.services.length) active.value = 0
})
</script>

<template>
  <section id="services" class="py-16 bg-white border-t border-ink/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold">{{ t.servicesTitle }}</h2>
        <p class="mt-4 text-lg leading-relaxed text-ink/80">{{ t.servicesLead }}</p>
      </div>

      <Reveal class="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <ol class="scroll-list lg:col-span-4 border-t border-ink/15">
          <li v-for="(service, index) in t.services" :key="service.title" class="border-b border-ink/15">
            <button
              type="button"
              class="flex w-full items-baseline gap-3 py-3 text-left"
              :class="active === index ? 'text-pulse font-bold' : 'hover:text-pulse'"
              :aria-current="active === index ? 'true' : undefined"
              @click="active = index"
            >
              <span class="w-6 shrink-0 text-sm text-ink/40">{{ index + 1 }}</span>
              <span>{{ service.title }}</span>
            </button>
          </li>
        </ol>

        <div class="scroll-from-right lg:col-span-8">
          <div :key="active" class="service-swap">
            <img :src="serviceImages[active]" alt="" class="w-full h-72 sm:h-96 object-cover bg-paper">
            <h3 class="mt-4 text-2xl font-bold">{{ current.title }}</h3>
            <p class="mt-2 max-w-xl text-base leading-relaxed text-ink/80">{{ current.text }}</p>
          </div>
        </div>
      </Reveal>

      <p class="mt-8 text-sm text-ink/50">{{ t.servicesImageNote }}</p>
    </div>
  </section>
</template>
