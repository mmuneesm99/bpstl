<script setup lang="ts">
const { locale } = useLocale()

useHead({
  htmlAttrs: {
    lang: locale,
    class: 'scroll-smooth',
  },
})
</script>

<template>
  <div class="bg-white text-ink font-sans antialiased selection:bg-pulse selection:text-white min-h-screen">
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
    <AppToast />
  </div>
</template>
