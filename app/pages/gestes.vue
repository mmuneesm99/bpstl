<script setup lang="ts">
const { t } = useLocale()
const image = useAsset('services/service-training.jpg')

useSeoMeta({
  title: 'Gestes qui sauvent — B.P.S.T.L.',
  description: 'Repères publics sur l’arrêt cardiaque et la chaîne de survie au Luxembourg. Urgence : 112.',
})
</script>

<template>
  <main>
    <PageHeader :title="t.survivalTitle" :lead="t.survivalLead" :src="image" position="center 42%" />
    <SurvivalSection plain />
  </main>
</template>
