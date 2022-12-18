<template>
  <validation-provider
    v-slot="{ errors }"
    v-bind="$attrs"
    class="ui-validator"
    tag="div"
    mode="lazy"
  >
    <div class="ui-validator__field">
      <slot v-bind="{ error: !!errors.length }" />
    </div>

    <ui-transition-collapse v-if="showMessage">
      <div v-if="!!errors.length">
        <div class="ui-validator__error">
          {{ errors[0] }}
        </div>
      </div>
    </ui-transition-collapse>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },
  inheritAttrs: false,
  props: {
    showMessage: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-validator
  position: relative
  &__field
    height: 100%
  &__error
    position: absolute
    display: inline-block
    color: #b11d1d
    animation: shake 0.3s 0.3s
    font-size: 11px
    line-height: 12px
    left: 16px
    font-family: 'Montserrat-Medium'
    bottom: -13px
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 12px
      left: 5px
      bottom: -14px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 14px
      line-height: 16px
      left: 2px
      bottom: -16px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 15px
      line-height: 16px
      bottom: -17px

@keyframes shake
  0%
    transform: translateX(-10px)
  25%
    transform: translateX(10px)
  50%
    transform: translateX(-6px)
  75%
    transform: translateX(6px)
  100%
    transform: translateX(0)
</style>
