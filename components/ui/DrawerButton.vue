<template>
  <button
    v-bind="$attrs"
    type="button"
    class="ui-drawer-button"
    :class="classes"
    :style="styles"
    @click="model = !model"
    v-on="$listeners"
  >
    <span
      class="ui-drawer-button__line ui-drawer-button__line--top"
      :style="lineStyles"
    />
    <span
      class="ui-drawer-button__line ui-drawer-button__line--middle"
      :style="lineStyles"
    />
    <span
      class="ui-drawer-button__line ui-drawer-button__line--bottom"
      :style="lineStyles"
    />
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '24px',
    },
    height: {
      type: String,
      default: '22px',
    },
    lineWidth: {
      type: String,
      default: '24px',
    },
    lineHeight: {
      type: String,
      default: '4px',
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    classes() {
      return {
        'ui-drawer-button--active': this.model,
      }
    },
    styles() {
      return {
        width: this.width,
        height: this.height,
      }
    },
    lineStyles() {
      return {
        width: this.lineWidth,
        height: this.lineHeight,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-drawer-button
  $parent: &

  display: inline-block
  padding: 0
  position: relative
  background: none
  border: none
  outline: none
  cursor: pointer
  user-select: none

  &__line
    margin: auto
    position: absolute
    background: #1EA2CC
    left: 0
    right: 0
    border-radius: 10px

    &--top
      top: 0
      transition: top $transition-timing, transform $transition-timing

    &--middle
      top: 0
      bottom: 0
      transition: all $transition-timing

    &--bottom
      bottom: 0
      transition: bottom $transition-timing, transform $transition-timing

  &--active
    #{$parent}__line--top
      top: 50%
      transform: translateY(-50%) rotate(45deg)

    #{$parent}__line--middle
      opacity: 0
      transform: translateX(-100%)

    #{$parent}__line--bottom
      bottom: 50%
      transform: translateY(50%) rotate(-45deg)
</style>
