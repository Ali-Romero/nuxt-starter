<template>
  <ui-form class="feedback-modal-call" @submit="submit">
    <div class="feedback-modal-call__wrapper">
      <div class="feedback-modal-call__image"></div>
      <div class="feedback-modal-call__top">
        <div class="feedback-modal-call__title">
          Заполните форму, и мы перезвоним Вам в ближайшее время
        </div>
        <div class="feedback-modal-call__container">
          <ui-validator
            v-slot="{ error }"
            show-message
            class="feedback-modal-call__input"
            rules="required"
          >
            <ui-input-name v-model="fields.name" :error="error" />
          </ui-validator>
          <ui-validator
            v-slot="{ error }"
            show-message
            rules="required|email"
            class="feedback-modal-call__input"
          >
            <ui-input-email v-model="fields.email" :error="error" />
          </ui-validator>
          <ui-validator
            v-slot="{ error }"
            show-message
            rules="required|phone"
            class="feedback-modal-call__input"
          >
            <ui-input-phone v-model="fields.phone" :error="error" />
          </ui-validator>
          <div class="feedback-modal-call__button">
            <ui-button fluid type="submit">Заказать звонок</ui-button>
          </div>
          <div class="feedback-modal-call__agree">
            <ui-agree-modal></ui-agree-modal>
          </div>
        </div>
      </div>
    </div>
  </ui-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      fields: {
        name: '',
        email: '',
        phone: '',
        'section-name-text':
          'Заполните форму, и мы перезвоним Вам в ближайшее время',
        'section-btn-text': 'Заказать звонок',
        'section-name': 'Закрытая',
      },
    }
  },
  methods: {
    async submit() {
      await this.$feedback.submit(this.fields)
    },
  },
}
</script>

<style lang="sass" scoped>
.feedback-modal-call
  background: #FFFFFF
  box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.08)
  border-radius: 8px
  width: 300px
  margin: 0 auto
  overflow: hidden
  @media (min-width: map-get($breakpoints, 'sm'))
    width: 576px
  @media (min-width: map-get($breakpoints, 'lg'))
    width: 670px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    width: 730px


  &__wrapper
    @media (min-width: map-get($breakpoints, 'sm'))
      display: flex
      justify-content: space-between

  &__top
    max-width: 258px
    margin: 0 auto
    padding: 20px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
      display: block
      max-width: 316px
      padding: 30px 0 0 0
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 392px
      padding: 30px 21px 35px 9px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 435px
      padding: 40px 21px 35px 53px

  &__title
    font-size: 17px
    line-height: 21px
    margin-bottom: 20px
    color: #212121
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 18px
      line-height: 22px
      margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 20px
      line-height: 26px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 22px
      line-height: 31px
      margin-bottom: 24px


  &__title-info
    font-family: 'Manrope-Light'
    display: block

  &__image
    display: none
    @media (min-width: map-get($breakpoints, 'sm'))
      display: block
    img
      width: 280px
      height: auto
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 260px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 304px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 328px
  &__container
    max-width: 258px
    width: 100%
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 296px
  &__input
    margin-bottom: 16px
    height: 50px
    @media (min-width: map-get($breakpoints, 'lg'))
      height: 60px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 24px


  &__button
    height: 50px
    margin-bottom: 12px
    @media (min-width: map-get($breakpoints, 'lg'))
      height: 60px
      margin-bottom: 8px
      height: 60px
    ::v-deep
      .ui-button
        font-size: 16px
        line-height: 20px
        @media (min-width: map-get($breakpoints, 'lg'))
          font-size: 20px
          line-height: 36px
</style>
