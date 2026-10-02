<script setup lang="ts">
const { t } = useLocale()
const { showToast } = useToast()
const { volunteerOpen, closeModals } = useModals()

const name = ref('')
const email = ref('')
const phone = ref('')

function submit() {
  closeModals()
  name.value = ''
  email.value = ''
  phone.value = ''
  showToast(t.value.volunteerSuccess)
}
</script>

<template>
  <div
    v-if="volunteerOpen"
    class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    @click.self="closeModals"
  >
    <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative" role="dialog" aria-modal="true" :aria-label="t.volunteerModalTitle">
      <button type="button" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600" aria-label="Close" @click="closeModals">
        <i class="fa-solid fa-xmark text-xl" />
      </button>
      <div class="text-center mb-6">
        <div class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
          <i class="fa-solid fa-hand-holding-medical" />
        </div>
        <h3 class="text-xl font-black text-slate-900">{{ t.volunteerModalTitle }}</h3>
        <p class="text-xs text-slate-500 mt-1">{{ t.volunteerModalText }}</p>
      </div>
      <form class="space-y-4" @submit.prevent="submit">
        <input v-model="name" type="text" :placeholder="t.volunteerName" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:border-medical-500">
        <input v-model="email" type="email" :placeholder="t.volunteerEmail" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:border-medical-500">
        <input v-model="phone" type="tel" :placeholder="t.volunteerPhone" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:border-medical-500">
        <button type="submit" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-3 rounded-xl shadow text-xs uppercase tracking-wider">
          {{ t.volunteerSubmit }}
        </button>
      </form>
    </div>
  </div>
</template>
