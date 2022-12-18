<template>
  <component
    v-bind="$attrs"
    :is="tag"
    class="ui-button"
    :class="classes"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'ui-button--fluid': this.fluid,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-button
  position: relative
  z-index: 1
  -webkit-tap-highlight-color: transparent
  border: none
  overflow: hidden
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  background: linear-gradient(180deg, #3F00C5 0%, #3F00C5 0%, #3F00C5 100%)
  color: white
  border-radius: 6px
  font-family: 'Montserrat-Medium'
  height: 72px
  font-size: 16px
  line-height: 18px
  transition: all 0.3s
  @media (min-width: map-get($breakpoints, 'sm'))
    font-size: 14px
    line-height: 20px
  @media (min-width: map-get($breakpoints, 'lg'))
    font-size: 18px
    line-height: 26px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    font-size: 22px
    line-height: 36px
  &:focus-visible
    outline: none
    border: none
  &--fluid
    width: 100%
    height: 100%
  &:hover
    background: linear-gradient(180deg, #6533d1 0%, #6533d1 0%, #6533d1 100%)
  &:active
    background: linear-gradient(180deg, #32009e 0%, #32009e 0%, #32009e 100%)
  &::before
    content: ""
    position: absolute
    top: 0
    height: 100%
    width: 45px
    transform: skewX(-45deg)
    left: -150%
    background: linear-gradient(90deg, RGBA(255,255,255,0.12), RGBA(255,255,255,0.87))
    animation: flareAnimation 3s infinite ease-in
    @keyframes flareAnimation
      0%
        left: -150%
      100%
        left: 150%
  &__icon
    margin-left: 8px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-left: 12px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-left: 18px
    svg
      width: 20px
      height: 20px
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 21px
        height: 19px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 24px
        height: 25px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 27px
        height: 28px
</style>
