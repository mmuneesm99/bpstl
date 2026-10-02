<script setup lang="ts">
const { t } = useLocale()

useSeoMeta({
  title: 'B.P.S.T.L. — Premiers secours bénévoles au Luxembourg',
  description:
    'Bénévoles Premiers Secours Team Luxembourg, association d’Echternach recensée par l’Agence du Bénévolat. Présence de premiers secours sur les manifestations. Urgence : 112.',
  ogTitle: 'B.P.S.T.L. — Premiers secours bénévoles au Luxembourg',
  ogDescription:
    'Présence bénévole de premiers secours sur les manifestations au Luxembourg. Le 112 reste le numéro d’urgence.',
})
</script>

<template>
  <main>
    <HeroSection />
    <HomePaths />
    <HomeGallery />
    <section class="pb-4">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <NuxtLink to="/gestes" class="grid lg:grid-cols-12 gap-6 items-center border-y border-ink/10 py-8">
            <div class="lg:col-span-4">
              <h2 class="text-3xl font-bold">{{ t.survivalTitle }}</h2>
              <svg class="mt-4 h-8 w-44 text-pulse" viewBox="0 0 160 36" fill="none" aria-hidden="true">
                <path class="pulse-draw" d="M2 20 H28 L40 20 L52 6 L66 30 L78 14 L90 20 H158" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p class="lg:col-span-6 leading-relaxed text-ink/80">{{ t.survivalLead }}</p>
            <span class="lg:col-span-2 font-semibold text-pulse">{{ t.navSurvival }}</span>
          </NuxtLink>
        </Reveal>
      </div>
    </section>
    <VolunteerBanner />
    <FaqSection />
  </main>
</template>
