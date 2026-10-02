<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <section id="survie" class="py-20 sm:py-28 bg-white border-y border-ink/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-2xl">
        <p class="text-[11px] uppercase tracking-[0.2em] text-pulse font-semibold">{{ t.survivalEyebrow }}</p>
        <h2 class="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">{{ t.survivalTitle }}</h2>
        <p class="mt-4 text-ink/70 leading-relaxed">{{ t.survivalLead }}</p>
      </div>

      <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <article v-for="stat in t.stats" :key="stat.figure" class="rounded-3xl bg-paper p-5">
          <p class="text-3xl font-semibold tracking-tight text-pulse">{{ stat.figure }}</p>
          <p class="mt-3 text-sm leading-relaxed">{{ stat.text }}</p>
          <p class="mt-4 text-[11px] uppercase tracking-[0.14em] text-ink/40">{{ stat.source }}</p>
        </article>
      </div>

      <ol class="mt-8 grid md:grid-cols-2 gap-4">
        <li v-for="(item, index) in t.chain" :key="item.title" class="rounded-3xl border border-ink/10 p-6">
          <span class="text-xs font-semibold text-pulse">0{{ index + 1 }}</span>
          <h3 class="mt-2 font-semibold text-lg">{{ item.title }}</h3>
          <p class="mt-2 text-sm text-ink/70 leading-relaxed">{{ item.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
