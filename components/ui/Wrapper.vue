<template>
  <component :is="tag" class="ui-wrapper">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-wrapper
  margin: 0 auto
  width: 100%
  max-width: 300px
  @media (min-width: map-get($breakpoints, 'sm'))
    max-width: 780px
    padding: 0 10px
  @media (min-width: map-get($breakpoints, 'lg'))
    max-width: 1170px
    padding: 0 20px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    max-width: 1448px
</style>
