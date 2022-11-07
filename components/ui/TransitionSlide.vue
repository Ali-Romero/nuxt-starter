<template>
  <div ref="wrapper" class="slide-transition">
    <component
      :is="transition_component"
      v-if="keepAlive"
      :name="name"
      tag="div"
      @beforeEnter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <keep-alive>
        <slot />
      </keep-alive>
    </component>

    <component
      :is="transition_component"
      v-else
      :name="name"
      tag="div"
      @beforeEnter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <slot />
    </component>
  </div>
</template>

<script>
export default {
  props: {
    keepAlive: {
      type: Boolean,
      default: false,
    },
    group: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: 'right',
    },
  },
  computed: {
    transition_component() {
      return this.group ? 'transition-group' : 'transition'
    },
    name() {
      return `slide-fade-${this.direction}`
    },
  },
  methods: {
    beforeEnter(el) {
      const { wrapper } = this.$refs

      wrapper.style.height = `${wrapper.offsetHeight}px`

      el.style.width = '100%'
      el.style.position = 'absolute'
      el.style.boxSizing = 'border-box'
      el.style.top = '0'
      el.style.left = '0'
    },
    enter(el) {
      const { wrapper } = this.$refs

      wrapper.style.height = `${el.offsetHeight}px`
    },
    afterEnter(el) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const { wrapper } = this.$refs

          wrapper.style.height = ''

          el.style.width = ''
          el.style.position = ''
          el.style.boxSizing = ''
          el.style.top = ''
          el.style.left = ''
        })
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.slide-transition
  position: relative
  overflow: hidden
  transition: 0.15s ease-out
  will-change: height

  ::v-deep
    .slide-fade-left-leave-active,.slide-fade-left-enter-active,
    .slide-fade-right-leave-active,.slide-fade-right-enter-active
      transition: all 0.25s

    .slide-fade-left-enter
      transform: translate(100%, 0)
      opacity: 0

    .slide-fade-left-leave-to
      transform: translate(-100%, 0)
      opacity: 0

    .slide-fade-right-enter
      transform: translate(-100%, 0)
      opacity: 0

    .slide-fade-right-leave-to
      transform: translate(100%, 0)
      opacity: 0
</style>
