<template>
  <ui-form @submit="submit">
    <ui-validator v-slot="{ error }" rules="required">
      <ui-input-name v-model="fields.name" :error="error" />
    </ui-validator>
    <ui-validator v-slot="{ error }" rules="required|phone">
      <ui-input-phone v-model="fields.phone" :error="error" />
    </ui-validator>
    <ui-validator v-slot="{ error }" rules="required|email">
      <ui-input-email v-model="fields.email" :error="error" />
    </ui-validator>

    <ui-button type="submit">submit</ui-button>
  </ui-form>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        name: '',
        email: '',
        phone: '',
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
