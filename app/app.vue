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
  <div class="bg-paper text-ink font-sans antialiased selection:bg-pulse selection:text-white min-h-screen">
    <SiteTopBar />
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
    <VolunteerModal />
    <AccountModal />
    <AppToast />
  </div>
</template>
