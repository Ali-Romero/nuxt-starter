<template>
  <component :is="tag" class="swiper-wrapper">
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
.swiper-wrapper
  position: relative
  width: 100%
  height: 100%
  z-index: 1
  display: flex
  transition-property: transform
  box-sizing: content-box
</style>
