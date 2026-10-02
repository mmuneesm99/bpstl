<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <section id="mission" class="py-20 sm:py-28">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12">
      <div class="lg:col-span-5">
        <p class="text-[11px] uppercase tracking-[0.2em] text-pulse font-semibold">{{ t.aboutEyebrow }}</p>
        <h2 class="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">{{ t.aboutTitle }}</h2>
        <p class="mt-5 text-ink/70 leading-relaxed">{{ t.aboutDesc }}</p>
        <NuxtLink to="/#services" class="inline-flex mt-8 text-sm font-semibold border-b border-ink pb-1 hover:text-pulse hover:border-pulse">
          {{ t.aboutCta }}
        </NuxtLink>
      </div>

      <div class="lg:col-span-7 space-y-4">
        <article class="bg-white rounded-3xl p-6 sm:p-8 border border-ink/5">
          <p class="text-[11px] uppercase tracking-[0.18em] text-ink/45">{{ t.projectLabel }}</p>
          <p class="mt-3 font-serif text-lg leading-relaxed">{{ t.projectText }}</p>
          <p class="mt-4 text-[11px] uppercase tracking-[0.18em] text-ink/45">{{ t.presentationLabel }}</p>
          <p class="mt-2 text-ink/80">{{ t.presentationText }}</p>
          <p class="mt-5 text-sm text-ink/60 border-t border-ink/10 pt-4">
            <span class="font-semibold text-ink">{{ t.translationLabel }}. </span>{{ t.translationText }}
          </p>
        </article>

        <div class="grid sm:grid-cols-2 gap-3">
          <article v-for="pillar in t.pillars" :key="pillar.title" class="rounded-2xl border border-ink/10 p-5">
            <h3 class="font-semibold">{{ pillar.title }}</h3>
            <p class="mt-2 text-sm text-ink/65 leading-relaxed">{{ pillar.text }}</p>
          </article>
        </div>

        <aside class="rounded-3xl bg-ink text-white p-6 sm:p-8">
          <h3 class="font-semibold text-lg">{{ t.limitTitle }}</h3>
          <p class="mt-3 text-sm text-white/70 leading-relaxed">{{ t.limitText }}</p>
        </aside>
      </div>
    </div>
  </section>
</template>
