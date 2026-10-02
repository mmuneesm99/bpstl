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
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-3 gap-px bg-ink/10">
      <a
        v-for="(item, index) in t.contexts"
        :key="item.title"
        :href="hrefs[index]"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-paper p-6 hover:bg-white transition"
      >
        <p class="text-[11px] uppercase tracking-[0.18em] text-pulse font-semibold">{{ item.title }}</p>
        <p class="mt-3 text-sm leading-relaxed text-ink/75">{{ item.text }}</p>
      </a>
    </div>
  </section>
</template>
