<template>
  <div ref="pagination" class="swiper-pagination" />
</template>

<script>
export default {
  inject: ['setSwiperParams'],
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'div',
    }
  },
  mounted() {
    this.setSwiperParams({
      pagination: {
        el: this.$refs.pagination,
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
