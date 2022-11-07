<template>
  <client-only>
    <v-modal
      v-slot="{ close }"
      v-bind="$attrs"
      scroll-lock-gap-method="margin"
      v-on="$listeners"
    >
      <slot v-bind="{ close }" />
    </v-modal>
  </client-only>
</template>

<script>
import 'vue-pro-modal/dist/vue-pro-modal.css';
import { VModal } from 'vue-pro-modal'

export default {
  components: {
    VModal,
  },
}
</script>
