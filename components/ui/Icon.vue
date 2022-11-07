<template>
  <component :is="`icons-${name}`"></component>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
