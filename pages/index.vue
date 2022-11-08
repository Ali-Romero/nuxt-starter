<template>
  <app-layout>
    <template #header>
      <header>header</header>
    </template>
    <template #main>
      <div>
        <div class="asdasd">

        </div>
        <ui-modal v-model="modal">
          <div>modal</div>
        </ui-modal>
        <button @click="modal = true">modal</button>
        <div>
          <div>
            <ui-icon name="brain" />
          </div>
          <div>
            <ui-image
              src="logo.png"
              img-class="test"
              :modifiers="{ width: '200', height: '100' }"
              sizes="sm:100px md:200px lg:400px"
            />
          </div>
          <div>
            <ui-image src="1.jpg" sizes="sm:100px md:200px lg:400px" />
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
