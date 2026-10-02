<script setup lang="ts">
const { t } = useLocale()
const sources = useSources()

useSeoMeta({
  title: 'Mentions et sources — B.P.S.T.L.',
  description: 'Sources publiques et mentions du site de Bénévoles Premiers Secours Team Luxembourg.',
})
</script>

<template>
  <main class="max-w-3xl mx-auto px-4 sm:px-6 py-12">
    <p class="text-sm"><NuxtLink to="/" class="hover:underline">B.P.S.T.L.</NuxtLink></p>
    <h1 class="mt-3 text-3xl font-bold">{{ t.mentionsTitle }}</h1>
    <p class="mt-4 leading-relaxed text-ink/80">{{ t.mentionsLead }}</p>

    <div class="mt-8 space-y-6">
      <section v-for="block in t.mentionsBlocks" :key="block.title" class="border-t border-ink/10 pt-5">
        <h2 class="font-bold text-lg">{{ block.title }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-ink/80">{{ block.text }}</p>
      </section>

      <section class="border-t border-ink/10 pt-5">
        <h2 class="font-bold text-lg">{{ t.sourcesTitle }}</h2>
        <ul class="mt-3 space-y-2 text-sm">
          <li v-for="source in sources" :key="source.href">
            <a :href="source.href" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 hover:text-pulse">
              {{ source.label }}
            </a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>
