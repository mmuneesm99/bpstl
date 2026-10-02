<script setup lang="ts">
const { t } = useLocale()
const mission = useAsset('images/page-mission.jpg')
const services = useDoodle('doodle-aed')
const organiser = useAsset('images/page-organiser.jpg')
const volunteer = useDoodle('doodle-help')

const cards = computed(() => [
  { to: '/mission', title: t.value.navAbout, text: t.value.aboutDesc, image: mission, fit: 'cover', float: false },
  { to: '/services', title: t.value.navServices, text: t.value.servicesLead, image: services.value, fit: 'contain', float: true },
  { to: '/organiser', title: t.value.navDevis, text: t.value.guideLead, image: organiser, fit: 'cover', float: false },
  { to: '/benevoles', title: t.value.navJoin, text: t.value.volunteerText, image: volunteer.value, fit: 'contain', float: true },
])
</script>

<template>
  <section class="py-16 border-t border-ink/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <Reveal each class="grid md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="card in cards"
          :key="card.to"
          :to="card.to"
          class="scroll-item group block bg-paper"
        >
          <img
            :src="card.image"
            alt=""
            class="w-full h-52 bg-white"
            :class="card.float ? 'object-contain p-6 doodle' : 'object-cover'"
          >
          <div class="p-5">
            <h2 class="text-2xl font-bold group-hover:text-pulse">{{ card.title }}</h2>
            <p class="mt-2 text-sm leading-relaxed text-ink/75 line-clamp-3">{{ card.text }}</p>
          </div>
        </NuxtLink>
      </Reveal>
    </div>
  </section>
</template>
