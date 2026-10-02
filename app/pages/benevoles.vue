<script setup lang="ts">
const { t } = useLocale()
const image = useAsset('images/page-volunteer.jpg')

useSeoMeta({
  title: 'Bénévoles — B.P.S.T.L.',
  description: 'Rejoindre Bénévoles Premiers Secours Team Luxembourg se discute par téléphone au +352 621 387 104.',
})
</script>

<template>
  <main>
    <PageHeader :title="t.volunteerTitle" :lead="t.volunteerText" :src="image" position="center 28%" />
    <VolunteerBanner plain />
    <section class="pb-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-bold">{{ t.faqTitle }}</h2>
        <ul class="mt-8 grid md:grid-cols-2 gap-8">
          <li v-for="item in t.faqs" :key="item.q" class="border-t border-ink/15 pt-4">
            <h3 class="font-bold">{{ item.q }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink/75">{{ item.a }}</p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
