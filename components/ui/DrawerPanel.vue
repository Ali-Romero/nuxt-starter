<template>
  <!--
    data-scroll-lock-scrollable - атрибут необходим для корректной работы
    скроллинга IOS устройств в момент блокировки скролла
    см. https://www.npmjs.com/package/scroll-lock
  -->
  <div
    data-scroll-lock-scrollable
    class="ui-drawer-panel"
    :class="classes"
    :style="styles"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Левое расположение
     */
    left: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: [Number, String],
      default: 110,
    },
    /**
     * Мини размер = $drawer-xs-width
     */
    xs: {
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
        'ui-drawer-panel--left': this.left,
        'ui-drawer-panel--xs': this.xs,
      }
    },
    styles() {
      return {
        width: this.width,
        zIndex: this.zIndex,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-drawer-panel
  position: fixed
  height: 100%
  top: 0
  background: #F8F8F8
  width: $drawer-width
  right: 0
  box-shadow: -10px 0px 50px rgba(51, 51, 51, 0.05)
  transition: width $transition-timing
  will-change: width
  overflow-x: hidden

  @include scrollbar()

  &--left
    right: auto
    left: 0

  &--xs
    width: $drawer-xs-width
</style>
