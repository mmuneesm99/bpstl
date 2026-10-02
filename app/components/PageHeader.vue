<script setup lang="ts">
defineProps<{
  title: string
  lead: string
  src: string
  position?: string
}>()

</script>

<template>
  <header class="border-b border-ink/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10 lg:py-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <div class="lg:col-span-5">
        <h1 class="text-4xl sm:text-5xl font-bold leading-tight">{{ title }}</h1>
        <p class="mt-5 text-lg leading-relaxed text-ink/80">{{ lead }}</p>
      </div>
      <img
        :src="src"
        alt=""
        class="lg:col-span-7 w-full h-64 sm:h-80 lg:h-[22rem] object-cover bg-paper"
        :style="{ objectPosition: position || 'center' }"
      >
    </div>
  </header>
</template>
