<template>
  <div class="ui-circle-slider">
    <div class="ui-circle-slider__center">
      <slot />
    </div>
    <div class="ui-circle-slider__track" :style="styles">
      <ui-circle-slider-item
        v-for="(item, index) in items"
        :key="item"
        :position="item"
        :rotation="oppositeRotation"
      >
        <slot :name="index" v-bind="{ active: value === index }" />
      </ui-circle-slider-item>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    length: {
      type: Number,
      default: 0,
    },
    gap: {
      type: [Number, String, Array],
      default: 'auto',
    },
    start: {
      type: Number,
      default: 0,
    },
    clockwise: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rotations() {
      const gap = this.gap === 'auto' ? 360 / this.length : +this.gap
      const [first, ...rest] = new Array(this.length).fill(0)
      const reduce = (acc) => [...acc, acc.at(-1) + gap]

      return Array.isArray(this.gap) ? this.gap : rest.reduce(reduce, [first])
    },
    items() {
      return this.clockwise
        ? this.rotations.map((item) => -item)
        : this.rotations
    },
    rotation() {
      const start = this.clockwise ? this.start : -this.start
      const rotation = this.rotations[this.value] + start

      return this.clockwise ? rotation : -rotation
    },
    oppositeRotation() {
      return -this.rotation
    },
    styles() {
      return {
        transform: `rotate(${this.rotation}deg)`,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-circle-slider
  position: relative
  border-radius: 100%

  &__center,
  &__track
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0

  &__center
    display: flex
    align-items: center
    justify-content: center

  &__track
    transition: transform $transition-timing
</style>
