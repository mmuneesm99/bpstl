<script setup lang="ts">
defineProps<{
  name: 'cross' | 'pulse' | 'bag' | 'tent' | 'aed' | 'walk' | 'hands' | 'phone'
}>()
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'cross'">
      <circle cx="32" cy="32" r="22" />
      <path d="M32 18 v28 M18 32 h28" />
    </template>
    <template v-else-if="name === 'pulse'">
      <path d="M6 34 h12 l6 -14 l8 26 l6 -12 h20" />
    </template>
    <template v-else-if="name === 'bag'">
      <path d="M22 26 h20 v22 h-20 z" />
      <path d="M26 26 v-4 a6 6 0 0 1 12 0 v4" />
      <path d="M32 32 v8 M28 36 h8" />
    </template>
    <template v-else-if="name === 'tent'">
      <path d="M8 48 L32 14 L56 48 z" />
      <path d="M32 14 v34" />
      <path d="M26 36 h12 M32 30 v12" />
    </template>
    <template v-else-if="name === 'aed'">
      <rect x="14" y="12" width="28" height="40" rx="3" />
      <path d="M24 28 h4 l3 -6 l4 12 l3 -6 h6" />
    </template>
    <template v-else-if="name === 'walk'">
      <circle cx="36" cy="14" r="5" />
      <path d="M28 48 l8 -16 h8 l6 16" />
      <path d="M36 24 l-10 8 M36 28 l10 4" />
    </template>
    <template v-else-if="name === 'hands'">
      <circle cx="22" cy="16" r="5" />
      <path d="M22 22 v12 M16 28 h12 M22 34 v12 M16 46 h12" />
      <path d="M40 26 v14 M34 33 h12" />
    </template>
    <template v-else>
      <path d="M20 18 h16 a8 8 0 0 1 8 8 v6 a8 8 0 0 1 -8 8 h-6 l-8 8 v-8 h-2 a8 8 0 0 1 -8 -8 v-6 a8 8 0 0 1 8 -8 z" />
      <path d="M28 30 h8 M32 26 v8" />
    </template>
  </svg>
</template>
