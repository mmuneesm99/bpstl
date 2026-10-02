<script setup lang="ts">
const { t } = useLocale()
const event = useDoodle('doodle-event')
</script>

<template>
  <aside>
    <div class="lg:sticky lg:top-24 space-y-6">
      <div id="volunteer" class="border border-ink/15 p-5 text-sm">
        <h2 class="font-bold text-base">{{ t.footerContactTitle }}</h2>
        <dl class="mt-3">
          <div class="py-3 border-t border-ink/10">
            <dt class="text-ink/60">{{ t.call112hint }}</dt>
            <dd><a href="tel:112" class="text-2xl font-bold text-pulse hover:underline">112</a></dd>
          </div>
          <div class="py-3 border-t border-ink/10">
            <dt class="text-ink/60">B.P.S.T.L.</dt>
            <dd><a href="tel:+352621387104" class="font-semibold hover:underline">+352 621 387 104</a></dd>
          </div>
          <div class="py-3 border-t border-ink/10">
            <dt class="text-ink/60">Echternach</dt>
            <dd>8, rue des Romains<br>L-6478 Echternach</dd>
          </div>
        </dl>
        <p class="text-ink/70">{{ t.chips.join(' · ') }}</p>
        <p class="mt-4 leading-relaxed text-ink/80">{{ t.volunteerText }}</p>
        <p class="mt-3">
          <a href="https://benevolat.lu/annuaire-associations/benevolle-premiers-secours-team-luxembourg" class="hover:underline" target="_blank" rel="noopener noreferrer">{{ t.legalRegistry }}</a>
        </p>
      </div>
      <img :src="event" alt="" class="w-full max-w-xs">
    </div>
  </aside>
</template>