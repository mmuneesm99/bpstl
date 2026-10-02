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
  <div class="relative z-50 bg-paper text-ink text-sm border-b border-ink/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <p>
        <a href="tel:112" class="inline-block bg-pulse text-white font-bold px-2 py-0.5 mr-2">112</a>
        {{ t.topAnnounce }}
      </p>
      <div class="flex items-center gap-4 shrink-0">
        <a href="tel:+352621387104" class="hover:underline">+352 621 387 104</a>
        <div ref="root" class="relative border-l border-ink/15 pl-4">
          <button
            type="button"
            class="flex items-center gap-1.5 font-semibold"
            :aria-expanded="open"
            aria-haspopup="listbox"
            @click.stop="open = !open"
          >
            {{ locale.toUpperCase() }}
            <i class="fa-solid fa-chevron-down text-[9px] transition" :class="open ? 'rotate-180' : ''" />
          </button>
          <ul
            v-show="open"
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
      </div>
    </div>
  </div>
</template>
