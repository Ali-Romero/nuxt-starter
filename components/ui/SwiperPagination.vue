<template>
  <div ref="pagination" class="swiper-pagination" />
</template>

<script>
import camelize from 'camelize'

const defaults = {
  clickable: true
}

export default {
  inject: ['setSwiperParams', 'updateSwiper'],
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'div',
    }
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
    this.setSwiperParams({
      pagination: {
        el: this.$refs.pagination,
        ...defaults,
        ...camelize(this.$attrs)
      },
    })
  },
}
</script>

<style lang="sass" scoped>
.swiper-pagination
  display: flex
  ::v-deep
    .swiper-pagination-bullet
      margin-right: 10px
      display: block
      width: 10px
      height: 10px
      background: grey
      border-radius: 100%
      cursor: pointer

    .swiper-pagination-bullet-active
      background: green
</style>
