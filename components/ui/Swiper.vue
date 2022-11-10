<template>
  <component :is="tag" ref="swiper" class="swiper">
    <slot />
  </component>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import Swiper, { Navigation, Pagination } from 'swiper'
import merge from 'deepmerge'
import { isPlainObject } from 'is-plain-object'

export default {
  provide() {
    return {
      swiper: new Swiper({
        modules: [Navigation, Pagination],
        ...this.params
      }),
      updateSwiper: this.updateSwiper,
      setSwiperParams: this.setSwiperParams,
    }
  },
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    params: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    params: {
      handler(value) {
        this.setSwiperParams(value)
        this.updateSwiper()
      },
      deep: true,
    },
  },
  mounted() {
    this._provided.swiper.init(this.$refs.swiper)
  },
  methods: {
    setSwiperParams(params) {
      this._provided.swiper.params = merge(
        this._provided.swiper.params,
        params,
        { arrayMerge: (_, sourceArray) => sourceArray, isMergeableObject: isPlainObject }
      )
    },
    updateSwiper() {
      this._provided.swiper.update()
    },
  },
}
</script>

<style lang="sass" scoped>
.swiper-pointer-events
  touch-action: pan-y

.swiper
  margin-left: auto
  margin-right: auto
  position: relative
  overflow: hidden
  list-style: none
  padding: 0
  z-index: 1
</style>
