<template>
  <ui-layout>
    <template #header>
      <header>header</header>
      <app-feedback-form />
    </template>
    <template #main>
      <div style="max-width: 1000px; margin: auto;">
        <ui-image src="logo.png" sizes="sm:50px md:100px lg:200px" />
      </div>
      <div style="height: 400px">
        <ui-swiper>
          <ui-swiper-wrapper>
            <ui-swiper-slide>1</ui-swiper-slide>
            <ui-swiper-slide>2</ui-swiper-slide>
            <ui-swiper-slide>3</ui-swiper-slide>
            <ui-swiper-slide>4</ui-swiper-slide>
          </ui-swiper-wrapper>

          <ui-swiper-navigation>
            <ui-swiper-navigation-button prev />
            <ui-swiper-navigation-button next />
          </ui-swiper-navigation>
        </ui-swiper>
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
