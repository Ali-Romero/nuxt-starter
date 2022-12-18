<template>
  <button
    v-bind="$attrs"
    type="button"
    class="ui-lessons-nav-btn"
    :class="classes"
    @click="model = !model"
    v-on="$listeners"
  >
    <span class="ui-lessons-nav-btn__container">
      <span class="ui-lessons-nav-btn__line"></span>
      <span class="ui-lessons-nav-btn__line"></span>
      <span class="ui-lessons-nav-btn__line"></span>
    </span>
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
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
        'ui-lessons-nav-btn--active': this.model,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-lessons-nav-btn
  border: none
  background: #F8F8F8
  border: 1px solid #e4e4e4
  outline: none
  font-size: 14px
  line-height: 16px
  padding: 4px
  display: flex
  align-items: center
  border-radius: 3px
  color: #1C95BC
  transform: scale(1) translateX(0px)
  transition: all 0.4s
  opacity: 1
  &--active
    transform: scale(0) translateX(100px)
    opacity: 0
  &__container
    margin-right: 5px
  &__line
    display: block
    width: 20px
    height: 2px
    margin-bottom: 3px
    border-radius: 4px
    background-color: #1C95BC
    &:last-child
      margin-bottom: 0
</style>
