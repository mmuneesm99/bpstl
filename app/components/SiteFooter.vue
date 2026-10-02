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
  <footer id="contact" class="bg-white text-ink border-t-4 border-pulse pt-12 pb-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-3">
            <img :src="logoSrc" alt="" class="w-10 h-10 object-contain">
            <span class="font-bold">B.P.S.T.L.</span>
          </div>
          <p class="mt-3 text-sm leading-relaxed">{{ t.footerBlurb }}</p>
        </div>

        <div>
          <h2 class="font-bold">{{ t.footerNavTitle }}</h2>
          <ul class="mt-3 space-y-2 text-sm">
            <li v-for="link in links" :key="link.id">
              <NuxtLink :to="`/#${link.id}`" class="hover:text-pulse hover:underline">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="font-bold">{{ t.footerLegalTitle }}</h2>
          <ul class="mt-3 space-y-2 text-sm">
            <li>{{ t.legalStatus }}</li>
            <li>
              <a class="hover:text-pulse hover:underline" href="https://benevolat.lu/annuaire-associations/benevolle-premiers-secours-team-luxembourg" target="_blank" rel="noopener noreferrer">{{ t.legalRegistry }}</a>
            </li>
            <li>{{ t.legalSeat }}</li>
            <li><NuxtLink to="/mentions" class="hover:text-pulse hover:underline">{{ t.legalLink }}</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h2 class="font-bold">{{ t.footerContactTitle }}</h2>
          <ul class="mt-3 space-y-2 text-sm">
            <li>8, rue des Romains<br>L-6478 Echternach</li>
            <li><a href="tel:+352621387104" class="text-pulse text-lg font-bold hover:underline">+352 621 387 104</a></li>
            <li><a href="tel:112" class="hover:text-pulse hover:underline">{{ t.footerTagline }}</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-10 pt-6 border-t border-ink/10">
        <h2 class="font-bold">{{ t.sourcesTitle }}</h2>
        <ul class="mt-3 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
          <li v-for="source in sources" :key="source.href">
            <a :href="source.href" target="_blank" rel="noopener noreferrer" class="hover:text-pulse hover:underline">{{ source.label }}</a>
          </li>
        </ul>
      </div>

      <p class="mt-8 text-sm text-ink/50">{{ t.copyright }}</p>
    </div>
  </footer>
</template>
