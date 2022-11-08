<template>
  <nuxt-picture
    v-bind="$attrs"
    format="webp"
    quality="80"
    loading="lazy"
    :style="styles"
    :alt="alt"
    :img-attrs="{ class: imgClass, style: styles }"
    v-on="$listeners"
  />
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    alt: {
      type: String,
      default: 'image',
    },
    block: {
      type: Boolean,
      default: true,
    },
    imgClass: {
      type: [String, Object, Array],
      default: '',
    },
  },
  computed: {
    styles() {
      return {
        display: this.block ? 'block' : ''
      }
    },
  },
}
</script>
