<template>
  <label class="ui-input-file" :class="classes">
    <input
      ref="input"
      type="file"
      :accept="accept"
      hidden
      @change="onceChange"
    />

    <span class="ui-input-file__trigger">
      <span class="ui-input-file__rect">
        <ui-icon name="clip" />
      </span>
      <span v-if="fileName" class="ui-input-file__label">
        {{ fileName }}
      </span>
      <span v-else class="ui-input-file__label">
        Прикрепитe резюме
      </span>
    </span>
  </label>
</template>

<script>
export default {
  props: {
    /* eslint-disable-next-line */
    value: {
      required: true,
    },
    /**
     * Форматы разрешённых файлов
     */
    accept: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fileName: this.value?.name,
    }
  },
  computed: {
    classes() {
      return {
        'ui-input-file--error': this.error,
      }
    },
  },
  methods: {
    change(value) {
      this.fileName = value.name
      this.$emit('input', value)

      this.$refs.input.value = ''
    },
    onceChange(event) {
      this.change(event.target.files[0])
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-input-file
  display: block

  &--error
    color: red

  &__trigger
    display: inline-flex
    align-items: center
    cursor: pointer

  &__rect
    margin-right: 16px
    min-width: 50px
    width: 50px
    height: 50px
    display: flex
    align-items: center
    justify-content: center
    background-color: #D2EAF2
    border: 1px solid #E1E1E1
    border-radius: 6px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-right: 16px
      min-width: 62px
      width: 62px
      height: 62px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 18px
      min-width: 66px
      width: 66px
      height: 66px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-right: 24px
      min-width: 88px
      width: 88px
      height: 88px
    svg
      width: 32px
      height: 28px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 38px
        height: 34px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 41px
        height: 37px
  &__label
    font-style: italic
    font-weight: 300
    font-size: 13px
    line-height: 14px
    font-family: 'Montserrat-Light'
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 14px
      line-height: 18px
</style>
