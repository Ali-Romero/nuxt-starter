<template>
  <transition
    :key="Date.now() + Math.random()"
    name="collapse"
    v-bind="$attrs"
    @beforeEnter="beforeEnter"
    @afterEnter="afterEnter"
    @beforeLeave="beforeLeave"
    @afterLeave="afterLeave"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'height',
      validator(value) {
        return ['height', 'width'].includes(value)
      },
    },
  },
  methods: {
    raf() {
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve()
          })
        })
      })
    },
    toCapitalize(str) {
      const [first, ...rest] = str.split('')

      return `${first.toUpperCase()}${rest.join('').toLowerCase()}`
    },
    getSize(element, type) {
      const size = element[`${type}${this.toCapitalize(this.mode)}`]

      return `${size}px`
    },
    async beforeEnter(element) {
      element.style[this.mode] = '0px'

      await this.raf()

      element.style[this.mode] = this.getSize(element, 'scroll')
    },
    afterEnter(element) {
      element.style[this.mode] = null
    },
    async beforeLeave(element) {
      element.style[this.mode] = this.getSize(element, 'offset')

      await this.raf()

      element.style[this.mode] = '0px'
    },
    afterLeave(element) {
      element.style[this.mode] = null
    },
  },
}
</script>

<style lang="sass" scoped>
.collapse-enter-active,
.collapse-leave-active
  transition: 0.3s ease-out
  will-change: height
  overflow: hidden
</style>
