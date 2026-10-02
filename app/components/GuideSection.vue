<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <section id="guide" class="py-16 bg-paper border-y border-ink/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10">
      <div class="lg:col-span-4">
        <h2 class="text-3xl font-bold">{{ t.guideTitle }}</h2>
        <p class="mt-4 text-lg leading-relaxed">{{ t.guideLead }}</p>
      </div>
      <Reveal each class="lg:col-span-8">
        <ol class="timeline space-y-0">
          <li v-for="(step, index) in t.steps" :key="step.title" class="scroll-item relative pl-12 pb-8 last:pb-0">
            <span class="absolute left-0 top-0 w-6 h-6 bg-pulse text-white text-sm font-bold grid place-items-center">{{ index + 1 }}</span>
            <h3 class="font-bold">{{ step.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink/75">{{ step.text }}</p>
          </li>
        </ol>
      </Reveal>
    </div>
  </section>
</template>
