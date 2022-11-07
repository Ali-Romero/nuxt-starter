<template>
  <component v-bind="$attrs" :is="tag" class="ui-button" v-on="$listeners">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button',
    },
  },
}
</script>
