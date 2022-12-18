<template>
  <div class="ui-circle-item" :style="itemStyles">
    <div class="ui-circle-item__outer" :style="outerStyles">
      <div class="ui-circle-item__inner" :style="innerStyles">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: Number,
      default: 0,
    },
    rotation: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    itemStyles() {
      return {
        transform: `rotate(${this.position}deg)`,
      }
    },
    outerStyles() {
      return {
        transform: `rotate(${-this.position}deg)`,
      }
    },
    innerStyles() {
      return {
        transform: `rotate(${this.rotation}deg)`,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-circle-item
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
  display: flex
  justify-content: center

  &__outer
    display: flex
    align-items: center
    height: 0

  &__inner
    transition: transform $transition-timing
</style>
