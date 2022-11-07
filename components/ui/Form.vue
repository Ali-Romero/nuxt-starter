<template>
  <validation-observer ref="form" v-slot="v" tag="div">
    <form v-bind="$attrs" @submit.prevent="submit">
      <slot v-bind="v" />
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
  },
  methods: {
    async submit() {
      const valid = await this.$refs.form.validate()

      if (valid) {
        this.$emit('submit')
      }
    },
  },
}
</script>
