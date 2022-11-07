<template>
  <validation-provider
    v-slot="{ errors }"
    v-bind="$attrs"
    class="ui-validator"
    tag="div"
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
  &__error
    display: inline-block
    color: red
    animation: shake 0.3s 0.3s

@keyframes shake
  0%
    transform: translateX(-10px)
  25%
    transform: translateX(10px)
  50%
    transform: translateX(-5px)
  75%
    transform: translateX(5px)
  100%
    transform: translateX(0)
</style>
