<template>
  <div class="page">
    <transition name="fade-blur">
      <div v-if="loading" class="page__overlay">
        <div class="page__spinner page__spinner--1" />
        <div class="page__spinner page__spinner--2" />
        <div class="page__spinner page__spinner--3" />
      </div>
    </transition>

    <slot />
  </div>
</template>

<script>
let loaded = false

export default {
  data() {
    return {
      loading: !loaded,
    }
  },
  mounted() {
    if (!loaded) {
      loaded = true

      this.loading = false
    }
  }
}
</script>

<style lang="sass" scoped>
.page
  height: 100%

  &__overlay
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    height: 100%
    position: fixed
    top: 0
    left: 0
    background-color: #FFFFFF

  &__spinner
    width: 10px
    height: 10px
    border-radius: 100%
    background-color: #243287
    animation: loading 0.4s infinite alternate-reverse

    &--2
      margin: 0 4px
      animation-delay: 0.1s

    &--3
      animation-delay: 0.2s

@keyframes loading
  from
    transform: scale(1)

  to
    transform: scale(0.5)
</style>
