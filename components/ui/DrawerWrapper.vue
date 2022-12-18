<template>
  <component
    :is="tag"
    v-scroll-lock:padding="scrollLock"
    :style="styles"
    class="ui-drawer"
  >
    <slot />
  </component>
</template>

<script>
import { directive } from 'vue-body-scroll-lock'

export default {
  directives: {
    scrollLock: directive,
  },
  props: {
    tag: {
      type: String,
      default: 'aside',
    },
    scrollLock: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: [Number, String],
      default: 110,
    },
  },
  computed: {
    styles() {
      return {
        zIndex: this.zIndex,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-drawer
  position: relative
</style>
