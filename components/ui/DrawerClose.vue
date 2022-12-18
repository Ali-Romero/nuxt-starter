<template>
  <div class="ui-drawer-close" :class="classes" :style="styles">
    <button class="ui-drawer-close__btn" v-on="$listeners">
      <ui-icon name="icon-close"></ui-icon>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: [Number, String],
      default: 106,
    },
  },
  computed: {
    classes() {
      return {
        'ui-drawer-close--left': this.left,
      }
    },
    styles() {
      return {
        zIndex: this.zIndex,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-drawer-close
  margin: auto
  width: 46px
  height: 46px
  position: fixed
  top: 0
  bottom: 0
  right: $drawer-width - 23px
  &--left
    right: auto
    left: $drawer-width - 23px
  &__btn
    border: none
    background: #333e48f2
    border-radius: 100%
    width: 40px
    height: 40px
    display: flex
    justify-content: center
    align-items: center
    svg
      color: #b9def1

@media (min-width: map-get($breakpoints, 'xxs'))
  .ui-drawer-close
    right: $drawer-width + 18px

    &--left
      right: auto
      left: $drawer-width + 18px
</style>
