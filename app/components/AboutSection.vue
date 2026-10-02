<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <section id="mission" class="py-14 lg:py-20">
    <Reveal>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 items-start">
        <h2 class="lg:col-span-5 text-3xl sm:text-4xl font-bold leading-tight lg:sticky lg:top-24">{{ t.aboutTitle }}</h2>
        <div class="lg:col-span-7 lg:-mt-6">
          <p class="font-display text-2xl sm:text-3xl leading-snug border-l-4 border-pulse pl-5">{{ t.heroMotto }}</p>
          <p class="mt-3 text-sm text-ink/55 pl-6">{{ t.heroMottoAuthor }}</p>
          <p class="mt-8 text-lg leading-relaxed">{{ t.aboutDesc }}</p>
          <p class="mt-4 leading-relaxed text-ink/80">
            <span class="font-semibold text-ink">{{ t.translationLabel }}. </span>{{ t.translationText }}
          </p>
          <p class="mt-4 text-sm leading-relaxed text-ink/70">{{ t.projectText }}</p>
          <p class="mt-6 text-sm leading-relaxed">
            <span class="font-semibold">{{ t.limitTitle }}. </span>{{ t.limitText }}
          </p>
        </div>
      </div>
      <ul class="max-w-6xl mx-auto px-4 sm:px-6 mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <li v-for="pillar in t.pillars" :key="pillar.title" class="border-t-2 border-pulse pt-4">
          <h3 class="font-bold">{{ pillar.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink/75">{{ pillar.text }}</p>
        </li>
      </ul>
    </Reveal>
  </section>
</template>
