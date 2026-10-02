<script setup lang="ts">
const props = defineProps<{
  name: 'doodle-event' | 'doodle-kit' | 'doodle-aed' | 'doodle-help'
  late?: boolean
}>()

const src = useDoodle(props.name)
</script>

<template>
  <img :src="src" alt="" :class="late ? 'doodle doodle-late' : 'doodle'">
</template>
