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
    }
  },
}
</script>

<style lang="sass" scoped></style>
