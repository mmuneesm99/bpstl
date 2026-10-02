<script setup lang="ts">
const props = defineProps<{ each?: boolean }>()

const el = ref<HTMLElement | null>(null)
const shown = ref(false)
let observer: IntersectionObserver | undefined

function markAll(items: HTMLElement[]) {
  shown.value = true
  items.forEach((item) => item.classList.add('is-in'))
}

onMounted(() => {
  const node = el.value
  if (!node) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (props.each) {
    const items = [...node.querySelectorAll<HTMLElement>('.scroll-item')]
    if (reduce || items.length === 0) {
      markAll(items)
      return
    }
    observer = new IntersectionObserver((entries) => {
      let delay = 0
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const item = entry.target as HTMLElement
        item.style.transitionDelay = `${delay}s`
        item.classList.add('is-in')
        shown.value = true
        delay += 0.09
        observer?.unobserve(item)
      }
    }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' })
    items.forEach((item) => observer?.observe(item))
    return
  }

  if (reduce) {
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
  <div ref="el" :class="each ? ['reveal-each', shown && 'is-in'] : (shown ? 'reveal is-in' : 'reveal')">
    <slot />
  </div>
</template>
