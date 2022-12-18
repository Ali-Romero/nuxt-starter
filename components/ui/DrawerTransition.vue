<template>
  <transition :name="transition_name">
    <slot />
  </transition>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: 'slide',
      validator(value) {
        return ['slide', 'fade'].includes(value)
      },
    },
    left: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    transition_name() {
      if (this.name === 'slide' && this.left) {
        return 'slide-left'
      }

      return this.name
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-drawer,
.ui-drawer-overlay,
.ui-drawer-close,
.ui-drawer-panel
  &,
  ::v-deep .ui-drawer-overlay,
  ::v-deep .ui-drawer-close,
  ::v-deep .ui-drawer-panel
    transition: all 0.3s

.slide-enter,
.slide-leave-to
  &:not(.ui-drawer),
  ::v-deep .ui-drawer-overlay,
  ::v-deep .ui-drawer-close,
  ::v-deep .ui-drawer-panel
    opacity: 0

  &:not(.ui-drawer),
  ::v-deep .ui-drawer-close,
  ::v-deep .ui-drawer-panel
    transform: translateX(100%)

.slide-left-enter,
.slide-left-leave-to
  &:not(.ui-drawer),
  ::v-deep .ui-drawer-overlay,
  ::v-deep .ui-drawer-close,
  ::v-deep .ui-drawer-panel
    opacity: 0

  &:not(.ui-drawer),
  ::v-deep .ui-drawer-close,
  ::v-deep .ui-drawer-panel
    transform: translateX(-100%)

.fade-enter,
.fade-leave-to
  &:not(.ui-drawer),
  ::v-deep .ui-drawer-overlay,
  ::v-deep .ui-drawer-close,
  ::v-deep .ui-drawer-panel
    opacity: 0
</style>
