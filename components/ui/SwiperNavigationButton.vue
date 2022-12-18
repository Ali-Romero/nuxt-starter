<template>
  <component
    :is="tag"
    ref="button"
    aria-label="navigation button"
    class="swiper-button"
    :class="classes"
  >
    <slot />
  </component>
</template>

<script>
export default {
  inject: ['setSwiperParams'],
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    prev: {
      type: Boolean,
      default: false,
    },
    next: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'swiper-button-next': this.next,
        'swiper-button-prev': this.prev,
      }
    },
  },
  mounted() {
    const key = this.next ? 'nextEl' : 'prevEl'

    this.setSwiperParams({
      navigation: {
        [key]: this.$refs.button,
      },
    })
  },
}
</script>

<style lang="sass" scoped>
.swiper-button
  border: none
  outline: none
  background: none
  padding: 0
  cursor: pointer
  -webkit-tap-highlight-color: transparent
  -webkit-touch-callout: none
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  transform: scale(1)
  transition: 0.3s
  &:hover
    transform: scale(0.9)
</style>
