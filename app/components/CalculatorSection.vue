<script setup lang="ts">
const { t } = useLocale()

const eventType = ref('sports')
const visitors = ref(600)
const hours = ref(8)
const location = ref('')
const optDae = ref(true)
const optTent = ref(false)

const recommendation = computed(() => {
  const copy = t.value
  let responders = 2
  let category = copy.catSmall
  let equip = optDae.value ? copy.equipSmall : copy.equipSmallNoDae

  if (visitors.value > 1200 || eventType.value === 'sports') {
    responders = Math.max(4, Math.ceil(visitors.value / 350))
    category = copy.catMid
    equip = optDae.value ? copy.equipMid : copy.equipMidNoDae
  }
  if (visitors.value > 3000) {
    responders = Math.max(8, Math.ceil(visitors.value / 250))
    category = copy.catLarge
    equip = optDae.value ? copy.equipLarge : copy.equipLargeNoDae
  }
  if (optTent.value) equip += copy.equipTent

  return {
    responders: `${responders} ${copy.responders}`,
    category,
    equip,
    hours: hours.value,
    location: location.value.trim(),
  }
})

</script>

<template>
  <section class="pb-20" aria-labelledby="calc-title">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="rounded-[2rem] bg-ink text-white p-6 sm:p-10">
        <div class="max-w-2xl">
          <p class="text-[11px] uppercase tracking-[0.2em] text-red-300 font-semibold">{{ t.calcBadge }}</p>
          <h2 id="calc-title" class="mt-3 text-3xl font-semibold tracking-tight">{{ t.calcTitle }}</h2>
          <p class="mt-3 text-sm text-white/65 leading-relaxed">{{ t.calcIntro }}</p>
        </div>

        <div class="mt-8 grid lg:grid-cols-12 gap-6">
          <div class="lg:col-span-7 space-y-5 bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6">
            <div>
              <label class="block text-[11px] uppercase tracking-[0.16em] text-white/50 mb-2" for="eventType">{{ t.calcEventType }}</label>
              <select id="eventType" v-model="eventType" class="w-full bg-ink border border-white/15 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-white/40">
                <option v-for="option in t.eventTypes" :key="option.value" :value="option.value">{{ option.label }}</option>
              </select>
            </div>

            <div>
              <div class="flex justify-between gap-3 mb-2">
                <label class="text-[11px] uppercase tracking-[0.16em] text-white/50" for="visitorRange">{{ t.calcAudience }}</label>
                <span class="text-sm font-semibold text-red-300">{{ visitors }} {{ t.people }}</span>
              </div>
              <input id="visitorRange" v-model.number="visitors" type="range" min="100" max="8000" step="100" class="w-full accent-pulse">
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-[11px] uppercase tracking-[0.16em] text-white/50 mb-2" for="eventHours">{{ t.calcHours }}</label>
                <input id="eventHours" v-model.number="hours" type="number" min="1" max="72" class="w-full bg-ink border border-white/15 rounded-2xl px-4 py-3 text-sm focus:outline-none">
              </div>
              <div>
                <label class="block text-[11px] uppercase tracking-[0.16em] text-white/50 mb-2" for="eventLoc">{{ t.calcLocation }}</label>
                <input id="eventLoc" v-model="location" type="text" :placeholder="t.calcLocationPlaceholder" class="w-full bg-ink border border-white/15 rounded-2xl px-4 py-3 text-sm focus:outline-none">
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-3 text-sm">
              <label class="flex items-center gap-2 border border-white/10 rounded-2xl px-4 py-3">
                <input v-model="optDae" type="checkbox" class="accent-pulse"> {{ t.calcDae }}
              </label>
              <label class="flex items-center gap-2 border border-white/10 rounded-2xl px-4 py-3">
                <input v-model="optTent" type="checkbox" class="accent-pulse"> {{ t.calcTent }}
              </label>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-white text-ink p-6">
            <div>
              <h3 class="font-semibold">{{ t.calcResultTitle }}</h3>
              <dl class="mt-5 space-y-4 text-sm">
                <div class="flex justify-between gap-4 border-b border-ink/10 pb-3">
                  <dt class="text-ink/50">{{ t.calcRespondersLabel }}</dt>
                  <dd class="font-semibold text-right">{{ recommendation.responders }}</dd>
                </div>
                <div class="flex justify-between gap-4 border-b border-ink/10 pb-3">
                  <dt class="text-ink/50">{{ t.calcEquipLabel }}</dt>
                  <dd class="font-semibold text-right">{{ recommendation.equip }}</dd>
                </div>
                <div class="flex justify-between gap-4 border-b border-ink/10 pb-3">
                  <dt class="text-ink/50">{{ t.calcCategoryLabel }}</dt>
                  <dd class="font-semibold text-right">{{ recommendation.category }}</dd>
                </div>
                <div v-if="recommendation.location" class="flex justify-between gap-4">
                  <dt class="text-ink/50">{{ t.calcLocation }}</dt>
                  <dd class="font-semibold text-right">{{ recommendation.location }}</dd>
                </div>
              </dl>
            </div>
            <a href="tel:+352621387104" class="mt-6 w-full bg-pulse hover:bg-medical-600 text-white font-semibold py-3.5 rounded-full text-center">
              {{ t.calcSubmit }}
            </a>
          </div>
        </div>
        <p class="mt-6 text-xs text-white/50 leading-relaxed max-w-3xl">{{ t.calcDisclaimer }}</p>
      </div>
    </div>
  </section>
</template>
