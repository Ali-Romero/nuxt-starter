<template>
  <component :is="tag" ref="swiper" class="swiper">
    <slot />
  </component>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import merge from 'deepmerge'
import { isPlainObject } from 'is-plain-object'
import camelize from 'camelize'

export default {
  provide() {
    return {
      swiper: new Swiper({
        modules: [Navigation, Pagination],
        ...camelize(this.$attrs)
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
  },
  watch: {
    $attrs: {
      handler(value) {
        this.setSwiperParams(camelize(value))
        this.updateSwiper()
      },
      deep: true,
    },
  },
  mounted() {
    this._provided.swiper.init(this.$refs.swiper)
    window.swiper = this._provided.swiper
    window.comp = this
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
