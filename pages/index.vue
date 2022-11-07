<template>
  <app-layout>
    <template #header>
      <header>header</header>
    </template>
    <template #main>
      <div style="padding: 20px;">
        <h1>index page</h1>
        <div>
          <img src="@/assets/images/logo.png" width="200" height="100" alt="" />
        </div>
        <div>
          <ui-icon name="brain" width="100px" />
        </div>
        <div>
          {{ value }}
          <ui-input v-model="value" show-mask mask="##-##" icon="brain" />
        </div>
      </div>
    </template>
    <template #footer>
      <footer>footer</footer>
    </template>
  </app-layout>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
}
</script>
