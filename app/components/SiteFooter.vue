<script setup lang="ts">
const { t } = useLocale()
const logoSrc = useLogoSrc()
const sources = useSources()

const links = computed(() => [
  { id: 'mission', label: t.value.navAbout },
  { id: 'services', label: t.value.footerServices },
  { id: 'guide', label: t.value.navDevis },
  { id: 'survie', label: t.value.navSurvival },
  { id: 'volunteer', label: t.value.navJoin },
])
</script>

<template>
  <footer id="contact" class="bg-ink text-white/70 pt-16 pb-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div class="space-y-4">
          <div class="flex items-center gap-3 text-white">
            <img :src="logoSrc" alt="" class="w-10 h-10 rounded-full object-cover bg-black">
            <span class="font-semibold">B.P.S.T.L.</span>
          </div>
          <p class="text-sm leading-relaxed">{{ t.footerBlurb }}</p>
        </div>

        <div>
          <h2 class="text-[11px] uppercase tracking-[0.18em] text-white/60">{{ t.footerNavTitle }}</h2>
          <ul class="mt-4 space-y-2 text-sm">
            <li v-for="link in links" :key="link.id">
              <NuxtLink :to="`/#${link.id}`" class="hover:text-white">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-[11px] uppercase tracking-[0.18em] text-white/60">{{ t.footerLegalTitle }}</h2>
          <ul class="mt-4 space-y-2 text-sm">
            <li>{{ t.legalStatus }}</li>
            <li>
              <a class="hover:text-white" href="https://benevolat.lu/annuaire-associations/benevolle-premiers-secours-team-luxembourg" target="_blank" rel="noopener noreferrer">{{ t.legalRegistry }}</a>
            </li>
            <li>{{ t.legalSeat }}</li>
            <li><NuxtLink to="/mentions" class="hover:text-white underline underline-offset-4">{{ t.legalLink }}</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h2 class="text-[11px] uppercase tracking-[0.18em] text-white/60">{{ t.footerContactTitle }}</h2>
          <ul class="mt-4 space-y-3 text-sm">
            <li>8, rue des Romains<br>L-6478 Echternach</li>
            <li><a href="tel:+352621387104" class="text-white font-semibold hover:text-teal-200">+352 621 387 104</a></li>
            <li><a href="tel:112" class="hover:text-white">{{ t.footerTagline }}</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-white/10">
        <h2 class="text-[11px] uppercase tracking-[0.18em] text-white/60">{{ t.sourcesTitle }}</h2>
        <ul class="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/80">
          <li v-for="source in sources" :key="source.href">
            <a :href="source.href" target="_blank" rel="noopener noreferrer" class="hover:text-white underline decoration-white/20 underline-offset-4">{{ source.label }}</a>
          </li>
        </ul>
      </div>

      <p class="mt-8 text-xs text-white/40">{{ t.copyright }}</p>
    </div>
  </footer>
</template>
