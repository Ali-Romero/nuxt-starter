<template>
  <div class="agree-modal">
    <div class="agree-modal__checkbox">
      <ui-icon name="agree-checkbox"></ui-icon>
    </div>
    <div class="agree-modal__description">
      Я подтверждаю, что ознакомлен и даю согласие на обработку персональных
      данных на условиях и для целей, определяемых
      <a href="#" @click.prevent="modal = true">Политикой конфиденциальности</a>
    </div>
    <ui-modal v-model="modal">
      <app-privacy />
    </ui-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
    }
  },
}
</script>

<style lang="sass" scoped>
.agree-modal
  display: flex
  align-items: flex-start
  justify-content: center
  &__checkbox
    margin-right: 4px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 10px
    ::v-deep
      svg
        width: 14px
        height: 14px
        @media (min-width: map-get($breakpoints, 'sm'))
          width: 20px
          height: 20px

  &__description
    font-size: 10px
    line-height: 12px
    color: #7D7D7D
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 11px
      line-height: 13px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 12px
      line-height: 15px
    a
      text-decoration: underline
</style>
