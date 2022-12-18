<template>
  <div
    class="ui-drawer-overlay"
    v-bind="$attrs"
    :style="styles"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    zIndex: {
      type: [Number, String],
      default: 105,
    },
  },
  computed: {
    styles() {
      return {
        zIndex: this.zIndex,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-drawer-overlay
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0

  /* after необходим для корректной работы анимации opacity */
  &::after
    content: ""
    height: 100%
    width: 100%
    position: absolute
    top: 0
    left: 0
    background: #6c6c6c
    opacity: 0.75
</style>
