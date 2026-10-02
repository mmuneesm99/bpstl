<script setup lang="ts">
const { message, visible } = useToast()
</script>

<template>
  <div
    class="fixed bottom-4 right-4 bg-ink text-white px-4 py-3 z-50 transition-all duration-300 pointer-events-none max-w-sm text-sm"
    :class="visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
    role="status"
  >
    {{ message }}
  </div>
</template>
