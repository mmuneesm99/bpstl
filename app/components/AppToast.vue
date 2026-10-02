<script setup lang="ts">
const { message, visible } = useToast()
</script>

<template>
  <div
    class="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl z-50 transition-all duration-300 flex items-center space-x-3 border border-slate-700 pointer-events-none"
    :class="visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'"
    role="status"
  >
    <i class="fa-solid fa-circle-check text-emerald-400 text-lg" />
    <span class="text-xs font-bold">{{ message }}</span>
  </div>
</template>
