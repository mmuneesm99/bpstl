<script setup lang="ts">
const { locale, t, setLocale } = useLocale()
const { showToast } = useToast()
const logoSrc = useLogoSrc()

const menuOpen = ref(false)
const langOpen = ref(false)
const langRoot = ref<HTMLElement | null>(null)

const languages = [
  { code: 'fr' as const, label: 'FR', name: 'Français' },
  { code: 'de' as const, label: 'DE', name: 'Deutsch' },
  { code: 'en' as const, label: 'EN', name: 'English' },
]

const route = useRoute()

const links = computed(() => [
  { to: '/mission', label: t.value.navAbout },
  { to: '/services', label: t.value.navServices },
  { to: '/organiser', label: t.value.navDevis },
  { to: '/gestes', label: t.value.navSurvival },
  { to: '/benevoles', label: t.value.navJoin },
  { to: '/contact', label: t.value.navContact },
])

function closeMenu() {
  menuOpen.value = false
}

function choose(code: 'fr' | 'de' | 'en') {
  setLocale(code)
  langOpen.value = false
  showToast(fill(t.value.langToast, { lang: code.toUpperCase() }))
}

function onDocumentClick(event: MouseEvent) {
  if (!langRoot.value?.contains(event.target as Node)) langOpen.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') langOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="sticky top-0 z-40 bg-white border-b border-ink/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 gap-4">
        <NuxtLink to="/" class="flex items-center gap-2.5 shrink-0" @click="closeMenu">
          <img :src="logoSrc" alt="" class="w-9 h-9 object-contain">
          <span class="font-bold leading-none">B.P.S.T.L.</span>
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-4 text-sm whitespace-nowrap">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="hover:text-pulse"
            :class="route.path === link.to ? 'text-pulse font-semibold' : ''"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-3 shrink-0">
          <a href="tel:112" class="bg-pulse text-white text-sm font-bold px-2 py-0.5">112</a>
          <div ref="langRoot" class="relative">
            <button
              type="button"
              class="flex items-center gap-1 text-sm font-semibold"
              :aria-expanded="langOpen"
              aria-haspopup="listbox"
              @click.stop="langOpen = !langOpen"
            >
              {{ locale.toUpperCase() }}
              <i class="fa-solid fa-chevron-down text-[9px] transition" :class="langOpen ? 'rotate-180' : ''" />
            </button>
            <ul
              v-show="langOpen"
              class="absolute right-0 top-full z-50 mt-2 w-40 border border-ink/15 bg-white py-1 text-ink shadow-sm"
              role="listbox"
            >
              <li v-for="language in languages" :key="language.code">
                <button
                  type="button"
                  class="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-paper"
                  :class="locale === language.code ? 'font-bold text-pulse' : ''"
                  role="option"
                  :aria-selected="locale === language.code"
                  @click="choose(language.code)"
                >
                  <span>{{ language.name }}</span>
                  <span class="text-xs text-ink/50">{{ language.label }}</span>
                </button>
              </li>
            </ul>
          </div>
          <NuxtLink to="/organiser" class="hidden md:inline-block text-sm font-semibold bg-pulse text-white px-3 py-2 hover:bg-medical-600 whitespace-nowrap">
            {{ t.navDemand }}
          </NuxtLink>
          <button
            type="button"
            class="lg:hidden w-10 h-10 grid place-items-center border border-ink/15"
            :aria-expanded="menuOpen"
            aria-label="Menu"
            @click="menuOpen = !menuOpen"
          >
            <i class="fa-solid" :class="menuOpen ? 'fa-xmark' : 'fa-bars'" />
          </button>
        </div>
      </div>
    </div>

    <div v-show="menuOpen" class="lg:hidden border-t border-ink/10 bg-white px-4 py-2">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="block py-3 text-base border-b border-ink/10"
        :class="route.path === link.to ? 'text-pulse font-semibold' : ''"
        @click="closeMenu"
      >
        {{ link.label }}
      </NuxtLink>
      <a href="tel:+352621387104" class="block py-3 font-semibold whitespace-nowrap">+352 621 387 104</a>
      <NuxtLink to="/organiser" class="block text-center bg-pulse text-white font-semibold py-3 mt-2 mb-3" @click="closeMenu">
        {{ t.mobileCta }}
      </NuxtLink>
    </div>
  </header>
</template>
