<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <section id="faq" class="py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <h2 class="text-3xl font-bold">{{ t.faqTitle }}</h2>
      <Reveal each class="mt-6 border-t border-ink/15">
        <details v-for="item in t.faqs" :key="item.q" class="scroll-item faq group border-b border-ink/15">
          <summary class="flex items-center justify-between gap-4 cursor-pointer py-4 font-semibold">
            {{ item.q }}
            <span class="text-pulse text-xl leading-none group-open:hidden" aria-hidden="true">+</span>
            <span class="text-pulse text-xl leading-none hidden group-open:inline" aria-hidden="true">–</span>
          </summary>
          <p class="pb-4 text-sm text-ink/80 leading-relaxed">{{ item.a }}</p>
        </details>
      </Reveal>
    </div>
  </section>
</template>
