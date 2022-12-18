<template>
  <ui-drawer-wrapper
    :tag="tag"
    :z-index="zIndexPanel"
    :scroll-lock="local_expanded"
  >
    <ui-drawer-transition :left="left" name="slide">
      <ui-drawer-close
        v-if="local_expanded"
        :left="left"
        :z-index="zIndexClose"
        @click="collapse"
      />
    </ui-drawer-transition>

    <ui-drawer-panel :left="left" :xs="!local_expanded" :z-index="zIndexPanel">
      <slot v-bind="{ collapse, expand, expanded: local_expanded }" />
    </ui-drawer-panel>

    <ui-drawer-transition name="fade">
      <ui-drawer-overlay
        v-if="local_expanded"
        :z-index="zIndexOverlay"
        @click="collapse"
      />
    </ui-drawer-transition>
  </ui-drawer-wrapper>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'aside',
    },
    /**
     * Расширенный
     */
    expanded: {
      type: Boolean,
      default: false,
    },
    /**
     * Расположение слева
     */
    left: {
      type: Boolean,
      default: false,
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
  },
  data() {
    return {
      local_expanded: this.expanded,
    }
  },
  watch: {
    local_expanded(value) {
      this.$emit('update:expanded', value)
    },
    expanded(value) {
      this.local_expanded = value
    },
  },
  methods: {
    expand() {
      this.local_expanded = true
    },
    collapse() {
      this.local_expanded = false
    },
  },
}
</script>
