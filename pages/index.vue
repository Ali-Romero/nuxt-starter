<template>
  <ui-layout>
    <template #header>
      <header>header</header>
      <ui-input v-model.number="value" />
    </template>
    <template #main>
      <div style="max-width: 1000px; margin: auto;">
        <ui-image src="logo.png" sizes="sm:50px md:100px lg:200px" />
      </div>
      <div style="height: 400px">

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
      test: false,
      checkbox: '',
      value: 1
    }
  }
}
</script>
