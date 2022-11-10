<template>
  <component :is="tag" class="swiper-slide">
    <slot />
  </component>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<style lang="sass" scoped>
.swiper-slide
  flex-shrink: 0
  width: 100%
  height: 100%
  position: relative
  transition-property: transform
</style>
