<template>
  <component :is="tag" :style="styles">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    width: {
      type: [String, Number],
      default: '',
    },
    src: {
      type: String,
      required: true,
    },
    sizes: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      webp: true,
    }
  },
  computed: {
    breakpoints() {
      return this.sizes.split(' ').map((size) => {
        const [bp, value] = size.split(':')

        return { [bp]: parseInt(value) }
      })
    },
    currentBreakpoint() {
      const breakpoints = this.breakpoints.map((breakpoint) => {
        return Object.entries(breakpoint)[0][0]
      })
      const sortedBreakpoints = [...this.$screen.breakpointsOrder].reverse().filter(
        (breakpoint) => breakpoints.includes(breakpoint)
      )
      const current = sortedBreakpoints.find((breakpoint) => {
        return this.$screen[breakpoint]
      })

      return current || sortedBreakpoints.at(-1)
    },
    images() {
      return this.breakpoints.reduce((acc, breakpoint) => {
        const [bp, width] = Object.entries(breakpoint)[0]

        return {
          ...acc,
          [bp]: this.generateImageKit({ width })
        }
      }, {})
    },
    imagePath() {
      const image = this.sizes
        ? this.images[this.currentBreakpoint]
        : this.generateImageKit({ width: parseInt(this.width) || undefined })

      return this.webp ? image.webp : image.native
    },
    styles() {
      const path = this.imagePath

      return {
        backgroundImage: process.client ? `url('${path}')` : ''
      }
    },
  },
  async beforeCreate() {
    this.webp = process.server || await require('supports-webp').default
  },
  methods: {
    generateImage(params = {}) {
      return this.$img(this.src, { ...params, quality: 80 })
    },
    generateImageKit(params = {}) {
      return {
        native: this.generateImage(params),
        webp: this.generateImage({ format: 'webp', ...params }),
      }
    }
  },
}
</script>
