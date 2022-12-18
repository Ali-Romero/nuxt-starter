<template>
  <component :is="tag" class="swiper-navigation">
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
.swiper-navigation
  position: absolute
  display: flex
  justify-content: space-between
  width: 100%
  height: 0
  z-index: 1
</style>
