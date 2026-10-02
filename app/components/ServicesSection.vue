<script setup lang="ts">
const { t } = useLocale()
const { showToast } = useToast()

const icons = [
  'fa-solid fa-house-medical',
  'fa-solid fa-heart-pulse',
  'fa-solid fa-tent',
  'fa-solid fa-kit-medical',
  'fa-solid fa-person-walking',
  'fa-solid fa-arrows-rotate',
]

function selectCategory(label: string) {
  document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })
  showToast(fill(t.value.categoryToast, { cat: label }))
}
</script>

<template>
  <section id="services" class="py-20 bg-white border-y border-ink/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-2xl">
        <p class="text-[11px] uppercase tracking-[0.2em] text-pulse font-semibold">{{ t.servicesEyebrow }}</p>
        <h2 class="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">{{ t.servicesTitle }}</h2>
        <p class="mt-4 text-ink/70 leading-relaxed">{{ t.servicesLead }}</p>
      </div>

      <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <button
          v-for="(service, index) in t.services"
          :key="service.title"
          type="button"
          class="text-left rounded-3xl border border-ink/10 p-6 hover:border-pulse/40 hover:bg-paper transition group"
          @click="selectCategory(service.filter)"
        >
          <i :class="icons[index]" class="text-pulse" />
          <h3 class="mt-5 font-semibold text-lg">{{ service.title }}</h3>
          <p class="text-xs uppercase tracking-[0.14em] text-ink/40 mt-1">{{ service.subtitle }}</p>
          <p class="mt-3 text-sm text-ink/70 leading-relaxed">{{ service.text }}</p>
        </button>
      </div>
    </div>
  </section>
</template>
