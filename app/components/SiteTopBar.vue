<script setup lang="ts">
const { locale, t, setLocale } = useLocale()
const { showToast } = useToast()

const languages = [
  { code: 'fr' as const, label: 'FR', name: 'Français' },
  { code: 'de' as const, label: 'DE', name: 'Deutsch' },
  { code: 'en' as const, label: 'EN', name: 'English' },
]

const open = ref(false)
const root = ref<HTMLElement | null>(null)

function choose(code: 'fr' | 'de' | 'en') {
  setLocale(code)
  open.value = false
  showToast(fill(t.value.langToast, { lang: code.toUpperCase() }))
}

function onDocumentClick(event: MouseEvent) {
  if (!root.value?.contains(event.target as Node)) open.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
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
  <div class="relative z-50 bg-ink text-white text-xs">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <p class="text-white/80">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-pulse mr-2 align-middle badge-pulse" />
        {{ t.topAnnounce }}
      </p>
      <div class="flex items-center gap-4 shrink-0">
        <a href="tel:112" class="font-semibold tracking-wide text-white hover:text-red-300">112</a>
        <a href="tel:+352621387104" class="text-white/80 hover:text-white">+352 621 387 104</a>
        <div ref="root" class="relative border-l border-white/15 pl-4">
          <button
            type="button"
            class="flex items-center gap-1.5 font-semibold text-white"
            :aria-expanded="open"
            aria-haspopup="listbox"
            @click.stop="open = !open"
          >
            {{ locale.toUpperCase() }}
            <i class="fa-solid fa-chevron-down text-[9px] text-white/70 transition" :class="open ? 'rotate-180' : ''" />
          </button>
          <ul
            v-show="open"
            class="absolute right-0 top-full z-50 mt-2 w-36 overflow-hidden rounded-xl border border-black/10 bg-white py-1 text-ink shadow-lg"
            role="listbox"
          >
            <li v-for="language in languages" :key="language.code">
              <button
                type="button"
                class="flex w-full items-center justify-between px-3 py-2 text-left text-xs font-semibold hover:bg-[#f4f1eb]"
                :class="locale === language.code ? 'text-[#e10600]' : 'text-[#121316]'"
                role="option"
                :aria-selected="locale === language.code"
                @click="choose(language.code)"
              >
                <span>{{ language.name }}</span>
                <span class="text-[10px] tracking-wide" :class="locale === language.code ? 'text-[#e10600]' : 'text-black/40'">{{ language.label }}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.badge-pulse {
  animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse-ring {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
</style>
