<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <section id="volunteer" class="py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="rounded-[2rem] overflow-hidden grid lg:grid-cols-12 bg-ink text-white">
        <div class="lg:col-span-7 p-8 sm:p-12">
          <p class="text-[11px] uppercase tracking-[0.2em] text-red-300 font-semibold">{{ t.volunteerBadge }}</p>
          <h2 class="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">{{ t.volunteerTitle }}</h2>
          <p class="mt-4 text-white/70 leading-relaxed max-w-xl">{{ t.volunteerText }}</p>
          <a href="tel:+352621387104" class="mt-8 inline-flex bg-white text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-paper">
            {{ t.volunteerCta }}
          </a>
        </div>
        <ul class="lg:col-span-5 bg-pulse p-8 sm:p-12 space-y-5 text-sm leading-relaxed">
          <li v-for="point in t.volunteerPoints" :key="point" class="flex gap-3">
            <span class="mt-1 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
