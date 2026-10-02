<script setup lang="ts">
const { t } = useLocale()
const image = useAsset('services/service-post.jpg')

const mapEmbed = 'https://www.openstreetmap.org/export/embed.html?bbox=6.401%2C49.800%2C6.423%2C49.814&layer=mapnik&marker=49.8070535%2C6.4117458'
const mapLink = 'https://www.openstreetmap.org/?mlat=49.80705&mlon=6.41175#map=17/49.80705/6.41175'

useSeoMeta({
  title: 'Contact — B.P.S.T.L.',
  description: 'B.P.S.T.L., 8, rue des Romains, L-6478 Echternach. Téléphone +352 621 387 104. Urgence : 112.',
})
</script>

<template>
  <main>
    <PageHeader :title="t.navContact" :lead="t.footerBlurb" :src="image" position="center 35%" />

    <section class="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <Reveal each class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div class="scroll-item lg:col-span-7">
          <a href="tel:+352621387104" class="inline-block bg-pulse hover:bg-medical-600 text-white font-bold text-xl px-5 py-3 whitespace-nowrap">
            +352 621 387 104
          </a>
          <p class="mt-4 text-sm leading-relaxed text-ink/75">{{ t.mentionsBlocks[1].text }}</p>
          <p class="mt-8 text-lg leading-relaxed">
            8, rue des Romains<br>
            L-6478 Echternach
          </p>
          <p class="mt-4 text-sm">
            <a href="https://benevolat.lu/annuaire-associations/benevolle-premiers-secours-team-luxembourg" class="underline underline-offset-2 hover:text-pulse" target="_blank" rel="noopener noreferrer">{{ t.legalRegistry }}</a>
          </p>
        </div>

        <aside class="scroll-item lg:col-span-5 border-t-4 border-pulse bg-paper p-6 sm:p-8">
          <h2 class="text-2xl font-bold">{{ t.contexts[2].title }}</h2>
          <p class="mt-3 leading-relaxed">{{ t.contexts[2].text }}</p>
          <p class="mt-2 text-sm text-ink/70">{{ t.contexts[2].detail }}</p>
          <a href="tel:112" class="inline-block mt-6 bg-pulse text-white font-bold px-5 py-3 hover:bg-medical-600">112</a>
          <p class="mt-6 text-sm leading-relaxed text-ink/75">{{ t.steps[2].text }}</p>
        </aside>
      </Reveal>

      <div class="mt-12">
        <iframe
          :title="t.contexts[1].title"
          :src="mapEmbed"
          class="w-full h-80 border border-ink/10"
          loading="lazy"
        />
        <p class="mt-2 text-sm text-ink/50">
          <a :href="mapLink" class="hover:text-pulse hover:underline" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>
        </p>
      </div>

      <Reveal each class="mt-12 grid md:grid-cols-2 gap-6">
        <NuxtLink to="/organiser" class="scroll-item block border border-ink/10 p-6 hover:border-pulse">
          <h2 class="text-2xl font-bold">{{ t.heroCta1 }}</h2>
          <p class="mt-3 text-sm leading-relaxed text-ink/75">{{ t.guideLead }}</p>
        </NuxtLink>
        <NuxtLink to="/benevoles" class="scroll-item block border border-ink/10 p-6 hover:border-pulse">
          <h2 class="text-2xl font-bold">{{ t.heroCta2 }}</h2>
          <p class="mt-3 text-sm leading-relaxed text-ink/75">{{ t.volunteerText }}</p>
        </NuxtLink>
      </Reveal>
    </section>
  </main>
</template>
