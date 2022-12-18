<template>
  <client-only>
    <v-modal
      v-slot="{ close }"
      v-bind="$attrs"
      scroll-lock-gap-method="padding"
      :layout="false"
      focusable-element="input"
      v-on="$listeners"
    >
      <button class="modal__close" @click="close">
        <ui-icon name="icon-close"></ui-icon>
      </button>
      <slot v-bind="{ close }" />
    </v-modal>
  </client-only>
</template>

<script>
import 'vue-pro-modal/dist/vue-pro-modal.css'
import VModal from 'vue-pro-modal/src/components/lib/Modal.vue'

export default {
  components: {
    VModal,
  },
}
</script>

<style lang="sass">
.modal
  padding: 30px 0 !important
  overflow: auto
  &__container
    overflow: unset !important
    @include scrollbar()
  &__overlay
    position: fixed !important
  &__close
    position: absolute
    right: 0
    top: 0
    background: none
    outline: none
    border: none
    z-index: 1
    right: 4px
    top: 9px
    cursor: pointer
    @media (min-width: map-get($breakpoints, 'sm'))
      right: -22px
      top: -4px
    @media (min-width: map-get($breakpoints, 'lg'))
      right: -25px
      top: -4px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      right: -28px
      top: -7px
    svg
      width: 14px
      height: 14px
      color: black
      @media (min-width: map-get($breakpoints, 'sm'))
        color: white
        width: 16px
        height: 16px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 20px
        height: 20px
</style>
