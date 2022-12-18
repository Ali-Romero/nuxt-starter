<template>
  <div class="ui-drawer-inner" :class="classes" :style="styles">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    xs: {
      type: Boolean,
      default: false,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        'ui-drawer-inner--xs': this.xs,
        'ui-drawer-inner--no-padding': this.noPadding,
      }
    },
    styles() {
      return {
        width: this.width,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-drawer-inner
  $parent: &

  width: $drawer-width
  min-height: 100%
  transition: padding $transition-timing
  will-change: padding

  &:not(&--no-padding)
    padding: 36px 20px

  &--xs
    width: $drawer-xs-width

    &:not(#{$parent}--no-padding)
      padding: 36px
</style>
