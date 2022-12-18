<template>
  <ui-form class="feedback" @submit="submit">
    <div class="feedback__top">
      <h3 class="feedback__title">
        Остались вопросы?
        <span
          >Напишите свой вопрос ниже и получите развёрнутую консультацию от
          наших специалистов</span
        >
      </h3>
    </div>
    <div class="feedback__container">
      <ui-validator
        v-slot="{ error }"
        show-message
        class="feedback__input"
        rules="required"
      >
        <ui-input-question v-model="fields.question" :error="error" />
      </ui-validator>
      <ui-validator
        v-slot="{ error }"
        show-message
        class="feedback__input"
        rules="required"
      >
        <ui-input-name v-model="fields.name" :error="error" />
      </ui-validator>
      <ui-validator
        v-slot="{ error }"
        show-message
        rules="required|email"
        class="feedback__input"
      >
        <ui-input-email v-model="fields.email" :error="error" />
      </ui-validator>
      <div class="feedback__button">
        <ui-button fluid type="submit">Задать вопрос</ui-button>
      </div>
    </div>
    <div class="feedback__agree">
      <ui-agree></ui-agree>
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
        question: '',
        'section-name-text':
          'Остались вопросы? Напишите свой вопрос ниже и получите развёрнутую консультацию от наших специалистов',
        'section-btn-text': 'Задать вопрос',
        'section-name': 'Открытая',
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
.feedback
  color: white
  &__top
    display: flex
    justify-content: center
  &__title
    font-size: 20px
    line-height: 28px
    font-weight: 400
    text-align: center
    margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 26px
      line-height: 30px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 28px
      line-height: 34px
    span
      display: block
      margin-top: 12px
      font-size: 15px
      line-height: 18px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        margin-top: 16px
        font-size: 16px
        line-height: 20px


  &__container
    margin-bottom: 14px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 26px
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 16px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 26px

  &__input
    max-width: 260px
    width: 100%
    margin: 0 auto
    margin-bottom: 20px
    height: 50px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
      margin-bottom: 0
      max-width: 176px
      height: 46px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 252px
      height: 54px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 280px
      height: 60px
    &:last-child
      margin-bottom: 0
    &:first-child
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 208px
      @media (min-width: map-get($breakpoints, 'lg'))
        max-width: 340px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        max-width: 424px
  &__button
    max-width: 260px
    width: 100%
    margin: 0 auto
    height: 50px
    @media (min-width: map-get($breakpoints, 'sm'))
      height: auto
      margin: 0
      max-width: 180px
      height: 48px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 260px
      height: 60px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 328px
      height: 72px
  &__agree
    ::v-deep
      .agree
        &__description
          @media (min-width: map-get($breakpoints, 'sm'))
            text-align: center
          @media (min-width: map-get($breakpoints, 'lg'))
            text-align: left
        &__checkbox
          @media (min-width: map-get($breakpoints, 'sm'))
            margin-top: -4px
          @media (min-width: map-get($breakpoints, 'lg'))
            margin-top: -2px
          svg
            width: 16px
            height: 19px
</style>
