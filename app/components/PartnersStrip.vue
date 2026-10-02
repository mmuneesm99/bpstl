<script setup lang="ts">
const { t } = useLocale()
const hrefs = [
  'https://benevolat.lu/annuaire-associations/benevolle-premiers-secours-team-luxembourg',
  'https://www.openstreetmap.org/search?query=8%20Rue%20des%20Romains%206478%20Echternach',
  'https://112.public.lu/',
]
</script>

<template>
  <section class="bg-paper border-b border-ink/10" :aria-label="t.contextTitle">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid md:grid-cols-3 gap-8">
      <a
        v-for="(item, index) in t.contexts"
        :key="item.title"
        :href="hrefs[index]"
        target="_blank"
        rel="noopener noreferrer"
        class="group block"
      >
        <h2 class="font-bold group-hover:underline underline-offset-4">{{ item.title }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-ink/75 no-underline">{{ item.text }}</p>
      </a>
    </div>
  </section>
</template>
