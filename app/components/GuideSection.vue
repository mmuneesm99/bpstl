<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <section id="guide" class="py-20 sm:py-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-2xl">
        <p class="text-[11px] uppercase tracking-[0.2em] text-pulse font-semibold">{{ t.guideEyebrow }}</p>
        <h2 class="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">{{ t.guideTitle }}</h2>
        <p class="mt-4 text-ink/70 leading-relaxed">{{ t.guideLead }}</p>
      </div>
      <ol class="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <li v-for="(step, index) in t.steps" :key="step.title" class="rounded-3xl bg-white border border-ink/5 p-5">
          <span class="text-pulse font-semibold text-sm">0{{ index + 1 }}</span>
          <h3 class="mt-3 font-semibold">{{ step.title }}</h3>
          <p class="mt-2 text-sm text-ink/65 leading-relaxed">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
