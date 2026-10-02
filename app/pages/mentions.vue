<script setup lang="ts">
const { t } = useLocale()
const sources = useSources()

useSeoMeta({
  title: 'Mentions et sources — B.P.S.T.L.',
  description: 'Sources publiques et mentions du site de Bénévoles Premiers Secours Team Luxembourg.',
})
</script>

<template>
  <main class="max-w-3xl mx-auto px-4 sm:px-6 py-16">
    <p class="text-[11px] uppercase tracking-[0.2em] text-pulse font-semibold">B.P.S.T.L.</p>
    <h1 class="mt-3 text-4xl font-semibold tracking-tight">{{ t.mentionsTitle }}</h1>
    <p class="mt-4 text-ink/70 leading-relaxed">{{ t.mentionsLead }}</p>

    <div class="mt-10 space-y-8">
      <section v-for="block in t.mentionsBlocks" :key="block.title">
        <h2 class="font-semibold text-lg">{{ block.title }}</h2>
        <p class="mt-2 text-sm text-ink/70 leading-relaxed">{{ block.text }}</p>
      </section>

      <section>
        <h2 class="font-semibold text-lg">{{ t.sourcesTitle }}</h2>
        <ul class="mt-3 space-y-2 text-sm">
          <li v-for="source in sources" :key="source.href">
            <a :href="source.href" target="_blank" rel="noopener noreferrer" class="underline underline-offset-4 decoration-ink/20 hover:decoration-pulse">
              {{ source.label }}
            </a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>
