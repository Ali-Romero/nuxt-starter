<template>
  <label class="ui-input" :aria-label="ariaLabel" :class="classes">
    <span v-if="icon" class="ui-input__icon">
      <slot name="icon">
        <ui-icon :name="icon" />
      </slot>
    </span>
    <span class="ui-input__field">
      <input
        v-model="model"
        v-mask="mask"
        v-bind="$attrs"
        class="ui-input__input"
        :type="type"
        @focus="focus = true"
        @blur="focus = false"
        v-on="listeners"
      />

      <span v-if="showMaskPlaceholder" class="ui-input__mask">
        <span>{{ maskPlaceholder.value }}</span>{{ maskPlaceholder.mask }}
      </span>
    </span>
  </label>
</template>

<script>
import { VueMaskDirective } from 'v-mask'

export default {
  directives: {
    mask: VueMaskDirective,
  },
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    error: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    ariaLabel: {
      type: String,
      default: 'input',
    },
    /**
     * Маска для поля ввода. Использует директиву из модуля 'v-mask'
     */
     mask: {
      type: [String, Array, Boolean],
      default: false,
    },
    /**
     * Отображение символов маски. Заполняет оставшиеся символы символом "_"
     */
    showMask: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focus: false,
    }
  },
  computed: {
    listeners() {
      const { input, ...listeners } = this.$listeners

      return listeners
    },
    showMaskPlaceholder() {
      return this.showMask
    },
    maskPlaceholder() {
      const value = this.value
      const mask = this.mask.slice(value.length).replace(/#/g, '_')

      return {
        value,
        mask
      }
    },
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    classes() {
      return {
        'ui-input--focus': this.focus,
        'ui-input--error': this.error
      }
    }
  },
}
</script>

<style lang="sass" scoped>
.ui-input
  display: flex
  border: 1px solid grey

  &--focus
    border-color: black

  &--error
    border-color: red

  &__icon
    margin-right: 10px

  &__field
    font-size: 14px
    line-height: 20px
    position: relative
    display: block
    flex: 1

  &__mask,
  &__input
    height: 100%
    font-size: inherit
    line-height: inherit
    color: inherit
    display: block

  &__mask
    display: flex
    align-items: center
    position: absolute
    top: 0
    left: 0
    pointer-events: none

    & span
      visibility: hidden

  &__input
    border: none
    background: none
    outline: none
    padding: 0
    margin: 0
</style>
