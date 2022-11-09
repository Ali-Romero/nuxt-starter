<template>
  <component :is="tag" class="swiper-navigation">
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
      default: 'div',
    }
  },
  mounted() {
    this.setSwiperParams({
      navigation: {}
    })
  },
}
</script>
