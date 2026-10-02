<script setup lang="ts">
const { t } = useLocale()

const hrefs = [
  'https://benevolat.lu/annuaire-associations/benevolle-premiers-secours-team-luxembourg',
  'https://www.openstreetmap.org/search?query=8%20Rue%20des%20Romains%206478%20Echternach',
  'https://112.public.lu/',
]
</script>

<template>
  <section id="hero">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-14 lg:pt-16 lg:pb-20 grid lg:grid-cols-12 gap-10 items-center">
      <div class="lg:col-span-7 rise">
        <p class="text-sm text-ink/60">{{ t.heroTag }}</p>
        <h1 class="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
          {{ t.heroTitle }}
        </h1>
        <svg class="mt-4 h-8 w-44 text-pulse" viewBox="0 0 160 36" fill="none" aria-hidden="true">
          <path class="pulse-draw" d="M2 20 H28 L40 20 L52 6 L66 30 L78 14 L90 20 H158" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
          {{ t.heroLead }}
        </p>
        <p class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <NuxtLink to="/#guide" class="bg-pulse hover:bg-medical-600 text-white font-semibold px-5 py-3">
            {{ t.heroCta1 }}
          </NuxtLink>
          <NuxtLink to="/#volunteer" class="font-semibold text-pulse hover:underline">
            {{ t.heroCta2 }}
          </NuxtLink>
        </p>
      </div>
      <DoodleArt name="doodle-event" class="lg:col-span-5 w-full max-w-md mx-auto rise rise-3" />
    </div>

    <div class="bg-paper border-y border-ink/10">
      <Reveal each class="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 md:divide-x divide-ink/10">
        <a
          v-for="(item, index) in t.contexts"
          :key="item.title"
          :href="hrefs[index]"
          target="_blank"
          rel="noopener noreferrer"
          class="scroll-item block py-5 md:px-8 md:first:pl-0 md:last:pr-0"
        >
          <h2 class="font-bold">{{ item.title }}</h2>
          <p class="mt-2 text-sm leading-relaxed text-ink/75">{{ item.text }}</p>
          <p class="mt-1 text-sm font-semibold whitespace-nowrap">{{ item.detail }}</p>
        </a>
      </Reveal>
    </div>
  </section>
</template>
