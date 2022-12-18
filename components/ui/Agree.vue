<template>
  <div class="agree">
    <div class="agree__checkbox">
      <ui-icon name="checked-icon"></ui-icon>
    </div>
    <div class="agree__description">
      Я подтверждаю, что ознакомлен и даю согласие на обработку персональных
      данных на условиях и для целей, определяемых
      <br class="d-none d-lg-none" />
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
.agree
  display: flex
  justify-content: center
  max-width: 255px
  margin: 0 auto
  @media (min-width: map-get($breakpoints, 'sm'))
    max-width: 100%
    margin: 0
  &__checkbox
    margin-right: 4px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 10px
    svg
      width: 14px
      height: 14px
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 19px
        height: 19px
      @media (min-width: map-get($breakpoints, 'gl'))
        width: 21px
        height: 21px
  &__description
    font-size: 9px
    line-height: 12px
    color: #ffffff
    text-align: left
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: center
      font-size: 11px
      line-height: 12px
    @media (min-width: map-get($breakpoints, 'lg'))
      text-align: left
      font-size: 13px
      line-height: 17px
    a
      text-decoration: underline
</style>
