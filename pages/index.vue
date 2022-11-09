<template>
  <ui-layout>
    <template #header>
      <header>header</header>
    </template>
    <template #main>
      <div>
      </div>
    </template>
    <template #footer>
      <footer>footer</footer>
    </template>
  </ui-layout>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
    }
  }
}
</script>

<style lang="sass" scoped>
.test-bg
  height: 500px
</style>
