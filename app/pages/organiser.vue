<script setup lang="ts">
const { t } = useLocale()
const image = useAsset('images/page-organiser.jpg')

useSeoMeta({
  title: 'Organiser une présence — B.P.S.T.L.',
  description: 'Comment demander une présence bénévole de premiers secours, et ce que le CGDIS demande pour une déclaration de manifestation.',
})
</script>

<template>
  <main>
    <PageHeader :title="t.guideTitle" :lead="t.guideLead" :src="image" position="center 78%" />
    <GuideSection plain />
  </main>
</template>
