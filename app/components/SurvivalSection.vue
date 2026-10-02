<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <section id="survie" class="py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-end justify-between gap-8">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold">{{ t.survivalTitle }}</h2>
          <p class="mt-4 leading-relaxed text-ink/80">{{ t.survivalLead }}</p>
        </div>
        <DoodleArt name="doodle-aed" class="hidden sm:block w-40 shrink-0" />
      </div>
      <Reveal each>
      <ul class="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <li v-for="stat in t.stats" :key="stat.figure" class="scroll-item">
          <p class="text-3xl font-bold">{{ stat.figure }}</p>
          <p class="mt-2 text-sm leading-relaxed">{{ stat.text }}</p>
          <p class="mt-2 text-sm text-ink/50">{{ stat.source }}</p>
        </li>
      </ul>
      <ul class="mt-12 grid md:grid-cols-2 gap-x-16">
        <li v-for="item in t.chain" :key="item.title" class="scroll-item border-t border-ink/15 py-5">
          <h3 class="font-bold">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink/75">{{ item.text }}</p>
        </li>
      </ul>
      </Reveal>
    </div>
  </section>
</template>
