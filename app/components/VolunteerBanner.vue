<script setup lang="ts">
defineProps<{ plain?: boolean }>()
const { t } = useLocale()
</script>

<template>
  <section id="volunteer" class="py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <Reveal each class="grid lg:grid-cols-12 gap-10 items-center bg-paper px-6 py-10 sm:px-10">
      <div v-if="!plain" class="scroll-item lg:col-span-7">
        <h2 class="text-3xl font-bold leading-tight">{{ t.volunteerTitle }}</h2>
        <p class="mt-4 text-lg leading-relaxed max-w-xl">{{ t.volunteerText }}</p>
        <a href="tel:+352621387104" class="inline-block mt-8 bg-pulse hover:bg-medical-600 text-white font-semibold px-5 py-3">
          {{ t.volunteerCta }}
        </a>
      </div>
      <div v-else class="scroll-item lg:col-span-7 flex items-center">
        <a href="tel:+352621387104" class="inline-block bg-pulse hover:bg-medical-600 text-white font-semibold px-5 py-3">
          {{ t.volunteerCta }}
        </a>
      </div>
      <div class="scroll-item lg:col-span-5">
        <DoodleArt name="doodle-kit" late class="w-40 mb-6" />
        <ul class="space-y-4 text-sm leading-relaxed border-t lg:border-t-0 lg:border-l border-ink/15 lg:pl-8 pt-6 lg:pt-1">
          <li v-for="point in t.volunteerPoints" :key="point">{{ point }}</li>
        </ul>
      </div>
    </Reveal>
    </div>
  </section>
</template>
