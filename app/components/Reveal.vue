<script setup lang="ts">
const el = ref<HTMLElement | null>(null)
const shown = ref(false)
let observer: IntersectionObserver | undefined

onMounted(() => {
  const node = el.value
  if (!node) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = true
    return
  }
  observer = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting) return
    shown.value = true
    observer?.disconnect()
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
  observer.observe(node)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div ref="el" :class="shown ? 'reveal is-in' : 'reveal'">
    <slot />
  </div>
</template>
