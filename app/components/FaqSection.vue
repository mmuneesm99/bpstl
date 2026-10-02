<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <section id="faq" class="pb-20">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <p class="text-[11px] uppercase tracking-[0.2em] text-pulse font-semibold">{{ t.faqEyebrow }}</p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight">{{ t.faqTitle }}</h2>
      <div class="mt-8 divide-y divide-ink/10 border-y border-ink/10">
        <details v-for="item in t.faqs" :key="item.q" class="faq group py-4">
          <summary class="flex items-center justify-between gap-4 cursor-pointer font-semibold">
            {{ item.q }}
            <i class="fa-solid fa-plus text-xs text-pulse group-open:rotate-45 transition" />
          </summary>
          <p class="pt-3 pb-2 text-sm text-ink/70 leading-relaxed">{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
