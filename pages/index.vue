<template>
  <ui-layout>
    <template #header>
      <header style="height: 100px">header</header>
    </template>
    <template #main>
      <div style="height: 300px; background-color: grey;">
        asd
      </div>
      <div ref="test" style="height: 300px; background-color: brown;">
        <div>
          <div ref="xxx" style="width: 100px;">XXX</div>
          <div ref="zzz">ZZZ</div>
        </div>
      </div>
      <div style="height: 300px; background-color: purple;">
        asd
      </div>
      <div style="height: 300px; background-color: grey;">
        asd
      </div>
      <div style="height: 300px; background-color: green;">
        asd
      </div>
      <div>
        <div style="height: 300px; background-color: brown;">
          <div>WWW</div>
        </div>
      </div>
      <div style="height: 300px; background-color: purple;">
        asd
      </div>
      <div style="height: 300px; background-color: grey;">
        asd
      </div>
    </template>
    <template #footer>
      <footer>footer</footer>
    </template>
  </ui-layout>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

console.log(ScrollTrigger)

export default {
  data() {
    return {
      test: false,
      checkbox: '',
      value: 1
    }
  },
  mounted() {
    const test = gsap.timeline({
      scrollTrigger: {
        markers: true,
        trigger: this.$refs.test,
        pin: true,   // pin the trigger element while active
        pinSpacing: true,
        start: "top center", // when the top of the trigger hits the top of the viewport
        end: "50%", // end after scrolling 500px beyond the start
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      }
    });

    test.to(this.$refs.xxx, { rotation: 360, duration: 1 }, 1)
    test.to(this.$refs.zzz, { opacity: 0, duration: 1 }, 1)
  }
}
</script>
