<template>
  <ui-drawer-transition :left="left" :name="transitionName">
    <ui-drawer-wrapper
      v-if="value"
      :tag="tag"
      :z-index="zIndexPanel"
      :scroll-lock="scrollLock && value"
    >
      <ui-drawer-close
        v-if="closeButton"
        :left="left"
        :z-index="zIndexClose"
        @click="close"
      />

      <ui-drawer-panel :left="left" :width="width" :z-index="zIndexPanel">
        <slot v-bind="{ close }" />
      </ui-drawer-panel>

      <ui-drawer-overlay
        v-if="overlay"
        :z-index="zIndexOverlay"
        @click="close"
      />
    </ui-drawer-wrapper>
  </ui-drawer-transition>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'aside',
    },
    /**
     * Значение v-model. Открытие/Закрытие
     */
    value: {
      type: Boolean,
      required: true,
    },
    scrollLock: {
      type: Boolean,
      default: true,
    },
    /**
     * Расположение слева
     */
    left: {
      type: Boolean,
      default: false,
    },
    /**
     * Отображение кнопки закрытия
     */
    closeButton: {
      type: Boolean,
      default: true,
    },
    /**
     * Отображение overlay
     */
    overlay: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: [Number, String],
      default: 110,
    },
    zIndexPanel: {
      type: [Number, String],
      default() {
        return this.zIndex
      },
    },
    zIndexClose: {
      type: [Number, String],
      default() {
        return +this.zIndex + 5
      },
    },
    zIndexOverlay: {
      type: [Number, String],
      default() {
        return +this.zIndex - 5
      },
    },
    width: {
      type: String,
      default: '',
    },
    transitionName: {
      type: String,
      default: 'slide',
    },
  },
  methods: {
    close() {
      this.$emit('input', false)
    },
  },
}
</script>
