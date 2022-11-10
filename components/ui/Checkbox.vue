<template>
  <label class="ui-checkbox" :aria-label="ariaLabel" :class="classes">
    <input
      v-model="model"
      v-bind="$attrs"
      :type="radio ? 'radio' : 'checkbox'"
      :value="value"
      class="ui-checkbox__input"
      v-on="listeners"
    />
    <span class="ui-checkbox__icon"></span>
    <span class="ui-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'inputValue',
    event: 'input',
  },
  props: {
    /**
     * Значени v-model.
     */
    /* eslint-disable-next-line */
    inputValue: {
      required: true,
    },
    ariaLabel: {
      type: String,
      default: 'input',
    },
    /**
     * Предназначено для чекбоксов с массивом в качестве значения и для radio.
     * Значение конкретного элемента.
     */
    /* eslint-disable-next-line */
    value: {
      default: '',
    },
    /**
     * checkbox type="radio"
     */
     radio: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      const { input, ...listeners } = this.$listeners

      return listeners
    },
    model: {
      get() {
        return this.inputValue
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    classes() {
      return {
        'ui-checkbox--radio': this.radio,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-checkbox
  display: flex
  align-items: center

  &__input
    margin: 0
    width: 0
    height: 0
    overflow: hidden
    visibility: hidden

  &__input:checked + &__icon
    background: orange

  &__icon
    display: block
    width: 10px
    height: 10px
    border: 1px solid grey

  &__label
    display: block
    margin-left: 10px
</style>
