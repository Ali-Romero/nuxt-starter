import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MARKERS = false

const mm = gsap.matchMedia()

const eventBus = new Vue()

export default function({ $config }, inject) {
  function createMediaQuery(breakpoint) {
    const [min, max] = breakpoint.split('-')
    const minValue = Number.isInteger(+min) ? min : $config.breakpoints[min]
    const maxValue = Number.isInteger(+max) ? max : $config.breakpoints[max]
    const minQuery = minValue ? `(min-width: ${minValue}px)` : ''
    const maxQuery = maxValue ? `(max-width: ${maxValue - 1}px)` : ''

    return [minQuery, maxQuery].filter((v) => v).join(' and ')
  }

  function apply(breakpoint, fn) {
    if (breakpoint) {
      mm.add(createMediaQuery(breakpoint), fn)
    } else {
      fn()
    }
  }

  function applyTween(timelineId, fn) {
    if (!timelineId) {
      fn(gsap)

      return
    }

    const timeline = gsap.getById(timelineId)

    if (timeline) {
      fn(timeline)
    } else {
      eventBus.$on(timelineId, fn)
    }
  }

  function createTimeline(id, el, values) {
    const timeline = gsap.timeline({
      id,
      scrollTrigger: {
        anticipatePin: true,
        invalidateOnRefresh: true,
        markers: MARKERS,
        trigger: el,
        ...values,
      },
    })

    if (id) {
      eventBus.$emit(id, timeline)
    }

    return timeline
  }

  const timelineDirective = {
    inserted(el, { modifiers = {}, arg, value = {} }) {
      const [breakpoint] = Object.keys(modifiers)

      apply(breakpoint, function() {
        createTimeline(arg, el, value)
      })
    }
  }

  const tweenToDirective = {
    inserted(el, { modifiers = {}, arg, value = [] }) {
      const [breakpoint] = Object.keys(modifiers)
      const [to, position] = value


      apply(breakpoint, function() {
        applyTween(arg, (timeline) => {
          timeline.to(el, to, position)
        })
      })
    }
  }

  const tweenFromDirective = {
    inserted(el, { modifiers = {}, arg, value = [] }) {
      const [breakpoint] = Object.keys(modifiers)
      const [from, position] = value

      apply(breakpoint, function() {
        applyTween(arg, (timeline) => {
          timeline.from(el, from, position)
        })
      })
    }
  }

  const tweenFromToDirective = {
    inserted(el, { modifiers = {}, arg, value = [] }) {
      const [breakpoint] = Object.keys(modifiers)
      const [from, to, position] = value

      apply(breakpoint, function() {
        applyTween(arg, (timeline) => {
          timeline.fromTo(el, from, to, position)
        })
      })
    }
  }

  Vue.directive('gsap-timeline', timelineDirective)
  Vue.directive('gsap-to', tweenToDirective)
  Vue.directive('gsap-from', tweenFromDirective)
  Vue.directive('gsap-from-to', tweenFromToDirective)

  inject('gsap', gsap)
}
