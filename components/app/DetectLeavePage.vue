<template>
  <ui-modal v-model="modal">
    <app-feedback-modal-leave />
  </ui-modal>
</template>
<script>
export default {
  data() {
    return {
      timer: null,
      modal: false,
    }
  },
  beforeDestroy() {
    document.body.removeEventListener('mouseleave', this.onMouseLeave)
    document.body.removeEventListener('mouseenter', this.onMouseenter)
  },
  mounted() {
    document.body.addEventListener('mouseleave', this.onMouseLeave)
    document.body.addEventListener('mouseenter', this.onMouseenter)
  },
  methods: {
    onMouseLeave(e) {
      if (e.clientY < 10) {
        this.timer = setTimeout(() => {
          document.body.removeEventListener('mouseleave', this.onMouseLeave)
          this.modal = true
        }, 500)
      }
    },
    onMouseenter() {
      clearTimeout(this.timer)
    },
  },
}
</script>
