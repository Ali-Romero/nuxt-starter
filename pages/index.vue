<template>
  <ui-layout>
    <template #header>
      <header>header</header>
    </template>
    <template #main>
      <div>
        <ui-image-bg src="2.png" class="test-bg" sizes="sm:100px md:400px lg:800px" />
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
