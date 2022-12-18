<!-- eslint-disable vue/no-v-html -->
<template>
  <label class="ui-input" :class="classes">
    <span class="ui-input__icon">
      <slot name="icon">
        <ui-icon :name="icon" />
      </slot>
    </span>
    <span class="ui-input__field">
      <textarea
        v-if="textarea"
        ref="input"
        v-model="model"
        v-mask="mask"
        v-bind="$attrs"
        class="ui-input__input"
        @mouseup="mouseupHandler"
        @focus="focusHandler"
        @blur="blurHandler"
        v-on="listeners"
      />
      <input
        v-else
        ref="input"
        v-model="model"
        v-mask="mask"
        v-bind="$attrs"
        class="ui-input__input"
        @mouseup="mouseupHandler"
        @focus="focusHandler"
        @blur="blurHandler"
        v-on="listeners"
      />

      <span v-if="showMaskPlaceholder" class="ui-input__mask">
        <span
          v-for="(char,
          index) in `${maskPlaceholder.value}${maskPlaceholder.mask}`.split('')"
          :key="index"
          :class="{
            'ui-input__mask-hidden': index < maskPlaceholder.value.length,
          }"
          >{{ char }}</span
        >
      </span>
    </span>
  </label>
</template>

<script>
import { VueMaskDirective, VueMaskFilter } from 'v-mask'

export default {
  directives: {
    mask: VueMaskDirective,
  },
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
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
    startMask: {
      type: String,
      default: '',
    },
    textarea: {
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
        mask,
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
        'ui-input--error': this.error,
        'ui-input--textarea': this.textarea,
      }
    },
  },
  methods: {
    mouseupHandler() {
      this.$refs.input.setSelectionRange(this.value.length, this.value.length)
    },
    focusHandler() {
      if (this.startMask && this.mask && !this.model) {
        this.model = VueMaskFilter(this.startMask, this.mask)

        setTimeout(() => {
          this.$refs.input.setSelectionRange(
            this.startMask.length,
            this.startMask.length
          )
        })
      }

      this.focus = true
    },
    blurHandler() {
      if (
        this.startMask &&
        this.mask &&
        VueMaskFilter(this.model, this.mask) === this.startMask
      ) {
        this.model = ''
      }

      this.focus = false
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-input
  display: flex
  border: 1px solid #A9A9A9
  background-color: white
  border-radius: 6px
  height: 100%
  padding: 0 10px 0 20px
  @media (min-width: map-get($breakpoints, 'sm'))
    padding: 0 8px 0 10px
  @media (min-width: map-get($breakpoints, 'lg'))
    padding: 0 12px 0 20px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    padding: 0 20px 0 30px
  &--focus
    border-color: #E1E1E1

  &--error
    border-color: red

  &--textarea
    textarea
      outline: none
      -moz-appearance: none
      overflow: auto
      resize: none
      color: white
      height: 100%
      color: black
    .ui-input__field
      height: 100%
  &__icon
    margin-right: 14px
    display: flex
    align-items: center
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-right: 6px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 16px
    svg
      width: 20px
      height: 20px
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 18px
        height: 18px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 24px
        height: 24px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 28px
        height: 28px
  &__field
    font-size: 13px
    line-height: 15px
    color: black
    position: relative
    display: block
    flex: 1
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 13px
      line-height: 16px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 14px
      line-height: 18px

  &__mask,
  &__input
    height: 100%
    font-size: inherit
    line-height: inherit
    color: inherit
    width: 100%
    display: block
    font-family: 'Montserrat-Light'

  &__mask
    display: flex
    align-items: center
    position: absolute
    top: 0
    left: 0
    pointer-events: none
    color: #8a8a8a
    white-space: pre

    &-hidden
      visibility: hidden

  &__input
    border: none
    background: none
    outline: none
    padding: 0
    margin: 0
  &__input::-webkit-input-placeholder
    font-family: 'Montserrat-Light'
  &__input:-moz-placeholder
    font-family: 'Montserrat-Light'
  &__input::-moz-placeholder
    font-family: 'Montserrat-Light'
  &__input:-ms-input-placeholder
    font-family: 'Montserrat-Light'
  &__input::placeholder
    font-family: 'Montserrat-Light'
</style>
