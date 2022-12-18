import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { timelineDirective } from './timeline'
import { watchDirective } from './watch'
import { tweenDirective } from './tween'
import { scrolltoDirective } from './scroll-to'
import { enterDirective } from './enter'
import { timelines } from './state'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

export default function (ctx, inject) {
  Vue.directive('gsap-timeline', timelineDirective)
  Vue.directive('gsap-to', tweenDirective)
  Vue.directive('gsap-from', tweenDirective)
  Vue.directive('gsap-from-to', tweenDirective)
  Vue.directive('gsap-watch', watchDirective)
  Vue.directive('gsap-scroll-to', scrolltoDirective)
  Vue.directive('gsap-enter', enterDirective)

  inject('gsap', {
    gsap,
    timelines,
  })
}
