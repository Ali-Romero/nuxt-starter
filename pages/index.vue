<template>
  <app-layout>
    <template #header>
      <header>header</header>
    </template>
    <template #main>
      <div>
        <ui-modal v-model="modal">
          <div>modal</div>
        </ui-modal>
        <button @click="modal = true">modal</button>
        <div style="height: 10000px">
          <div>
            <ui-icon name="brain" />
          </div>
          <div>
            <img src="@/assets/images/logo.png" alt="" width="200" height="100">
          </div>
          <ui-form>
            <ui-validator v-slot="{ error }" show-message rules="required|email">
              <ui-input v-model="value" :error="error" aria-label="Search" />
            </ui-validator>
            <ui-button type="submit">
              submit
            </ui-button>
          </ui-form>
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
      modal: false,
      value: ''
    }
  }
}
</script>
