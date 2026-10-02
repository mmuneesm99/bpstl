<script setup lang="ts">
const { t } = useLocale()
const logoSrc = useLogoSrc()
const { showToast } = useToast()
const { openAccount } = useModals()
const route = useRoute()

const menuOpen = ref(false)
const query = ref('')

const links = computed(() => [
  { id: 'mission', label: t.value.navAbout },
  { id: 'services', label: t.value.navServices },
  { id: 'guide', label: t.value.navDevis },
  { id: 'survie', label: t.value.navSurvival },
  { id: 'volunteer', label: t.value.navJoin },
  { id: 'contact', label: t.value.navContact },
])

function closeMenu() {
  menuOpen.value = false
}

function handleSearch() {
  const value = query.value.trim()
  if (!value) {
    showToast(t.value.searchEmpty)
    return
  }
  showToast(fill(t.value.searchToast, { query: value }))
  const normalized = value.toLowerCase()
  const target = /112|cœur|coeur|arrêt|arret|dae|aed|défib|defib|réagis|reagis/.test(normalized)
    ? 'survie'
    : /b[eé]n[eé]vole|volunteer|ehrenamt|candid/.test(normalized)
      ? 'volunteer'
      : /organ|devis|calcul|cgdis|manifest/.test(normalized)
        ? 'guide'
        : /contact|echternach|adresse|t[eé]l/.test(normalized)
          ? 'contact'
          : /service|poste|tente|patrol|formation/.test(normalized)
            ? 'services'
            : 'mission'
  menuOpen.value = false
  if (route.path !== '/') {
    navigateTo({ path: '/', hash: `#${target}` })
    return
  }
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-ink/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-[4.25rem] gap-4">
        <NuxtLink to="/#hero" class="flex items-center gap-3 shrink-0" @click="closeMenu">
          <img :src="logoSrc" alt="B.P.S.T.L." class="w-10 h-10 rounded-full object-cover bg-black ring-1 ring-ink/10">
          <span class="leading-none">
            <span class="block text-[15px] font-semibold tracking-tight">B.P.S.T.L.</span>
            <span class="block text-[10px] uppercase tracking-[0.16em] text-ink/50 mt-1">Echternach</span>
          </span>
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-6 text-sm text-ink/70">
          <NuxtLink
            v-for="link in links"
            :key="link.id"
            :to="`/#${link.id}`"
            class="hover:text-ink transition"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="hidden md:flex items-center gap-2">
          <button type="button" class="text-sm px-3 py-2 text-ink/70 hover:text-ink" @click="openAccount">
            {{ t.navAccount }}
          </button>
          <NuxtLink to="/#guide" class="text-sm font-semibold bg-pulse text-white px-4 py-2.5 rounded-full hover:bg-medical-600 transition">
            {{ t.navDemand }}
          </NuxtLink>
        </div>

        <button
          type="button"
          class="lg:hidden w-10 h-10 grid place-items-center"
          :aria-expanded="menuOpen"
          aria-label="Menu"
          @click="menuOpen = !menuOpen"
        >
          <i class="fa-solid" :class="menuOpen ? 'fa-xmark' : 'fa-bars'" />
        </button>
      </div>

      <form class="hidden md:block pb-3" @submit.prevent="handleSearch">
        <div class="relative max-w-md">
          <input
            v-model="query"
            type="search"
            :placeholder="t.searchPlaceholder"
            class="w-full bg-white border border-ink/10 rounded-full pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:border-ink/40"
          >
          <button type="submit" class="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-ink text-white" aria-label="Search">
            <i class="fa-solid fa-magnifying-glass text-xs" />
          </button>
        </div>
      </form>
    </div>

    <div v-show="menuOpen" class="lg:hidden border-t border-ink/10 bg-paper px-4 py-4 space-y-1">
      <NuxtLink
        v-for="link in links"
        :key="link.id"
        :to="`/#${link.id}`"
        class="block py-2.5 text-sm font-medium border-b border-ink/5"
        @click="closeMenu"
      >
        {{ link.label }}
      </NuxtLink>
      <NuxtLink to="/#guide" class="block text-center bg-pulse text-white font-semibold py-3 rounded-full mt-3" @click="closeMenu">
        {{ t.mobileCta }}
      </NuxtLink>
    </div>
  </header>
</template>
