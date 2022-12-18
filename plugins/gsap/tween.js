import { gsap } from "gsap"
import { eventBus, mediaDecorator, serializeModifiers } from "./utils"

const tweenMap = {
  'gsap-to': 'to',
  'gsap-from': 'from',
  'gsap-from-to': 'fromTo',
}

function createTween(timelineId, type, el, ...args) {
  const timeline = timelineId ? gsap.getById(timelineId) : gsap

  const apply = (tl) => tl[type](el, ...args)

  if (timeline) {
    apply(timeline)
  } else {
    eventBus.$on(`timeline-created:${timelineId}`, apply)
  }
}

export const tweenDirective = {
  inserted(el, { name, modifiers = {}, arg, value = [] }) {
    const { breakpoint } = serializeModifiers(modifiers)

    const params = typeof value === 'function' ? value(el) : value

    mediaDecorator(createTween, breakpoint)(arg, tweenMap[name], el, ...params)
  },
}
