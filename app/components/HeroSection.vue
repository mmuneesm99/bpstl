<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <section id="hero" class="hero-grid text-white relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 relative">
      <div class="grid lg:grid-cols-12 gap-12 items-end">
        <div class="lg:col-span-7">
          <p class="text-xs uppercase tracking-[0.22em] text-white/60">{{ t.heroTag }}</p>
          <h1 class="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.05]">
            {{ t.heroTitle }}
          </h1>
          <p class="mt-6 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
            {{ t.heroLead }}
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <NuxtLink to="/#guide" class="inline-flex justify-center items-center bg-pulse hover:bg-red-500 text-white font-semibold px-6 py-3.5 rounded-full">
              {{ t.heroCta1 }}
            </NuxtLink>
            <NuxtLink to="/#volunteer" class="inline-flex justify-center items-center border border-white/20 hover:border-white/50 px-6 py-3.5 rounded-full">
              {{ t.heroCta2 }}
            </NuxtLink>
          </div>
          <ul class="mt-8 flex flex-wrap gap-2">
            <li v-for="chip in t.chips" :key="chip" class="text-[11px] uppercase tracking-[0.16em] border border-white/15 rounded-full px-3 py-1 text-white/70">
              {{ chip }}
            </li>
          </ul>
        </div>

        <div class="lg:col-span-5 space-y-4">
          <blockquote class="border border-white/10 bg-white/5 rounded-3xl p-6">
            <p class="font-serif text-xl leading-snug text-white/95">{{ t.heroMotto }}</p>
            <footer class="mt-4 text-xs uppercase tracking-[0.16em] text-white/45">{{ t.heroMottoAuthor }}</footer>
          </blockquote>
          <a href="tel:112" class="flex items-center justify-between gap-4 rounded-3xl bg-white text-ink px-6 py-5">
            <span>
              <span class="block text-3xl font-semibold tracking-tight text-pulse">{{ t.call112 }}</span>
              <span class="block text-sm text-ink/60 mt-1">{{ t.call112hint }}</span>
            </span>
            <i class="fa-solid fa-phone text-pulse" />
          </a>
        </div>
      </div>
    </div>
    <svg class="w-full h-16 text-pulse" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 48 H260 L310 48 L350 12 L400 68 L445 28 L490 48 H1200" fill="none" stroke="currentColor" stroke-width="2.5" />
    </svg>
  </section>
</template>
