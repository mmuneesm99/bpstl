<script setup lang="ts">
const { t } = useLocale()

const images = [
  'services/service-post.jpg',
  'services/service-aed.jpg',
  'services/service-tent.jpg',
  'services/service-bag.jpg',
  'services/service-patrol.jpg',
  'services/service-training.jpg',
].map(file => useAsset(file))
</script>

<template>
  <section class="pb-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-end justify-between gap-6">
        <h2 class="text-3xl font-bold">{{ t.servicesTitle }}</h2>
        <NuxtLink to="/services" class="shrink-0 font-semibold text-pulse hover:underline">{{ t.navServices }}</NuxtLink>
      </div>
      <Reveal each class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <NuxtLink
          v-for="(service, index) in t.services"
          :key="service.title"
          :to="`/services#service-item-${index}`"
          class="scroll-item group block overflow-hidden"
        >
          <img :src="images[index]" alt="" class="scroll-photo w-full h-44 object-cover bg-paper">
          <h3 class="mt-3 font-bold group-hover:text-pulse">{{ service.title }}</h3>
        </NuxtLink>
      </Reveal>
    </div>
  </section>
</template>
