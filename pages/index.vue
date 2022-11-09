<template>
  <ui-layout>
    <template #header>
      <header>header</header>
      <ui-input v-model.number="value" />
    </template>
    <template #main>
      <div style="max-width: 1000px; margin: auto;">
        <ui-swiper
          :slides-per-view="value"
          :loop="true"
          :breakpoints="{
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }"
      >
          <ui-swiper-wrapper>
            <ui-swiper-slide>1</ui-swiper-slide>
            <ui-swiper-slide>2</ui-swiper-slide>
            <ui-swiper-slide>3</ui-swiper-slide>
            <ui-swiper-slide>4</ui-swiper-slide>
            <ui-swiper-slide>5</ui-swiper-slide>
            <ui-swiper-slide>6</ui-swiper-slide>
            <ui-swiper-slide>7</ui-swiper-slide>
            <ui-swiper-slide>8</ui-swiper-slide>
            <ui-swiper-slide>9</ui-swiper-slide>
            <ui-swiper-slide>10</ui-swiper-slide>
          </ui-swiper-wrapper>

          <ui-swiper-pagination></ui-swiper-pagination>

          <ui-swiper-navigation>
            <ui-swiper-navigation-button next>
              next
            </ui-swiper-navigation-button>
            <ui-swiper-navigation-button prev>
              prev
            </ui-swiper-navigation-button>
          </ui-swiper-navigation>
        </ui-swiper>
      </div>
      <hr style="margin: 30px 0">
      <div style="max-width: 1000px; margin: auto;">
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
      value: 1
    }
  }
}
</script>
